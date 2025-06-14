type Props = {
  label: string;
  value: React.ReactNode;
};

export default function InfoItem({ label, value }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 items-center-safe">
      <div className="font-medium">{label}</div>
      <div className="text-muted-foreground col-span-3 text-sm">{value}</div>
    </div>
  );
}
