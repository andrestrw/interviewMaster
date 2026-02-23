import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.email(
    "Please enter a valid email address (e.g., name@example.com).",
  ),

  password: z
    .string()
    .min(7, "Password must be at least 7 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character.",
    ),
});

// Undertsand how work ptincipal and repetitive structure
// Understand the "Refine" part
export type ContactFormData = z.infer<typeof SignUpSchema>;
