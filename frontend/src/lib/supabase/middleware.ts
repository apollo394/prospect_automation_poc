import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isCompanyEmail } from "@/lib/auth/domain";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const path = request.nextUrl.pathname;
  const isAuthRoute = path === "/login" || path === "/signup";
  const isApiRoute = path.startsWith("/api");

  // API is rewritten to FastAPI — refresh cookies if possible, never HTML-redirect.
  // Page routes always require a company session when Supabase is configured.
  if (!url || !key) {
    if (!isAuthRoute && !isApiRoute) {
      const login = request.nextUrl.clone();
      login.pathname = "/login";
      login.searchParams.set("error", "config");
      return NextResponse.redirect(login);
    }
    return supabaseResponse;
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims as { email?: string; sub?: string } | undefined;
  const email = claims?.email;
  const signedIn = Boolean(claims?.sub);

  if (isApiRoute) {
    return supabaseResponse;
  }

  if (signedIn && email && !isCompanyEmail(email)) {
    await supabase.auth.signOut();
    const login = request.nextUrl.clone();
    login.pathname = "/login";
    login.searchParams.set("error", "domain");
    return NextResponse.redirect(login);
  }

  if (!signedIn && !isAuthRoute) {
    const login = request.nextUrl.clone();
    login.pathname = "/login";
    login.searchParams.set("next", path);
    return NextResponse.redirect(login);
  }

  if (signedIn && isAuthRoute) {
    const home = request.nextUrl.clone();
    home.pathname = "/";
    return NextResponse.redirect(home);
  }

  return supabaseResponse;
}

/** Matcher paths that should skip auth middleware (static assets). */
export const PUBLIC_PATH_PREFIXES = ["/_next/static", "/_next/image", "/favicon.ico"];

export function isPublicAssetPath(pathname: string): boolean {
  return PUBLIC_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );
}
