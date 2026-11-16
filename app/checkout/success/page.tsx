import {
  BanknotesIcon,
  CheckCircleIcon,
  CreditCardIcon,
  HomeIcon,
  PrinterIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Footer from "components/layout/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Thank you for your order at Acme Store.",
};

export default async function CheckoutSuccessPage(props: {
  searchParams: Promise<{
    orderId?: string;
    email?: string;
    name?: string;
    address?: string;
    payment?: string;
    total?: string;
    itemsCount?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const orderId = searchParams.orderId || `ACM-${Math.floor(100000 + Math.random() * 900000)}`;
  const email = searchParams.email || "customer@example.com";
  const name = searchParams.name || "Valued Customer";
  const address = searchParams.address || "Delivery Address Provided";
  const paymentMethod = searchParams.payment || "cod";
  const total = searchParams.total || "0.00";
  const itemsCount = searchParams.itemsCount || "1";

  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 4);

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-black sm:p-12">
          {/* Header Badge */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/60">
              <CheckCircleIcon className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
              Order Confirmed & Received
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Thank you, {name}!
            </h1>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              We&apos;ve sent a confirmation receipt and delivery tracking details to{" "}
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                {email}
              </span>
              .
            </p>
          </div>

          {/* Order Details Card */}
          <div className="mt-8 rounded-xl border border-neutral-100 bg-neutral-50/70 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase text-neutral-500">Order Reference</p>
                <p className="mt-1 font-mono font-bold text-neutral-900 dark:text-white">
                  #{orderId}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-neutral-500">Total Amount</p>
                <p className="mt-1 font-bold text-neutral-900 dark:text-white">
                  ${total} USD
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-neutral-500">Payment Option</p>
                <div className="mt-1 flex items-center gap-1 font-semibold text-neutral-900 dark:text-white">
                  {paymentMethod === "cod" ? (
                    <>
                      <BanknotesIcon className="h-4 w-4 text-green-600" />
                      <span>Cash on Delivery</span>
                    </>
                  ) : (
                    <>
                      <CreditCardIcon className="h-4 w-4 text-blue-600" />
                      <span>Card Paid</span>
                    </>
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase text-neutral-500">Items Ordered</p>
                <p className="mt-1 font-semibold text-neutral-900 dark:text-white">
                  {itemsCount} {Number(itemsCount) === 1 ? "Item" : "Items"}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="mt-6 rounded-xl border border-neutral-100 bg-neutral-50/70 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                <TruckIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Estimated Delivery Date:{" "}
                  {deliveryDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h3>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Shipping to: <span className="font-medium text-neutral-800 dark:text-neutral-200">{address}</span>
                </p>
                {paymentMethod === "cod" && (
                  <p className="mt-2 text-xs font-medium text-amber-700 dark:text-amber-400">
                    ⚠ Note: Please ensure someone is available at this address with exact cash of ${total} USD when the courier arrives.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <HomeIcon className="h-4 w-4" />
              <span>Back to Store & Continue Shopping</span>
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-transparent px-8 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
            >
              <span>Explore More Collections</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
