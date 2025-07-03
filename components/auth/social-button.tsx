import { Button } from "@/components/ui/button";

type Props = {
  isSignInPage?: boolean;
};

export default function SocialButton({ isSignInPage = false }: Props) {
  return (
    <>
      <div className="relative h-[1px] w-24 mx-auto bg-muted">
        <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground bg-background px-3">
          OR
        </span>
      </div>

      <Button type="button">
        Sign {isSignInPage ? "in" : "up"} with Google
      </Button>
    </>
  );
}
