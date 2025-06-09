import ThemeButton from "@/components/theme/theme-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <Label className="flex flex-col items-start gap-2">
        <div className="text-base">Two-factor authentication</div>

        <p className="text-sm text-muted-foreground font-normal">
          Two-factor authentication, also known as 2FA, is an additional
          security method that requires users to provide two different forms of
          identification to access an account or system. It acts as a second
          layer of protection, making your account much more secure than using
          just a password.
        </p>

        <Button>Active</Button>
      </Label>

      <Separator />

      <Label className="flex flex-col items-start gap-2">
        <div className="text-base">Theme</div>
        <ThemeButton />
      </Label>

      <Separator />

      <Label className="flex flex-col items-start gap-2">
        <div className="text-base">Delete account</div>

        <p className="text-sm text-muted-foreground font-normal">
          Make sure before decide. This account will be deleted forever.
        </p>

        <Button variant="destructive">Delete</Button>
      </Label>
    </div>
  );
}
