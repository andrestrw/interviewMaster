"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string; // Nuevo prop para capturar el error de validación
  children?: ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  error,
  children,
  className = "space-y-2",
}: FormFieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={id} className={error ? "text-destructive" : ""}>
        {label}
      </Label>
      {children || (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={error ? "border-destructive focus-visible:ring-destructive" : ""}
        />
      )}
      {error && (
        <p className="text-xs font-medium text-destructive mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
