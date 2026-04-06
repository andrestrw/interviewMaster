"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  children?: ReactNode;
  renderInput?: (errorClassName: string) => ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  error,
  children,
  renderInput,
  className = "space-y-2",
}: FormFieldProps) {
  const inputErrorClass = error
    ? "border-destructive focus-visible:ring-destructive"
    : "";

  return (
    <div className={className}>
      <Label htmlFor={id} className={error ? "text-destructive" : ""}>
        {label}
      </Label>
      {renderInput
        ? renderInput(inputErrorClass)
        : children ?? (
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              className={inputErrorClass}
            />
          )}
      {error && (
        <p className="text-xs font-medium text-destructive mt-1">{error}</p>
      )}
    </div>
  );
}
