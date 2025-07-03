import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <form className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2">
        <p>Email address</p>
        <Input placeholder="Enter your email" />
      </Label>

      <Button type="submit">Submit</Button>

      <Link
        href="/auth/login"
        className="text-xs text-muted-foreground hover:underline underline-offset-2 text-center block"
      >
        Back to login
      </Link>
    </form>
  );
}
