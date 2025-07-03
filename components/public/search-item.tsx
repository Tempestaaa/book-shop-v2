import Link from "next/link";

export default function SearchItem() {
  return (
    <li className="rounded-md hover:bg-muted">
      <Link href="#" className="size-full block p-2">
        <p className="line-clamp-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit quis, deleniti exercitationem veniam eum asperiores iure
          maiores atque excepturi harum tempora odit delectus animi adipisci
          perferendis laboriosam ducimus. Debitis, dicta.
        </p>
      </Link>
    </li>
  );
}
