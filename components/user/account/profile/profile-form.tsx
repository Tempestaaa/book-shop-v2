import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const gender = ["Male", "Female", "Other"];

export default function ProfileForm() {
  return (
    <form className="flex-1 space-y-6">
      <Label className="flex-center">
        <span className="w-40">Username</span>
        <Input placeholder="Username" />
      </Label>

      <Label className="flex-center">
        <span className="w-40">Name</span>
        <Input placeholder="Name" />
      </Label>

      <Label className="flex-center">
        <span className="w-40">Email</span>
        <Input placeholder="Email" />
      </Label>

      <Label className="flex-center">
        <span className="w-40">Phone</span>
        <Input type="number" placeholder="Phone" />
      </Label>

      <div className="flex-center">
        <span className="w-34 text-sm font-medium">Gender</span>
        <RadioGroup defaultValue={gender[0]} className="flex-center gap-4">
          {gender.map((item) => (
            <Label key={item} className="flex items-center gap-2">
              <RadioGroupItem value={item} />
              <span>{item}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <Label className="flex-center">
        <span className="w-32">DoB</span>
        <Input type="date" placeholder="Phone" className="w-fit" />
      </Label>

      <Button>Save changes</Button>
    </form>
  );
}
