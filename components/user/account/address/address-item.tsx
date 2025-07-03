"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DeleteAddressForm from "@/components/user/account/address/delete-address-form";
import UpdateAddressForm from "@/components/user/account/address/update-address-form";
import { useState } from "react";

export default function AddressItem() {
  const [check, setCheck] = useState(false);

  return (
    <li className="flex-center gap-4 justify-between">
      <section className="space-y-2">
        <header className="flex-center divide-x-2">
          <p className="pr-4">Full name</p>
          <p className="text-sm text-muted-foreground pl-4">0123456789</p>
        </header>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          voluptas minus iste quasi soluta, accusantium cum dolorum provident!
          Dolores aut omnis aliquam culpa ab ipsam eius placeat sint, odit, vero
          corporis doloribus necessitatibus, error sunt tempore blanditiis
          praesentium unde? Esse.
        </p>
        {check && <Badge>Default</Badge>}
      </section>

      <section className="flex flex-col items-end-safe gap-2 min-w-60 max-w-60">
        <div className="flex-center gap-2">
          <UpdateAddressForm />
          <DeleteAddressForm />
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCheck(true)}
          disabled={check}
        >
          Mark as default
        </Button>
      </section>
    </li>
  );
}
