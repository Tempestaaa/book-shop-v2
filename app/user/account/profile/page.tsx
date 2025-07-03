import { Separator } from "@/components/ui/separator";
import ChangeAvatar from "@/components/user/account/profile/change-avatar";
import ProfileForm from "@/components/user/account/profile/profile-form";
import UserHeader from "@/components/user/user-header";

export default function ProfilePage() {
  return (
    <article className="space-y-4">
      <UserHeader
        label="My profile"
        description="Manage profile information to keep your account secure"
      />

      <Separator />

      <section className="grid-center">
        <div className="w-full px-4 py-2 flex gap-8">
          <ProfileForm />

          <Separator
            orientation="vertical"
            className="!h-80 self-center-safe w-0.5"
          />

          <ChangeAvatar />
        </div>
      </section>
    </article>
  );
}
