import Logo from "@/components/public/logo";
import NavbarButtons from "@/components/public/navbar-buttons";
import NavbarMenu from "@/components/public/navbar-menu";
import NavbarUser from "@/components/public/navbar-user";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <nav className="h-14 w-full fixed top-0 left-0 z-50">
      <article className="max-w-[1440px] h-full mx-auto px-4 flex-center justify-between bg-background">
        <section className="flex-center gap-4">
          <Logo />
          <NavbarMenu />
        </section>

        <section className="flex-center gap-4">
          <NavbarButtons />
          <Separator orientation="vertical" className="!h-7" />
          <NavbarUser />
        </section>
      </article>
    </nav>
  );
}
