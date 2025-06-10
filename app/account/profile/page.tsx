"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/lib/utils";
import { EditIcon } from "lucide-react";
import { useState } from "react";

export default function ProfileForm() {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="space-y-4">
      <header className="text-4xl font-bold">My account</header>

      <form className="space-y-4">
        <section className="flex items-center-safe gap-4">
          <Avatar className="size-14">
            <AvatarImage src={image} />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="font-medium">Username</div>
            <Label className="text-sm text-muted-foreground underline underline-offset-2 cursor-pointer hover:text-foreground duration-300">
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImage}
              />
              <span>Edit display image</span>
            </Label>
          </div>
          {!isEdit && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsEdit(true)}
                    className="ml-auto"
                  >
                    <EditIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">Edit account</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </section>
        <Separator />
        <section className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label className="flex flex-col gap-1 items-start">
                <span className="font-medium text-sm text-muted-foreground">
                  First Name
                </span>
                {isEdit ? (
                  <Input placeholder="First Name" />
                ) : (
                  <div className="text-base">First Name</div>
                )}
              </Label>
              <Label className="flex flex-col gap-1 items-start">
                <span className="font-medium text-sm text-muted-foreground">
                  Email
                </span>
                {isEdit ? (
                  <Input placeholder="username.email@xyz.com" />
                ) : (
                  <div className="text-base">username.email@xyz.com</div>
                )}
              </Label>
              <div className="flex-center gap-4">
                <Label className="flex flex-col gap-1 flex-1 items-start">
                  <span className="font-medium text-sm text-muted-foreground">
                    Date of birth
                  </span>
                  {isEdit ? (
                    <Input placeholder={formatDate(new Date())} />
                  ) : (
                    <div className="text-base">{formatDate(new Date())}</div>
                  )}
                </Label>
                <Label className="flex flex-col gap-1 flex-1 items-start">
                  <span className="font-medium text-sm text-muted-foreground">
                    Gender
                  </span>
                  {isEdit ? (
                    <Input placeholder="Male" />
                  ) : (
                    <div className="text-base">Male</div>
                  )}
                </Label>
              </div>
              <Label className="flex flex-col gap-1 items-start">
                <span className="font-medium text-sm text-muted-foreground">
                  Bio
                </span>
                {isEdit ? (
                  <Textarea
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                    totam laboriosam quisquam nisi cumque autem labore minus
                    inventore obcaecati iure aspernatur ipsam illum, laborum
                    pariatur. Esse rerum sit quasi laboriosam."
                    className="resize-none"
                  />
                ) : (
                  <div className="leading-snug text-base line-clamp-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro totam laboriosam quisquam nisi cumque autem labore
                    minus inventore obcaecati iure aspernatur ipsam illum,
                    laborum pariatur. Esse rerum sit quasi laboriosam.
                  </div>
                )}
              </Label>
            </div>
            <div className="space-y-4">
              <Label className="flex flex-col gap-1 items-start">
                <span className="font-medium text-sm text-muted-foreground">
                  Last Name
                </span>
                {isEdit ? (
                  <Input placeholder="Last Name" />
                ) : (
                  <div className="text-base">Last Name</div>
                )}
              </Label>
              <Label className="flex flex-col gap-1 items-start">
                <span className="font-medium text-sm text-muted-foreground">
                  Contact
                </span>
                {isEdit ? (
                  <Input placeholder="0123456789" />
                ) : (
                  <div className="text-base">0123456789</div>
                )}
              </Label>
              <Label className="flex flex-col gap-1 items-start">
                <span className="font-medium text-sm text-muted-foreground">
                  Address
                </span>
                {isEdit ? (
                  <Input
                    placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
                  nobis!"
                  />
                ) : (
                  <div className="leading-snug text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit, nobis!
                  </div>
                )}
              </Label>
              <div className="grid grid-cols-3 gap-4">
                <Label className="flex flex-col gap-1 items-start">
                  <span className="font-medium text-sm text-muted-foreground">
                    Street
                  </span>
                  {isEdit ? (
                    <Input placeholder="Nguyen Sinh Sac" />
                  ) : (
                    <div className="text-base">Nguyen Sinh Sac</div>
                  )}
                </Label>
                <Label className="flex flex-col gap-1 items-start">
                  <span className="font-medium text-sm text-muted-foreground">
                    City
                  </span>
                  {isEdit ? (
                    <Input placeholder="Sa dec" />
                  ) : (
                    <div className="text-base">Sa dec</div>
                  )}
                </Label>
                <Label className="flex flex-col gap-1 items-start">
                  <span className="font-medium text-sm text-muted-foreground">
                    Province
                  </span>
                  {isEdit ? (
                    <Input placeholder="Dong Thap" />
                  ) : (
                    <div className="text-base">Dong Thap</div>
                  )}
                </Label>
              </div>
            </div>
          </div>
          {isEdit && (
            <div className="ml-auto flex items-center-safe gap-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsEdit(false)}
              >
                Cancel
              </Button>
              <Button type="submit" onClick={() => setIsEdit(false)}>
                Save changes
              </Button>
            </div>
          )}
        </section>
      </form>
    </div>
  );
}
