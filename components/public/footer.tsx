import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navbarMenu } from "@/lib/common";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const customerServices = [
    "FAQs",
    "Shipping Policy",
    "Return Policy",
    "Privacy Policy",
  ];
  const socials = [
    "/icons/facebook.ico",
    "/icons/twitter.ico",
    "/icons/instagram.ico",
  ];

  const itemClassName =
    "text-muted-foreground hover:text-foreground duration-300";

  return (
    <footer className="py-10 px-4">
      <article className="px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm *:space-y-4">
        {/* About */}
        <section>
          <h3 className="text-heading">About SpineChill</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your destination for discovering new worlds through books. We offer
            a curated selection of titles for every reader.
          </p>
        </section>

        {/* Quick links */}
        <section>
          <h3 className="text-subheading">Quick Links</h3>
          <ul className="flex flex-col gap-2 items-start">
            {navbarMenu.map((item) => (
              <li key={item.label} className={itemClassName}>
                <Link href={item.href!}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Customer services */}
        <section>
          <h3 className="text-subheading">Customer Service</h3>
          <ul className="flex flex-col gap-2 items-start">
            {customerServices.map((item) => (
              <li key={item} className={itemClassName}>
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact us */}
        <section>
          <h3 className="text-subheading">Contact Us</h3>

          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">
              Email:{" "}
              <a href="mailto:info@spinechill.com" className={itemClassName}>
                info@spinechill.com
              </a>
            </p>

            <p className="text-muted-foreground">
              Phone:{" "}
              <a href="tel:+123456789" className={itemClassName}>
                0123456789
              </a>
            </p>

            <p className="text-muted-foreground">
              25 Nguyen Sinh Sac Street, Sa Dec, Dong Thap
            </p>
          </div>

          <div className="flex gap-2 mt-4 relative">
            {socials.map((item) => (
              <Button key={item} size="icon" className="rounded-full">
                <Image src={item} alt={item} width={20} height={20} />
              </Button>
            ))}
          </div>
        </section>
      </article>

      <Separator className="my-8" />

      <article className="text-center text-muted-foreground text-xs">
        &copy; {new Date().getFullYear()} SpineChill. All rights reserved.
      </article>
    </footer>
  );
}
