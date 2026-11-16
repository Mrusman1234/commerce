import LogoSquare from "components/logo-square";
import Link from "next/link";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || "Acme Store";

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/60 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
      {/* Upper Footer: Multi-Column Navigation */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand & Newsletter (Span 2 cols on desktop) */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <LogoSquare size="sm" />
              <span className="text-base font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                {SITE_NAME || "Acme Store"}
              </span>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
              Engineered minimal streetwear, workstation desk gear, and sustainable everyday carry essentials. Designed for creators who appreciate precision and longevity.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                Subscribe for Drops & 10% Off
              </p>
              <form
                onSubmit={undefined}
                className="mt-2 flex max-w-sm items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-black dark:text-white"
                />
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200"
                >
                  Join
                </button>
              </form>
              <p className="mt-1.5 text-[11px] text-neutral-400">
                Use code <span className="font-mono font-bold text-blue-600 dark:text-blue-400">SAVE10</span> at checkout anytime.
              </p>
            </div>
          </div>

          {/* Column 2: Shop & Collections */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              Shop Collections
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link
                  href="/search"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/search/apparel"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Streetwear & Hoodies
                </Link>
              </li>
              <li>
                <Link
                  href="/search/accessories"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Desk Gear & Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/search?sort=trending-desc"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/search?sort=latest-desc"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Latest Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              Customer Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link
                  href="/shipping"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  30-Day Easy Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Help Center & FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Cash on Delivery Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Size & Fitting Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
              About Acme
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Our Mission & Craft
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/vercel/commerce"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Source Code & Releases
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  Powered by ▲ Vercel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Security Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="mr-1 text-xs font-semibold uppercase text-neutral-400">
              Payment Options:
            </span>
            <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 shadow-2xs dark:border-neutral-800 dark:bg-black dark:text-neutral-200">
              💵 Cash on Delivery (COD)
            </span>
            <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 shadow-2xs dark:border-neutral-800 dark:bg-black dark:text-neutral-200">
              💳 Visa / Mastercard / Amex
            </span>
            <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 shadow-2xs dark:border-neutral-800 dark:bg-black dark:text-neutral-200">
              🍎 Apple Pay & GPay
            </span>
            <span className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-green-700 shadow-2xs dark:border-neutral-800 dark:bg-black dark:text-green-400">
              🔒 256-Bit SSL Encrypted
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span>🌐 Global Shipping</span>
            <span>•</span>
            <span>USD ($)</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Credits */}
      <div className="border-t border-neutral-200 bg-neutral-100/50 py-6 text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {currentYear} {copyrightName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/shipping" className="hover:underline">
              Shipping & Returns
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:underline">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
