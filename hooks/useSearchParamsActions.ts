"use client";

import { formatSearchParams } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSearchParamsActions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const getSearchParamsValue = (term: string) => searchParams.get(term);

  const isSearchParamsMatching = (term: string, value: string) =>
    getSearchParamsValue(term) === formatSearchParams(value);

  const createPageURL = (term: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(term, formatSearchParams(value));
    return `${pathname}?${params.toString()}`;
  };

  const changePageURL = (term: string, value: string) =>
    router.replace(createPageURL(term, value));

  const deletePageURL = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(term);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const getInitialSearchParamsValue = (term: string, defaultValue: string) => {
    const value = searchParams.get(term);
    return value ? value : defaultValue;
  };

  return {
    getSearchParamsValue,
    isSearchParamsMatching,
    createPageURL,
    changePageURL,
    deletePageURL,
    getInitialSearchParamsValue,
  };
}
