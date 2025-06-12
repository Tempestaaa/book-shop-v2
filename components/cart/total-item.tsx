import { formatPrice } from "@/lib/utils";

type Props = {
  label: string;
  value: number | string;
  isTotal?: boolean;
};

export default function TotalItem({ label, value, isTotal = false }: Props) {
  return (
    <div
      className={`flex items-end-safe gap-4 justify-between ${
        isTotal && "py-1.5"
      }`}
    >
      <div className="">{label}</div>
      {isTotal ? (
        <div className="text-xl font-semibold">
          {typeof value === "number" && formatPrice(value)}
        </div>
      ) : (
        <div className="text-muted-foreground text-sm">
          {typeof value === "string" ? value : formatPrice(value)}
        </div>
      )}
    </div>
  );
}
