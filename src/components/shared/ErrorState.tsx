"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  error: Error;
  reset: () => void;
  title?: string;
}

export function ErrorState({ error, reset, title = "Something went wrong" }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 border rounded-lg bg-destructive/5">
      <AlertCircle className="h-12 w-12 text-destructive" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      <Button onClick={reset} variant="destructive">
        Try again
      </Button>
    </div>
  );
}
