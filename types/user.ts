import { z } from "zod/v4";

export const userLogin = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(1, "Password cannot be empty")
    .max(20, "Maximum 20 characters"),
});
export type UserLogin = z.infer<typeof userLogin>;

export const userRegister = userLogin
  .extend({
    username: z
      .string()
      .min(1, "Username cannot be empty")
      .max(50, "Maximum 50 characters"),
    confirmPassword: z
      .string()
      .min(1, "Password cannot be empty")
      .max(20, "Maximum 20 characters"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    path: ["confirmPassword"],
    error: "Passwords do not match",
  });
export type userRegister = z.infer<typeof userRegister>;

export const userForgotPassword = userLogin.pick({ email: true });
export type UserForgotPassword = z.infer<typeof userForgotPassword>;
