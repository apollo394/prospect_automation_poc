-- Slice E: app tables + single-workspace RLS

create table if not exists public.prospects (
  id text primary key,
  company_name text not null,
  website text not null default '',
  lead_source text not null default '',
  stage text not null default '',
  status text not null default '',
  assigned_to text not null default '',
  last_activity text not null default '',
  last_activity_label text not null default '',
  ai_analysis text not null default '',
  review_status text not null default '',
  next_action text not null default '',
  summary text not null default '',
  created_at text not null default '',
  updated_at text not null default ''
);

create table if not exists public.journeys (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.evidence (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  source text not null default '',
  source_type text not null default '',
  timestamp text not null default '',
  quote text not null default '',
  speaker text
);

create table if not exists public.insights (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  category text not null default '',
  title text not null default '',
  description text not null default '',
  confidence text not null default 'medium',
  evidence_ids jsonb not null default '[]'::jsonb
);

create table if not exists public.transcripts (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  payload jsonb not null default '{}'::jsonb
);

create table if not exists public.questionnaires (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  payload jsonb not null
);

create table if not exists public.assessments (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  payload jsonb not null
);

create table if not exists public.scopes (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  payload jsonb not null
);

create table if not exists public.pricings (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  payload jsonb not null
);

create table if not exists public.proposals (
  id text primary key,
  prospect_id text not null references public.prospects (id) on delete cascade,
  payload jsonb not null
);

create table if not exists public.services (
  id text primary key,
  payload jsonb not null
);

create table if not exists public.frameworks (
  id text primary key,
  payload jsonb not null
);

create table if not exists public.knowledge_sources (
  id text primary key,
  payload jsonb not null
);

-- RLS: authenticated company users share one workspace; anon gets nothing
do $$
declare
  t text;
begin
  foreach t in array array[
    'prospects', 'journeys', 'evidence', 'insights', 'transcripts',
    'questionnaires', 'assessments', 'scopes', 'pricings', 'proposals',
    'services', 'frameworks', 'knowledge_sources'
  ]
  loop
    execute format('alter table public.%I enable row level security', t);
    execute format('revoke all on table public.%I from anon', t);
  end loop;
end;
$$;

-- Mutable app data: full CRUD for authenticated
do $$
declare
  t text;
begin
  foreach t in array array[
    'prospects', 'journeys', 'evidence', 'insights', 'transcripts',
    'questionnaires', 'assessments', 'scopes', 'pricings', 'proposals'
  ]
  loop
    execute format(
      'create policy %I on public.%I for select to authenticated using ((select auth.uid()) is not null)',
      t || '_select', t
    );
    execute format(
      'create policy %I on public.%I for insert to authenticated with check ((select auth.uid()) is not null)',
      t || '_insert', t
    );
    execute format(
      'create policy %I on public.%I for update to authenticated using ((select auth.uid()) is not null) with check ((select auth.uid()) is not null)',
      t || '_update', t
    );
    execute format(
      'create policy %I on public.%I for delete to authenticated using ((select auth.uid()) is not null)',
      t || '_delete', t
    );
    execute format('grant select, insert, update, delete on table public.%I to authenticated', t);
  end loop;
end;
$$;

-- Catalogs: select-only for authenticated (seed via service role)
do $$
declare
  t text;
begin
  foreach t in array array['services', 'frameworks', 'knowledge_sources']
  loop
    execute format(
      'create policy %I on public.%I for select to authenticated using ((select auth.uid()) is not null)',
      t || '_select', t
    );
    execute format('grant select on table public.%I to authenticated', t);
  end loop;
end;
$$;
