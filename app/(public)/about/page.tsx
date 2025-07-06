import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const differentSection: { label: string; content: string }[] = [
    {
      label: "Meticulous Curation",
      content:
        "Every book at SpineChill is carefully selected by us, ensuring the quality of its content and the value it brings to readers. We prioritize works with depth and inspiration.",
    },
    {
      label: "Unique Experience Space",
      content:
        "Come and enjoy our quiet, cozy reading space with a hint of coffee aroma. It's an ideal place to immerse yourself in the world of books and find tranquility.",
    },
    {
      label: "Connecting Community",
      content:
        "We regularly organize author meet-and-greets, writing workshops, and monthly book clubs to connect book lovers and share our passion together.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-8 ">
      <section className="text-center">
        <div className="relative w-full h-80 sm:h-100 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/bookstore-hero.jpg"
            alt="Cozy bookstore interior"
            width={1440}
            height={1}
            priority
          />

          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground text-shadow-background text-shadow-xs leading-tight">
              About Us
            </h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Welcome to SpineChill! We believe that every book is a world to
          explore, a story to tell, and an endless source of inspiration. Our
          mission is to **bring quality literary works to readers and foster a
          love for reading within the community**.
        </p>
      </section>

      <Separator />

      <section className="mb-16">
        <h2 className="text-heading text-center mb-8">Our Journey</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/owner-profile.webp"
              alt="Founder of [Your Bookstore Name]"
              width={500}
              height={350}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-lg text-muted-foreground">
            <p className="mb-4">
              Founded in 2025 by John Doe - a lifelong book lover, SpineChill
              started as a small corner with a few bookshelves in a living room.
              With passion and perseverance, we turned the dream of a space
              filled with knowledge into a reality.
            </p>
            <p>
              From the first meticulously curated books, we are now proud to
              offer a diverse collection, from classics to the latest releases,
              from literature to science, always ensuring quality and value for
              our readers.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      <section className="mb-16 text-center">
        <h2 className="text-heading mb-8">What Makes Us Different?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {differentSection.map((item) => (
            <div
              key={item.label}
              className="bg-foreground p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 space-y-3"
            >
              <h3 className="text-subheading text-background">{item.label}</h3>
              <p className="text-muted">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="text-center p-8 rounded-md shadow-xs shadow-foreground flex flex-col gap-4">
        <h2 className="text-heading">Explore the World of Books with Us!</h2>
        <p className="mb-4">
          Join us in turning new pages and discovering wonderful stories waiting
          for you.
        </p>

        <Button
          variant="ghost"
          className="rounded-full !h-12 w-fit px-8 mx-auto"
        >
          <Link href="/">Explore Books Now!</Link>
        </Button>
      </section>
    </main>
  );
}
