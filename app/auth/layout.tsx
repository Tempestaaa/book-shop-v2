import Logo from "@/components/public/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute top-2">
        <Logo />
      </div>

      <div className="grid-center min-h-dvh py-20">{children}</div>
    </div>
  );
}
