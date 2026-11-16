"use server";

import { clearCart, getCart } from "lib/shopify";
import { redirect } from "next/navigation";

export type OrderDetails = {
  orderId: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: "cod" | "card" | "wallet";
  shippingMethod: "standard" | "express";
  shippingCost: number;
  subtotal: number;
  discount: number;
  total: number;
  itemsCount: number;
  date: string;
};

export async function submitOrder(prevState: any, formData: FormData) {
  const cart = await getCart();

  if (!cart || cart.lines.length === 0) {
    return { error: "Your cart is empty. Please add items before checking out." };
  }

  const email = (formData.get("email") as string) || "";
  const firstName = (formData.get("firstName") as string) || "";
  const lastName = (formData.get("lastName") as string) || "";
  const address = (formData.get("address") as string) || "";
  const city = (formData.get("city") as string) || "";
  const postalCode = (formData.get("postalCode") as string) || "";
  const paymentMethod = ((formData.get("paymentMethod") as string) || "cod") as
    | "cod"
    | "card"
    | "wallet";
  const shippingMethod = ((formData.get("shippingMethod") as string) || "standard") as
    | "standard"
    | "express";
  const promoCode = (formData.get("promoCode") as string) || "";

  if (!email || !firstName || !lastName || !address || !city) {
    return { error: "Please fill in all required shipping address fields." };
  }

  const subtotal = Number(cart.cost.subtotalAmount.amount);
  const discount = promoCode.toUpperCase() === "SAVE10" ? subtotal * 0.1 : 0;
  const shippingCost = shippingMethod === "express" ? 12 : 0;
  const total = subtotal - discount + shippingCost;
  const orderId = `ACM-${Math.floor(100000 + Math.random() * 900000)}`;

  // Clear local cart now that order is confirmed
  await clearCart();

  const queryParams = new URLSearchParams({
    orderId,
    email,
    name: `${firstName} ${lastName}`,
    address: `${address}, ${city} ${postalCode}`,
    payment: paymentMethod,
    total: total.toFixed(2),
    itemsCount: cart.totalQuantity.toString(),
  });

  redirect(`/checkout/success?${queryParams.toString()}`);
}
