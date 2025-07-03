import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full *:w-full"
    >
      <Button variant="ghost">Logout</Button>
    </form>
  );
}
