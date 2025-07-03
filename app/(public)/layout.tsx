import Navbar from "@/components/public/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="py-16">{children}</main>
    </div>
  );
}
