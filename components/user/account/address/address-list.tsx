import AddressItem from "@/components/user/account/address/address-item";

export default function AddressList() {
  return (
    <section className="space-y-2">
      <header className="text-subheading">Addresses</header>

      <ul className="space-y-8">
        {[...Array(1)].map((_, id) => (
          <AddressItem key={id} />
        ))}
      </ul>
    </section>
  );
}
