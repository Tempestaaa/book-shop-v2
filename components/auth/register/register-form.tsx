"use client";

import SocialButton from "@/components/auth/social-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { api } from "@/lib/api";
import { UserRegister, userRegister } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterForm() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>({
    resolver: zodResolver(userRegister),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: UserRegister) => {
    const { confirmPassword, ...rest } = values;
    const res = await api.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      rest
    );

    if (res.data) {
      push(`/auth/verify/${res.data.data._id}`);
      toast.success("Register success");
    } else {
      const jsonStartIndex = res.error!.indexOf("{");
      const jsonSubstring = res.error!.substring(jsonStartIndex);
      const parsedError = JSON.parse(jsonSubstring);
      const message = parsedError.message;
      toast.error(message);
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
        <p className={`${errors.username && "text-destructive"}`}>Username</p>
        <Input
          {...register("username")}
          placeholder="Enter your username"
          className={`${errors.username && "border-destructive"}`}
        />
        {errors.username && (
          <p className="text-xs font-medium text-destructive">
            {errors.username.message}
          </p>
        )}
      </Label>

      <Label className="flex flex-col gap-2">
        <p className={`${errors.password && "text-destructive"}`}>Password</p>
        <PasswordInput
          placeholder="******"
          {...register("password")}
          className={`${errors.password && "border-destructive"}`}
        />
        {errors.password && (
          <p className="text-xs font-medium text-destructive">
            {errors.password.message}
          </p>
        )}
      </Label>

      <Label className="flex flex-col gap-2">
        <p className={`${errors.confirmPassword && "text-destructive"}`}>
          Confirm password
        </p>
        <PasswordInput
          placeholder="******"
          {...register("confirmPassword")}
          className={`${errors.confirmPassword && "border-destructive"}`}
        />
        {errors.confirmPassword && (
          <p className="text-xs font-medium text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </Label>

      <Button type="submit">Register</Button>

      <SocialButton />

      <p className="text-xs text-muted-foreground">
        Already have an account?{" "}
        <span className="font-bold text-foreground hover:underline underline-offset-2">
          <Link href="/auth/login">Login</Link>
        </span>
      </p>
    </form>
  );
}
