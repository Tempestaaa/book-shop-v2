"use client";

import SearchItem from "@/components/public/search-item";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useHandleQuery from "@/hooks/useHandleQuery";
import { SearchIcon } from "lucide-react";
import { useCallback, useState } from "react";

export default function SearchDialog() {
  const [search, setSearch] = useState("");
  const { changeURLSearch } = useHandleQuery();

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      changeURLSearch("query", search);
    },
    [search, changeURLSearch]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSearch} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Search your book here</DialogTitle>
          </DialogHeader>

          <div className="relative">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Frieren: Beyond Journey's End..."
            />
          </div>
        </form>

        <ScrollArea className="max-h-100">
          {search.length > 0 ? (
            <ul>
              {[...Array(20)].map((_, id) => (
                <SearchItem key={id} />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground text-center">
              Book not found
            </p>
          )}

          <ScrollBar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
