import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="relative h-14 flex items-end">
      <Link href="/" className="text-4xl font-logo">
        ChillSpine.
      </Link>
      <span className="absolute left-6 bottom-1.5 text-[8px] tracking-widest">
        Since 2025
      </span>
    </h1>
  );
}
