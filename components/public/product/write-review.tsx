"use client";

import InteractiveRating from "@/components/public/product/interactive-rating";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import dayjs from "dayjs";
import { PenIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function WriteReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <span>Write</span>
          <PenIcon />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form>
          <DialogHeader>
            <DialogTitle className="text-heading">Write a review</DialogTitle>
          </DialogHeader>

          <div className="my-4 space-y-2">
            <Textarea
              placeholder="Give us your thought about this book"
              className="resize-none h-32"
            />

            <InteractiveRating
              rating={rating}
              hover={hover}
              setRating={setRating}
              setHover={setHover}
            />
          </div>

          <DialogFooter className="flex-center gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button
              type="button" // Change type="submit" later
              onClick={() =>
                toast("Review has been created", {
                  description: dayjs().toString(),
                  action: {
                    label: <XIcon className="size-3" />,
                    onClick: () => {},
                  },
                })
              }
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
