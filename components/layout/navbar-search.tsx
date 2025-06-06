import { Input } from "@/components/ui/input";

export default function NavbarSearch() {
  return (
    <form>
      <Input
        placeholder="Search"
        className="w-52 focus:w-72 transition-[width] duration-200"
      />
    </form>
  );
}
