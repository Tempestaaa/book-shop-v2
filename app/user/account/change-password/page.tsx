import { Separator } from "@/components/ui/separator";
import ChangePasswordForm from "@/components/user/account/change-password/change-password-form";
import UserHeader from "@/components/user/user-header";

export default function ChangePasswordPage() {
  return (
    <article className="space-y-4">
      <UserHeader
        label="Change password"
        description="Change your password regularly to avoid losing your account."
      />
      <Separator />
      <ChangePasswordForm />
    </article>
  );
}
