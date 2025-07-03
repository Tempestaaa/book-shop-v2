import FilterClearButton from "@/components/public/shop/filter-clear-button";

type Props = {
  term: string;
  isShowButton?: boolean;
  children: React.ReactNode;
};

export default function FilterWrapper({
  term,
  isShowButton = true,
  children,
}: Props) {
  return (
    <section className="space-y-2">
      <header className="text-subheading capitalize">{term}</header>
      {children}
      {isShowButton && <FilterClearButton term={term} side="right" />}
    </section>
  );
}
