import CartButton from "@/components/layout/cart-button";
import NotificationButton from "@/components/layout/notification-button";

export default function NavbarButtons() {
  return (
    <div className="flex-center gap-2">
      <CartButton />
      <NotificationButton />
    </div>
  );
}
