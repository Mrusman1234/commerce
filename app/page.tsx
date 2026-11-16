import {
  ArrowPathIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  description:
    "Acme Store — Premium minimalist streetwear, lifestyle accessories, and workspace gear built for creators.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-auto max-w-(--breakpoint-2xl) px-4 pt-4 pb-8 sm:pb-12">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-linear-to-b from-neutral-100 to-white px-6 py-16 text-center shadow-xs dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 sm:px-12 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-800 backdrop-blur-xs dark:border-neutral-700 dark:bg-black/60 dark:text-neutral-200">
            <SparklesIcon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Spring / Summer 2026 Collection</span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl dark:text-white">
            Engineered Essentials for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Everyday Creators
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
            Minimalist streetwear, heavyweight organic cotton apparel, and ergonomic desk gear crafted with uncompromising quality and sustainable practices.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              <span>Explore All Products</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/search/apparel"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
            >
              <span>Shop Apparel</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured 3-Item Flagship Grid */}
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl dark:text-white">
              Flagship Picks
            </h2>
            <p className="text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
              Our most popular everyday staples and workstation essentials.
            </p>
          </div>
          <Link
            href="/search"
            className="text-xs font-semibold text-blue-600 hover:underline sm:text-sm dark:text-blue-400"
          >
            View all →
          </Link>
        </div>
        <ThreeItemGrid />
      </section>

      {/* Trust & Guarantee Bar */}
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4 py-8">
        <div className="grid grid-cols-1 gap-6 rounded-2xl border border-neutral-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-neutral-800 dark:bg-black">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <TruckIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                Free Tracked Shipping
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                On all international orders over $50
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-950/60 dark:text-green-400">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                Cash on Delivery (COD)
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Pay safely in cash upon arrival
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
              <ArrowPathIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                30-Day Easy Returns
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Hassle-free money-back guarantee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400">
              <SparklesIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                100% Organic Fabrics
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Certified GOTS cotton & recycled nylon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Spotlight Cards */}
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Category 1: Apparel */}
          <Link
            href="/search/apparel"
            className="group relative flex h-72 items-end overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 p-8 shadow-xs transition hover:shadow-md dark:border-neutral-800"
          >
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
              alt="Apparel Collection"
              fill
              className="object-cover opacity-60 transition duration-500 group-hover:scale-105"
            />
            <div className="relative z-10 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Collection
              </span>
              <h3 className="mt-1 text-2xl font-bold sm:text-3xl">Streetwear & Apparel</h3>
              <p className="mt-1 text-sm text-neutral-300">
                Heavyweight cotton hoodies, minimal tees, and all-weather windbreakers.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 group-hover:underline">
                Explore Apparel →
              </span>
            </div>
          </Link>

          {/* Category 2: Accessories */}
          <Link
            href="/search/accessories"
            className="group relative flex h-72 items-end overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 p-8 shadow-xs transition hover:shadow-md dark:border-neutral-800"
          >
            <Image
              src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80"
              alt="Accessories Collection"
              fill
              className="object-cover opacity-60 transition duration-500 group-hover:scale-105"
            />
            <div className="relative z-10 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Collection
              </span>
              <h3 className="mt-1 text-2xl font-bold sm:text-3xl">Everyday Carry & Tech</h3>
              <p className="mt-1 text-sm text-neutral-300">
                Wool felt desk pads, thermal vacuum tumblers, leather keyclips, and chargers.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 group-hover:underline">
                Explore Accessories →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending Carousel Section */}
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pt-6">
        <div className="mb-2">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl dark:text-white">
            Trending Gear
          </h2>
          <p className="text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
            Swipe through our latest drops and customer favorites.
          </p>
        </div>
        <Carousel />
      </section>

      {/* Promo & Newsletter Section */}
      <section className="mx-auto max-w-(--breakpoint-2xl) px-4 py-12">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-900 px-6 py-12 text-center text-white sm:px-12 dark:border-neutral-800 dark:bg-black">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Save 10% On Your First Order
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-300 sm:text-base">
            Use code <span className="font-mono font-bold text-amber-300">SAVE10</span> at checkout to receive an instant 10% discount on any purchase.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/search"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Start Shopping Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
