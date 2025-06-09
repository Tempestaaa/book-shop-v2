import SocialButtons from "@/components/auth/social-buttons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterForm() {
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

      <Label className="flex flex-col gap-2 items-start">
        <span className="font-medium">Confirm password</span>
        <Input type="password" placeholder="******" />
      </Label>

      <Button type="submit" className="mt-3">
        Register
      </Button>

      <SocialButtons />

      <div className="mt-auto text-center text-xs text-muted-foreground">
        Already have an account?
        <span className="font-bold text-foreground hover:underline underline-offset-2 ml-1">
          <Link href="/login">Login</Link>
        </span>
      </div>
    </form>
  );
}
