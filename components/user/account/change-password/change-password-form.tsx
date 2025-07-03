import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";

export default function ChangePasswordForm() {
  return (
    <form className="space-y-6 max-w-2xl py-2">
      <Label className="flex-center">
        <span className="w-60">Password</span>
        <PasswordInput placeholder="*********" />
      </Label>

      <Label className="flex-center">
        <span className="w-60">New password</span>
        <PasswordInput placeholder="*********" />
      </Label>

      <Label className="flex-center">
        <span className="w-60">Confirm password</span>
        <PasswordInput placeholder="*********" />
      </Label>

      <Button>Save change</Button>
    </form>
  );
}
