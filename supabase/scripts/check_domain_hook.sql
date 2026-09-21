-- Runnable self-check for domain helpers (apply after auth migration).
-- Usage: psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f scripts/check_domain_hook.sql

do $$
begin
  assert private.is_company_email('user@simplicreative.com'), 'company email should pass';
  assert private.is_company_email('User@SimpliCreative.com'), 'case-insensitive company email should pass';
  assert not private.is_company_email('user@gmail.com'), 'gmail should fail';
  assert not private.is_company_email('user@simplicreative.com.evil.com'), 'spoofed subdomain should fail';
  assert not private.is_company_email(''), 'empty should fail';
  assert not private.is_company_email(null), 'null should fail';

  assert public.hook_before_user_created(
    jsonb_build_object('user', jsonb_build_object('email', 'ok@simplicreative.com'))
  ) = '{}'::jsonb, 'hook should allow company email';

  assert (public.hook_before_user_created(
    jsonb_build_object('user', jsonb_build_object('email', 'no@gmail.com'))
  ) -> 'error' ->> 'http_code') = '403', 'hook should reject non-company email';

  raise notice 'check_domain_hook: all asserts passed';
end;
$$;
