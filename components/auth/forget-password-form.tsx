import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgetPasswordForm() {
  return (
    <form className="flex flex-col gap-3 h-full">
      <Label className="flex flex-col gap-2 items-start">
        <span className="font-medium text-sm">Username</span>
        <Input placeholder="Enter username" />
      </Label>

      <Button type="submit">Submit</Button>

      <Link
        href="/login"
        className="mt-auto mx-auto w-fit text-center text-xs text-muted-foreground hover:text-foreground hover:underline underline-offset-2 duration-300"
      >
        Back to login
      </Link>
    </form>
  );
}
