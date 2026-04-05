"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  children,
  className = "space-y-2",
}: FormFieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      {children || <Input id={id} type={type} placeholder={placeholder} />}
    </div>
  );
}
