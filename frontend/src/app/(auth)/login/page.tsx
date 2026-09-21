import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-sm text-sc-muted">Loading…</div>}>
      <LoginClient />
    </Suspense>
  );
}
