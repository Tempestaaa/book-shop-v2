import { userNavbarMenu } from "@/lib/common";
import Link from "next/link";

export default function Sidebar() {
  return (
    <menu>
      {userNavbarMenu.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              className="block px-2 py-1.5 hover:bg-muted duration-300 rounded-md"
            >
              {item.label}
            </Link>
          ) : (
            <div className="">
              <p className="px-2 py-1.5">{item.label}</p>

              <ul>
                {item.children &&
                  item.children.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block ml-4 px-2 py-1.5 hover:bg-muted duration-300 rounded-md"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </menu>
  );
}
