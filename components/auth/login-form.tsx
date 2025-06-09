import SocialButtons from "@/components/auth/social-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-3 h-full">
      <Label className="flex flex-col gap-2 items-start">
        <span className="font-medium">Username</span>
        <Input placeholder="Enter username" />
      </Label>

      <Label className="flex flex-col gap-2 items-start">
        <span className="font-medium">Password</span>
        <Input type="password" placeholder="******" />
      </Label>

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
  );
}
