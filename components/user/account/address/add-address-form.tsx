import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "lucide-react";

const type = ["Home", "Office"];

export default function AddAddressForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          <span>Add new address</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form className="space-y-4">
          <DialogHeader>
            <DialogTitle>New address</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Label className="flex-center gap-2">
              <span className="w-30">Name</span>
              <Input placeholder="Name" />
            </Label>

            <Label className="flex-center gap-2">
              <span className="w-30">Phone</span>
              <Input placeholder="Phone" />
            </Label>

            <Label className="flex gap-2">
              <span className="w-30">Address</span>
              <Textarea placeholder="Address" className="h-28" />
            </Label>

            <div className="flex-center">
              <span className="w-26 text-sm font-medium">Gender</span>
              <RadioGroup defaultValue={type[0]} className="flex-center gap-4">
                {type.map((item) => (
                  <Label key={item} className="flex items-center gap-2">
                    <RadioGroupItem value={item} />
                    <span>{item}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <Label className="flex-center gap-4">
              <Checkbox />
              <span>Mask as default</span>
            </Label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>

            <Button>Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
