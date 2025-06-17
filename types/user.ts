import { z } from "zod/v4";

export const loginSchema = z.object({
  email: z.email("Invalid email").min(1, "Email cannot be empty"),
  password: z.string().min(1, "Password cannot be empty"),
});
export type Login = z.infer<typeof loginSchema>;

export const registerSchema = loginSchema
  .extend({
    username: z.string().min(1, "Username cannot be empty"),
    confirmPassword: z.string().min(1, "Password cannot be empty"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type Register = z.infer<typeof registerSchema>;
