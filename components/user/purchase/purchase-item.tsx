import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import dayjs from "dayjs";

export default function PurchaseItem() {
  const generateRandom9DigitNumber = () => {
    const min = 100000000;
    const max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <li className="space-y-2 p-4 rounded-md shadow-xs shadow-foreground">
      <section className="flex-center gap-4 justify-between">
        <div className="">#{generateRandom9DigitNumber()}</div>

        <div className="flex-center gap-4">
          <Badge>Completed</Badge>
          <div className="text-sm text-muted-foreground">
            {dayjs().toString()}
          </div>
        </div>
      </section>

      <Separator />

      <section className="flex-center gap-8">
        <div className="bg-muted size-20 rounded-md" />

        <div className="space-y-1">
          <ul className="flex-center gap-2">
            {[...Array(4)].map((_, id) => (
              <Badge key={id}>Fantasy {id + 1}</Badge>
            ))}
          </ul>
          <p className="font-medium">This is the book&apos;s title</p>
          <p className="text-xs text-muted-foreground">by Author name</p>
        </div>

        <div className="flex-center gap-4 ml-auto">
          <s className="text-sm text-muted-foreground">{formatPrice(39.99)}</s>
          <div className="text-subheading">{formatPrice(29.99)}</div>
        </div>
      </section>

      <section className="flex flex-col items-end-safe py-2 gap-2">
        <div className="flex-center gap-2">
          Total: <span className="text-heading">{formatPrice(29.99)}</span>
        </div>

        <Button>Buy again</Button>
      </section>
    </li>
  );
}
