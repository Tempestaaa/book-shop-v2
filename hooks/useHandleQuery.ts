"use client";

import { slugify } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useHandleQuery() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const getQuery = (term: string) => searchParams.get(slugify(term));

  const isQueryMatch = (term: string, value: string) =>
    getQuery(term) === slugify(value);

  const createURL = (term: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(slugify(term), slugify(value));
    return `${pathname}?${params.toString()}`;
  };

  const changeURL = (term: string, value: string) =>
    push(createURL(term, value));

  const changeURLSearch = (term: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(slugify(term), slugify(value));
    push(`/search?${params.toString()}`);
  };

  const deleteURL = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(term);
    push(`${pathname}?${params.toString()}`);
  };

  const getInitialQuery = (term: string, defaultValue: string) => {
    const value = getQuery(term);
    return value ? value : slugify(defaultValue);
  };

  return {
    changeURL,
    getQuery,
    isQueryMatch,
    deleteURL,
    getInitialQuery,
    changeURLSearch,
  };
}
