import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import { AnnouncementBar } from "./announcement-bar";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <nav className="border-b border-neutral-200/80 bg-white/85 backdrop-blur-md dark:border-neutral-800/80 dark:bg-black/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Mobile menu trigger */}
          <div className="block flex-none md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>

          {/* Brand Logo & Category Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2.5 transition hover:opacity-90"
            >
              <LogoSquare />
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight uppercase text-neutral-900 dark:text-white">
                  {SITE_NAME || "Acme Store"}
                </span>
                <span className="hidden text-[10px] font-medium tracking-wider text-neutral-400 uppercase sm:block">
                  Modern Storefront
                </span>
              </div>
            </Link>

            {menu.length ? (
              <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="relative text-neutral-600 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
                    >
                      {item.title}
                      {item.title === "Apparel" && (
                        <span className="ml-1.5 rounded-full bg-blue-100 px-1.5 py-0.5 text-[9px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          HOT
                        </span>
                      )}
                      {item.title === "Accessories" && (
                        <span className="ml-1.5 rounded-full bg-green-100 px-1.5 py-0.5 text-[9px] font-bold text-green-700 dark:bg-green-950 dark:text-green-300">
                          NEW
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Centered Search Bar */}
          <div className="mx-4 hidden max-w-xs flex-1 justify-center md:flex lg:max-w-md">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-4">
            <Link
              href="/faq"
              className="hidden text-xs font-semibold text-neutral-500 transition hover:text-black lg:block dark:text-neutral-400 dark:hover:text-white"
            >
              Help & FAQ
            </Link>
            <div className="hidden h-4 w-px bg-neutral-200 lg:block dark:bg-neutral-800" />
            <Link
              href="/shipping"
              className="hidden text-xs font-semibold text-neutral-500 transition hover:text-black xl:block dark:text-neutral-400 dark:hover:text-white"
            >
              Track Order
            </Link>
            <div className="hidden h-4 w-px bg-neutral-200 xl:block dark:bg-neutral-800" />
            <CartModal />
          </div>
        </div>
      </nav>
    </header>
  );
}
