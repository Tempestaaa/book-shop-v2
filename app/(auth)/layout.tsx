export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100dvh-10rem)] *:h-full *:grid *:place-items-center-safe">
      {children}
    </div>
  );
}
