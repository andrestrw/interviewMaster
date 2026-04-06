import { z } from "zod";

export const SignUpSchema = z.object({
  role: z.enum(["designer", "developer", "manager"] as const, {
    error: "Please select a valid role.",
  }),

  firstName: z.string().min(2, "First name must be at least 2 characters."),

  lastName: z.string().min(2, "Last name must be at least 2 characters."),

  username: z.string().min(3, "Username must be at least 3 characters."),

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

  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export type SignUpData = z.infer<typeof SignUpSchema>;

export const LoginSchema = z.object({
  email: z.email(
    "Please enter a valid email address (e.g., name@example.com).",
  ),
  password: z.string().min(1, "Password is required."),
});

export type LoginData = z.infer<typeof LoginSchema>;
