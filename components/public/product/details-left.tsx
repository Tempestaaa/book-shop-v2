import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function DetailsLeft() {
  return (
    <AspectRatio ratio={3 / 4}>
      <div className="max-w-72 h-96 mx-auto bg-muted rounded overflow-hidden relative"></div>
    </AspectRatio>
  );
}
