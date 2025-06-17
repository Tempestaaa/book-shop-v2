"use client";

import SocialButtons from "@/components/auth/social-buttons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Login, loginSchema } from "@/types/user";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: Login) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 h-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          href="/forget-password"
          className="ml-auto mb-2 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground duration-300"
        >
          Forget your password?
        </Link>

        <Button type="submit" className="mt-1">
          Login
        </Button>

        <SocialButtons />

        <div className="mt-auto text-center text-xs text-muted-foreground">
          Don&apos;t have an account?
          <span className="font-medium text-foreground hover:underline underline-offset-2 ml-1">
            <Link href="/register">Create one</Link>
          </span>
        </div>
      </form>
    </Form>
  );
}
