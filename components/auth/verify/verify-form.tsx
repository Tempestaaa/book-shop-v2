"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api";
import { userVerifyCode, UserVerifyCode } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Props = {
  id: string;
};

export default function VerifyForm({ id }: Props) {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserVerifyCode>({
    resolver: zodResolver(userVerifyCode),
    defaultValues: {
      _id: id,
      code: "",
    },
  });

  const onSubmit = async (values: UserVerifyCode) => {
    const res = await api.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-code`,
      values
    );

    if (res.data) {
      push("/auth/login");
      toast.success("Account is verified");
    } else {
      const jsonStartIndex = res.error!.indexOf("{");
      const jsonSubstring = res.error!.substring(jsonStartIndex);
      const parsedError = JSON.parse(jsonSubstring);
      const message = parsedError.message;
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Label hidden className="flex flex-col gap-2">
        <p>User ID</p>
        <Input
          {...register("_id")}
          placeholder="This is the user ID"
          defaultValue={id}
          disabled
        />
      </Label>

      <Label className="flex flex-col gap-2">
        <p className={`${errors.code && "text-destructive"}`}>Verify code</p>
        <Input
          {...register("code")}
          placeholder="Enter your verify code"
          className={`${errors.code && "border-destructive"}`}
        />
        {errors.code && (
          <p className="text-xs font-medium text-destructive">
            {errors.code.message}
          </p>
        )}
      </Label>

      <Button type="submit">Submit</Button>

      <p className="text-sm text-muted-foreground text-center">
        A confirmation code has been sent to your registered email. Please check
        it.
      </p>
    </form>
  );
}
