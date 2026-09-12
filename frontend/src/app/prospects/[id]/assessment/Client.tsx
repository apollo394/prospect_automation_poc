"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AssessmentClient({ id }: { id: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/prospects/${id}/recommendation`);
  }, [id, router]);
  return <p className="text-sc-muted">Opening recommendation…</p>;
}
