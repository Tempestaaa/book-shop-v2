type Props = {
  label: string;
  description: string;
};

export default function UserHeader({ label, description }: Props) {
  return (
    <header className="space-y-1">
      <p className="text-heading">{label}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </header>
  );
}
