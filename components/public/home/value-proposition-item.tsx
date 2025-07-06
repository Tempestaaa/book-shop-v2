import { Button } from "@/components/ui/button";
import { ValueProposition } from "@/types/common";

type Props = {
  item: ValueProposition;
};

export default function ValuePropositionItem({ item }: Props) {
  const Icon = item.icon;

  return (
    <li className="flex flex-col p-6 gap-1 rounded-md bg-foreground text-background">
      <Button
        variant="ghost"
        className="mb-3 w-fit mx-auto hover:!bg-transparent"
      >
        <Icon className="text-background size-10" />
      </Button>

      <h3 className="text-subheading">{item.label}</h3>
      <p className="text-muted-foreground">{item.content}</p>
    </li>
  );
}
