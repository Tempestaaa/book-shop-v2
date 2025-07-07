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
      .min(1, "Confirm password cannot be empty")
      .max(20, "Maximum 20 characters"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    path: ["confirmPassword"],
    error: "Passwords do not match",
  });
export type UserRegister = z.infer<typeof userRegister>;

export const userForgotPassword = userLogin.pick({ email: true });
export type UserForgotPassword = z.infer<typeof userForgotPassword>;

export const userVerifyCode = z.object({
  _id: z.string(),
  code: z.string().length(36, "The code must be 36 characters"),
});
export type UserVerifyCode = z.infer<typeof userVerifyCode>;
