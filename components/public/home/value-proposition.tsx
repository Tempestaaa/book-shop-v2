import ValuePropositionItem from "@/components/public/home/value-proposition-item";
import { valueProposition } from "@/lib/common";

export default function ValueProposition() {
  return (
    <section className="px-4 py-12 text-center">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valueProposition.map((item) => (
          <ValuePropositionItem key={item.label} item={item} />
        ))}
      </ul>
    </section>
  );
}
