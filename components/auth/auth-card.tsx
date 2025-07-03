type Props = {
  label: string;
  children: React.ReactNode;
};

export default function AuthCard({ label, children }: Props) {
  return (
    <article className="max-w-3xl lg:max-w-lg w-full rounded-md p-8 bg-background outline outline-muted shadow shadow-muted-foreground flex flex-col gap-8">
      <h1 className="text-3xl font-medium text-center">{label}</h1>

      {children}
    </article>
  );
}
