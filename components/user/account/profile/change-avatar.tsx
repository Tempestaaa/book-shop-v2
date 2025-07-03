import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ChangeAvatar() {
  return (
    <section className="w-80 grid-center">
      <form className="flex flex-col items-center-safe gap-6">
        <label>
          <input type="file" hidden className="peer" />
          <Avatar className="size-24">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </label>

        <Button>Choose image</Button>

        <section className="space-y-1 text-sm text-muted-foreground">
          <p>Maximum file size 1 MB</p>
          <p>Format: .JPEG, .PNG</p>
        </section>
      </form>
    </section>
  );
}
