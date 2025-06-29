export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-12 gap-8">{children}</div>;
}
