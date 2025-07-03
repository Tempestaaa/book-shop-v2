import SocialButton from "@/components/auth/social-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2">
        <p>Email address</p>
        <Input placeholder="Enter your email" />
      </Label>

      <Label className="flex flex-col gap-2">
        <p>Username</p>
        <Input placeholder="Enter your username" />
      </Label>

      <Label className="flex flex-col gap-2">
        <p>Password</p>
        <PasswordInput placeholder="******" />
      </Label>

      <Label className="flex flex-col gap-2">
        <p>Confirm password</p>
        <PasswordInput placeholder="******" />
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
