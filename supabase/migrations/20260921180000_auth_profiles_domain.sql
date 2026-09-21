-- Slice B: company email gate + profiles (single workspace)

create schema if not exists private;

create or replace function private.is_company_email(email text)
returns boolean
language sql
immutable
as $$
  select
    email is not null
    and position('@' in trim(email)) > 1
    and lower(split_part(trim(email), '@', 2)) = 'simplicreative.com';
$$;

revoke all on function private.is_company_email(text) from public;

-- Auth hook: deny signup unless *@simplicreative.com
create or replace function public.hook_before_user_created(event jsonb)
returns jsonb
language plpgsql
as $$
declare
  email text;
begin
  email := event->'user'->>'email';
  if not private.is_company_email(email) then
    return jsonb_build_object(
      'error', jsonb_build_object(
        'message', 'Only @simplicreative.com email addresses are allowed.',
        'http_code', 403
      )
    );
  end if;
  return '{}'::jsonb;
end;
$$;

grant execute on function public.hook_before_user_created(jsonb) to supabase_auth_admin;
revoke execute on function public.hook_before_user_created(jsonb) from authenticated, anon, public;
grant usage on schema public to supabase_auth_admin;
grant usage on schema private to supabase_auth_admin;
grant execute on function private.is_company_email(text) to supabase_auth_admin;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_email_domain_chk
    check (private.is_company_email(email))
);

alter table public.profiles enable row level security;

create policy profiles_select_authenticated on public.profiles
  for select to authenticated
  using ((select auth.uid()) is not null);

create policy profiles_update_own on public.profiles
  for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.enforce_profile_email_domain()
returns trigger
language plpgsql
as $$
begin
  if not private.is_company_email(new.email) then
    raise exception 'Only @simplicreative.com email addresses are allowed.';
  end if;
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_profiles_email_domain on public.profiles;
create trigger trg_profiles_email_domain
  before update of email on public.profiles
  for each row execute function public.enforce_profile_email_domain();

revoke all on table public.profiles from anon;
grant select, update on table public.profiles to authenticated;
