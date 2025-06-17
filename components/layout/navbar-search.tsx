"use client";

import { Input } from "@/components/ui/input";
import { formatSearchParams } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";

export default function NavbarSearch() {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const params = new URLSearchParams(searchParams);
      params.set("search", formatSearchParams(search));
      router.push(`/shop?${params.toString()}`);
      searchRef.current?.blur();
    },
    [search]
  );

  return (
    <form onSubmit={handleSearch} className="relative">
      <Input
        ref={searchRef}
        placeholder="Search"
        value={searchParams.get("search") || search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-52 focus:w-72 transition-[width] duration-300 peer"
      />

      {search.length > 0 && (
        <div className="hidden peer-focus:block absolute top-[calc(100%+0.5rem)] left-0 w-full rounded-md bg-background shadow-xs shadow-foreground p-4"></div>
      )}
    </form>
  );
}
