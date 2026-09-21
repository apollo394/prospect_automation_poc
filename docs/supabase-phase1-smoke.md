# Phase 1 smoke checklist (Email Auth + Supabase store)

## Supabase dashboard
- [ ] Email provider enabled
- [ ] Migrations applied (`20260921180000_*`, `20260921180100_*`)
- [ ] Before User Created hook → `pg-functions://postgres/public/hook_before_user_created`
- [ ] Site URL `http://localhost:3002`; redirect URLs include `/login` and `/`
- [ ] Confirm email disabled for local (optional; saves ~2/hr email quota)
- [ ] Optional: `psql … -f supabase/scripts/check_domain_hook.sql`

## Env
- [ ] `frontend/.env.local` has URL + publishable key
- [ ] `backend/.env` has `SUPABASE_URL` + publishable key (JWT)
- [ ] Service role only for seed; never in `NEXT_PUBLIC_*`
- [ ] After seed: `USE_SUPABASE_STORE=1`

## Manual flows
- [ ] Signup with `you@gmail.com` fails (UI + hook)
- [ ] Signup with `you@simplicreative.com` succeeds
- [ ] Login works; unauthenticated `/` redirects to `/login`
- [ ] API without Bearer returns 401 when `SUPABASE_URL` set and `AUTH_BYPASS` off
- [ ] Journey list loads while signed in
- [ ] Sign out returns to `/login`

## Phase 2 (not in this build)
- [ ] Google OAuth provider + Cloud credentials
