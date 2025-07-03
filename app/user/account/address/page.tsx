import { Separator } from "@/components/ui/separator";
import AddAddressForm from "@/components/user/account/address/add-address-form";
import AddressList from "@/components/user/account/address/address-list";
import UserHeader from "@/components/user/user-header";

export default function AddressPage() {
  return (
    <article className="space-y-4">
      <div className="flex-center gap-4 justify-between">
        <UserHeader
          label="Address"
          description="Provide information to receive orders"
        />

        <AddAddressForm />
      </div>
      <Separator />
      <AddressList />
    </article>
  );
}
