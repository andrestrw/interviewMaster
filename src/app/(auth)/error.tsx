"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/shared/ErrorState";

export default function AuthError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Auth error:", error);
  }, [error]);

  return (
    <div className="container flex items-center justify-center min-h-[60vh]">
      <ErrorState error={error} reset={reset} title="Authentication Error" />
    </div>
  );
}
