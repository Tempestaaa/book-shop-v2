"use client";

import MyBreadcrumb from "@/components/layout/my-breadcrumb";
import { Options } from "@/types/common";
import { usePathname } from "next/navigation";

export default function AccountBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbs: Options[] = [
    {
      label: "Home",
      href: "/",
    },
  ];

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  let currentPath = "";
  pathSegments.forEach((segment) => {
    const decodedSegment = decodeURIComponent(segment);
    if (segment === "account") return;
    currentPath += `/${segment}`;
    const label = decodedSegment
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    breadcrumbs.push({
      label: label,
      href: currentPath,
    });
  });

  return <MyBreadcrumb breadcrumbs={breadcrumbs} />;
}
