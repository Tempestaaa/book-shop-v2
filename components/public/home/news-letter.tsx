import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLetter() {
  return (
    <section className="bg-foreground text-background rounded-md py-32 px-4 text-center flex flex-col gap-4">
      <h2 className="text-heading">Stay Up-to-Date!</h2>
      <p className="text-xl mb-4">
        Sign up for our newsletter to get the latest on new releases, exclusive
        offers, and reading recommendations.
      </p>

      <form className="mx-auto flex-center gap-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          className="w-xs"
        />
        <Button type="submit">Subscribe Now</Button>
      </form>
    </section>
  );
}
