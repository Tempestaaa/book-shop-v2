import StarRating from "@/components/public/product/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import dayjs from "dayjs";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export default function ReviewCard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center-safe gap-4">
        <Avatar className="size-10">
          <AvatarImage />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <div className="font-medium">Username</div>
      </div>

      <div className="space-y-0.5">
        <StarRating rating={4} size="small" />
        <div className="text-sm text-muted-foreground">
          Reviewed in England on {dayjs().toString()}
        </div>
      </div>

      <p className="text-sm line-clamp-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ducimus
        quo dolores quis animi magnam ut, quibusdam veniam! Iusto ipsum
        quisquam, consectetur voluptate nulla perspiciatis dicta, optio adipisci
        odio nam molestiae inventore laboriosam ipsa deleniti nobis nemo.
        Numquam, pariatur fugit.
      </p>

      <div className="flex items-center-safe gap-2 mt-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ThumbsUpIcon />
              </Button>
            </TooltipTrigger>

            <TooltipContent side="bottom">Helpful</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ThumbsDownIcon />
              </Button>
            </TooltipTrigger>

            <TooltipContent side="bottom">Not helpful</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="text-sm text-muted-foreground italic ml-2">
          15 people found this review helpful
        </div>
      </div>
    </div>
  );
}
