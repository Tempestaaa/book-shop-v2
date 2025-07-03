import PaymentItem from "@/components/user/account/payment/payment-item";

export default function PaymentList() {
  return (
    <section className="space-y-2">
      <header className="text-subheading">My banks</header>

      <ul className="space-y-8">
        {[...Array(1)].map((_, id) => (
          <PaymentItem key={id} />
        ))}
      </ul>
    </section>
  );
}
