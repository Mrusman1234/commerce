"use client";

import {
  BanknotesIcon,
  CheckCircleIcon,
  CreditCardIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Price from "components/price";
import type { Cart } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useId, useState } from "react";
import { submitOrder } from "./actions";

export function CheckoutForm({ cart }: { cart: Cart | undefined }) {
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">(
    "standard",
  );
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card" | "wallet">(
    "cod",
  );
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);

  const [state, formAction, isPending] = useActionState(submitOrder, null);
  const formId = useId();

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
          <TruckIcon className="h-8 w-8 text-neutral-400" />
        </div>
        <h2 className="text-2xl font-bold">Your cart is currently empty</h2>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Looks like you haven&apos;t added any items yet.
        </p>
        <Link
          href="/search"
          className="mt-6 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  const subtotal = Number(cart.cost.subtotalAmount.amount);
  const shippingCost = shippingMethod === "express" ? 12 : 0;
  const discountAmount = appliedPromo === "SAVE10" ? subtotal * 0.1 : 0;
  const finalTotal = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e: React.MouseEvent) => {
    e.preventDefault();
    setPromoError(null);
    if (promoInput.trim().toUpperCase() === "SAVE10") {
      setAppliedPromo("SAVE10");
    } else {
      setPromoError("Invalid code. Try 'SAVE10' for 10% off.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          ← Return to Store
        </Link>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Complete Your Order
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Fast checkout with Cash on Delivery or Card payment.
        </p>
      </div>

      {state?.error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-400">
          {state.error}
        </div>
      )}

      <form action={formAction} className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <input type="hidden" name="shippingMethod" value={shippingMethod} />
        <input type="hidden" name="paymentMethod" value={paymentMethod} />
        <input type="hidden" name="promoCode" value={appliedPromo || ""} />

        {/* Left Column: Form Details */}
        <div className="space-y-8 lg:col-span-7">
          {/* Contact Details */}
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-black">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              1. Contact Information
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor={`${formId}-email`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  Email Address *
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor={`${formId}-phone`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  Phone Number (for courier updates) *
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 019-2834"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-black">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              2. Delivery Address
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={`${formId}-firstName`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  First Name *
                </label>
                <input
                  id={`${formId}-firstName`}
                  name="firstName"
                  type="text"
                  required
                  placeholder="Alex"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor={`${formId}-lastName`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  Last Name *
                </label>
                <input
                  id={`${formId}-lastName`}
                  name="lastName"
                  type="text"
                  required
                  placeholder="Morgan"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor={`${formId}-address`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  Street Address *
                </label>
                <input
                  id={`${formId}-address`}
                  name="address"
                  type="text"
                  required
                  placeholder="123 Commerce Boulevard, Suite 400"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor={`${formId}-city`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  City *
                </label>
                <input
                  id={`${formId}-city`}
                  name="city"
                  type="text"
                  required
                  placeholder="San Francisco"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor={`${formId}-postalCode`}
                  className="block text-xs font-medium uppercase text-neutral-500"
                >
                  Postal Code *
                </label>
                <input
                  id={`${formId}-postalCode`}
                  name="postalCode"
                  type="text"
                  required
                  placeholder="94103"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
              </div>
            </div>
          </section>

          {/* Shipping Method */}
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-black">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              3. Shipping Speed
            </h2>
            <div className="mt-4 space-y-3">
              <label
                className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition ${
                  shippingMethod === "standard"
                    ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20"
                    : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-800"
                }`}
                onClick={() => setShippingMethod("standard")}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping_radio"
                    checked={shippingMethod === "standard"}
                    onChange={() => setShippingMethod("standard")}
                    className="h-4 w-4 text-blue-600"
                  />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      Standard Tracked Shipping
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Estimated delivery in 3–5 business days
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  FREE
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition ${
                  shippingMethod === "express"
                    ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20"
                    : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-800"
                }`}
                onClick={() => setShippingMethod("express")}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping_radio"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                    className="h-4 w-4 text-blue-600"
                  />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      Express Courier Priority
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Estimated delivery in 1–2 business days
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  $12.00
                </span>
              </label>
            </div>
          </section>

          {/* Payment Method / Cash Out */}
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-black">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              4. Payment & Checkout Option
            </h2>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Select how you would like to pay for your order.
            </p>

            <div className="mt-4 space-y-3">
              {/* Cash on Delivery */}
              <label
                className={`block cursor-pointer rounded-lg border p-4 transition ${
                  paymentMethod === "cod"
                    ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20"
                    : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-800"
                }`}
                onClick={() => setPaymentMethod("cod")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment_radio"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="h-4 w-4 text-blue-600"
                    />
                    <BanknotesIcon className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">
                        Cash on Delivery (COD)
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Pay with physical cash directly to courier upon delivery
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                    Popular
                  </span>
                </div>
                {paymentMethod === "cod" && (
                  <p className="mt-3 rounded-md bg-neutral-100 p-2.5 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
                    ✓ No advance payment required. Please keep exact cash ready upon delivery.
                  </p>
                )}
              </label>

              {/* Credit / Debit Card */}
              <label
                className={`block cursor-pointer rounded-lg border p-4 transition ${
                  paymentMethod === "card"
                    ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20"
                    : "border-neutral-200 hover:border-neutral-300 dark:border-neutral-800"
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment_radio"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="h-4 w-4 text-blue-600"
                    />
                    <CreditCardIcon className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">
                        Credit / Debit Card
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Visa, Mastercard, American Express
                      </p>
                    </div>
                  </div>
                  <LockClosedIcon className="h-4 w-4 text-neutral-400" />
                </div>
                {paymentMethod === "card" && (
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-neutral-200 pt-3 dark:border-neutral-700">
                    <div className="col-span-2">
                      <label
                        htmlFor={`${formId}-card-num`}
                        className="block text-xs font-medium uppercase text-neutral-500"
                      >
                        Card Number
                      </label>
                      <input
                        id={`${formId}-card-num`}
                        type="text"
                        placeholder="•••• •••• •••• 4242"
                        className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`${formId}-card-exp`}
                        className="block text-xs font-medium uppercase text-neutral-500"
                      >
                        Expiry (MM/YY)
                      </label>
                      <input
                        id={`${formId}-card-exp`}
                        type="text"
                        placeholder="12/28"
                        className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`${formId}-card-cvc`}
                        className="block text-xs font-medium uppercase text-neutral-500"
                      >
                        CVC
                      </label>
                      <input
                        id={`${formId}-card-cvc`}
                        type="text"
                        placeholder="123"
                        className="mt-1 block w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                      />
                    </div>
                  </div>
                )}
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-20 rounded-xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-black">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Order Summary ({cart.totalQuantity} items)
            </h2>

            {/* Line Items List */}
            <ul className="mt-4 max-h-72 divide-y divide-neutral-200 overflow-y-auto dark:divide-neutral-800">
              {cart.lines.map((item) => (
                <li key={item.id} className="flex gap-4 py-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                    <Image
                      src={item.merchandise.product.featuredImage.url}
                      alt={item.merchandise.product.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute right-0 top-0 rounded-bl-sm bg-neutral-900/80 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      x{item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                        {item.merchandise.product.title}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {item.merchandise.title !== "Default Title"
                          ? item.merchandise.title
                          : ""}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                      ${item.cost.totalAmount.amount}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Promo Code Input */}
            <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Discount code (try SAVE10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-xs uppercase placeholder:normal-case placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:text-white"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="rounded-md bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <p className="mt-2 text-xs font-medium text-green-600 dark:text-green-400">
                  ✓ Code {appliedPromo} applied: 10% discount!
                </p>
              )}
              {promoError && (
                <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                  {promoError}
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-neutral-900 dark:text-white">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span>Promo Discount (10%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0 ? (
                    <span className="font-semibold text-green-600">FREE</span>
                  ) : (
                    `$${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-3 text-base font-bold text-neutral-900 dark:border-neutral-800 dark:text-white">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Complete Purchase Button */}
            <button
              type="submit"
              disabled={isPending}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-50"
            >
              {isPending ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <LockClosedIcon className="h-4 w-4" />
                  <span>
                    {paymentMethod === "cod"
                      ? `Confirm Order with Cash on Delivery • $${finalTotal.toFixed(2)}`
                      : `Pay & Place Order • $${finalTotal.toFixed(2)}`}
                  </span>
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
              <ShieldCheckIcon className="h-4 w-4 text-green-600" />
              <span>256-Bit SSL Encrypted • 30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
