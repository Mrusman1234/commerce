import Footer from "components/layout/footer";
import { getCart } from "lib/shopify";
import type { Metadata } from "next";
import { CheckoutForm } from "./checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout and payment for your order at Acme Store.",
};

export default async function CheckoutPage() {
  const cart = await getCart();

  return (
    <>
      <CheckoutForm cart={cart} />
      <Footer />
    </>
  );
}
