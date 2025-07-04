import ThemeButton from "@/components/theme/theme-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DeleteAccountForm from "@/components/user/settings/delete-account-form";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <header className="text-heading">Settings</header>

      <section className="space-y-4">
        <section className="flex flex-col items-start gap-2">
          <div className="text-subheading">Two-factor authentication</div>

          <p className="text-sm text-muted-foreground font-normal">
            Two-factor authentication, also known as 2FA, is an additional
            security method that requires users to provide two different forms
            of identification to access an account or system. It acts as a
            second layer of protection, making your account much more secure
            than using just a password.
          </p>

          <Button className="mt-2">Activate</Button>
        </section>

        <Separator />

        <section className="flex flex-col items-start gap-2">
          <div className="text-subheading">Theme</div>
          <ThemeButton />
        </section>

        <Separator />

        <section className="flex flex-col items-start gap-2">
          <div className="text-subheading">Delete account</div>

          <p className="text-sm text-muted-foreground font-normal">
            Make sure before decide. This account will be deleted forever.
          </p>

          <DeleteAccountForm />
        </section>
      </section>
    </div>
  );
}
