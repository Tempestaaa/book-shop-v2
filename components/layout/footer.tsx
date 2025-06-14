import Logo from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { footerMenu, socialIcons } from "@/data/common";
import { MailIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10">
      <article className="container mx-auto space-y-4">
        <section className="flex gap-8 *:flex-1">
          <section className="flex flex-col gap-4 justify-between">
            <Logo />

            <div className="flex justify-between items-end-safe">
              <div className="text-xs text-muted-foreground flex flex-col gap-1">
                <div className="flex-center gap-2 hover:text-foreground duration-300 cursor-pointer">
                  <MapPinIcon className="size-3" />
                  <span>
                    Suite 373 73200 Corrin Parks, Bashirianhaven, VA 29415
                  </span>
                </div>

                <div className="flex-center gap-2 hover:text-foreground duration-300 cursor-pointer">
                  <MailIcon className="size-3" />
                  <span>vocos11249@hosliy.com</span>
                </div>
              </div>

              <div className="flex-center gap-2">
                {socialIcons.map((item) => (
                  <Button key={item} size="icon">
                    <Image
                      src={item}
                      alt="social icon"
                      width={24}
                      height={24}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-3 gap-4">
            {footerMenu.map((item) => (
              <div key={item.label} className="space-y-2">
                <header className="text-subheading">{item.label}</header>
                <ul className="space-y-1">
                  {item.children.map((c) => (
                    <li
                      key={c}
                      className="text-sm hover:underline underline-offset-2 cursor-pointer text-muted-foreground hover:text-foreground duration-300"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>

        <section className="text-xs text-muted-foreground">
          &copy; 2025 ChillSpine - All rights resevered
        </section>
      </article>
    </footer>
  );
}
