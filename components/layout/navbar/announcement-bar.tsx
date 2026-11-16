import { SparklesIcon, TruckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 overflow-hidden bg-neutral-900 px-4 py-2 text-center text-xs font-medium text-white dark:bg-neutral-950 dark:border-b dark:border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 sm:gap-4">
        <span className="hidden items-center gap-1 sm:inline-flex text-amber-400">
          <SparklesIcon className="h-3.5 w-3.5" />
          <span>PROMO:</span>
        </span>
        <span className="truncate">
          Use code{" "}
          <span className="font-mono font-bold text-amber-300">SAVE10</span> for{" "}
          <span className="font-semibold text-white">10% OFF</span> your order!
        </span>
        <span className="hidden text-neutral-500 sm:inline">•</span>
        <span className="hidden items-center gap-1.5 md:inline-flex text-neutral-300">
          <TruckIcon className="h-3.5 w-3.5 text-blue-400" />
          <span>Free Tracked Shipping on orders over $50</span>
        </span>
        <span className="hidden text-neutral-500 md:inline">•</span>
        <span className="hidden text-green-400 lg:inline-flex">
          💵 Cash on Delivery Available
        </span>
        <Link
          href="/search"
          className="ml-2 font-semibold text-blue-400 underline underline-offset-2 hover:text-blue-300"
        >
          Shop Now →
        </Link>
      </div>
    </div>
  );
}
