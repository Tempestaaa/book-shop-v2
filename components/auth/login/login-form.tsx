"use client";

import SocialButton from "@/components/auth/social-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { userLogin, UserLogin } from "@/types/user";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { AuthError } from "next-auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(userLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: UserLogin) => {
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (res.error) toast.error("Invalid credentials.");
      else {
        toast.success("Login success.");
        push("/");
      }
    } catch (error) {
      if (error instanceof AuthError && error.type === "CredentialsSignin") {
        toast.error(error.message);
      } else {
        toast.error("Internal server error.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2">
        <p className={`${errors.email && "text-destructive"}`}>Email address</p>
        <Input
          {...register("email")}
          placeholder="Enter your email"
          className={`${errors.email && "border-destructive"}`}
        />
        {errors.email && (
          <p className="text-xs font-medium text-destructive">
            {errors.email.message}
          </p>
        )}
      </Label>

      <Label className="flex flex-col gap-2">
        <p className={`${errors.password && "text-destructive"}`}>Password</p>
        <PasswordInput
          {...register("password")}
          placeholder="******"
          className={`${errors.password && "border-destructive"}`}
        />
        {errors.password && (
          <p className="text-xs font-medium text-destructive">
            {errors.password.message}
          </p>
        )}
      </Label>

      <section className="flex-center gap-4 justify-between my-1">
        <Label className="flex-center cursor-pointer">
          <Checkbox />
          <span className="text-xs">Remember me</span>
        </Label>

        <Link
          href="/auth/forgot-password"
          className="text-xs text-muted-foreground hover:underline underline-offset-2"
        >
          Forgot password
        </Link>
      </section>

      <Button type="submit">Login</Button>

      <SocialButton isSignInPage />

      <p className="text-xs text-muted-foreground">
        Don&apos;t have an account?{" "}
        <span className="font-bold text-foreground hover:underline underline-offset-2">
          <Link href="/auth/register">Register</Link>
        </span>
      </p>
    </form>
  );
}
