import Logo from "@/components/layout/logo";
import NavbarButtons from "@/components/layout/navbar-buttons";
import NavbarMenu from "@/components/layout/navbar-menu";
import NavbarSearch from "@/components/layout/navbar-search";
import NavbarUser from "@/components/layout/navbar-user";

export default function Navbar() {
  return (
    <nav className="h-14 w-full fixed text-sm bg-background z-[90]">
      <section className="flex-center justify-between container mx-auto">
        <section className="flex-center gap-4">
          <Logo />
          <NavbarMenu />
        </section>

        <section className="flex-center gap-4">
          <NavbarSearch />
          <NavbarButtons />
          <NavbarUser />
        </section>
      </section>
    </nav>
  );
}
