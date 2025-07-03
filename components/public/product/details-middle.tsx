import InfoItem from "@/components/public/product/info-item";
import StarRating from "@/components/public/product/star-rating";
import { Badge } from "@/components/ui/badge";
import { slugify } from "@/lib/utils";
import bookGenres from "@/mock-data/genres";
import Link from "next/link";
import dayjs from "dayjs";

export default function DetailsMiddle() {
  return (
    <section className="flex flex-col gap-3">
      <section className="space-y-1">
        <h1 className="text-3xl font-semibold">
          This is the book&apos;s title
        </h1>
        <div className="text-muted-foreground">by Author name</div>
      </section>

      <section className="flex items-center-safe gap-4">
        <StarRating rating={4.5} showScore />
        <span className="text-sm">(954 reviews)</span>
      </section>

      <section className="flex items-center-safe gap-2 flex-wrap text-sm">
        {bookGenres.slice(0, 6).map(({ id, name }) => (
          <Badge key={id} variant="default" asChild>
            <Link href={`/shop?genre=${slugify(name)}`}>{name}</Link>
          </Badge>
        ))}
      </section>

      <section className="line-clamp-4 my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem in
        maxime dolor sed et temporibus officia eaque perferendis sint voluptas
        ex quos quod voluptatum deleniti, quia quisquam iusto adipisci possimus
        molestiae expedita quidem rem neque? Itaque sapiente architecto ex!
        Doloribus saepe reprehenderit asperiores, quia nulla autem explicabo.
        Autem nobis suscipit qui at repudiandae aperiam dolorem dolorum eaque
        explicabo blanditiis, fuga nihil eligendi incidunt, veritatis, dolore
        minus optio tenetur ipsa delectus eum tempora commodi quaerat.
        Necessitatibus cupiditate porro dolore quas, ipsa voluptate eos
        reiciendis! Totam expedita quasi impedit odit eaque soluta
        exercitationem, illum libero velit tempora eum ipsam, eveniet minus
        voluptas iste quis corporis quisquam ex reprehenderit veniam commodi
        dolor? Eveniet atque dignissimos neque delectus eligendi iure in, totam
        quisquam harum quibusdam consequatur quae perspiciatis nulla nam eaque
        repudiandae obcaecati sed corrupti deserunt veniam sunt. Dicta provident
        suscipit fuga distinctio quisquam incidunt vero earum saepe dolorum. Aut
        pariatur libero deleniti accusamus rerum! Quod minus cum aut illo,
        eveniet voluptas vel! Explicabo, sit eius? Repellat earum expedita
        illum, tempore, adipisci nulla amet velit impedit fugiat ipsam illo aut
        inventore, eius facere. Laudantium quam, accusamus temporibus et
        inventore quo nihil earum at, culpa dolor omnis incidunt? Veniam
        provident rerum blanditiis illo eos!
      </section>

      <section className="space-y-1.5">
        <p className="text-sm">Paperback, 300 pages</p>
        <p className="text-sm">First published {dayjs().toString()}</p>

        <InfoItem label="Awards" value="This is the book's awards" />
        <InfoItem
          label="Original title"
          value="This is the book's original title"
        />
      </section>

      <section className="mt-4 space-y-3">
        <header className="text-subheading">This edition</header>
        <div className="space-y-1.5">
          <InfoItem label="Format" value="300 pages, Paperback edition" />
          <InfoItem label="Language" value="English" />
          <InfoItem label="ISBN" value="9781668067918" />
          <InfoItem label="Publisher" value="Publisher name" />
          <InfoItem label="Publication date" value={dayjs().toString()} />
        </div>
      </section>
    </section>
  );
}
