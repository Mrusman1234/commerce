"use client";

import {
  ArrowPathIcon,
  BanknotesIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useState } from "react";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<string | null>("sizing");

  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="flex flex-col">
      {/* Title & Rating */}
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex text-amber-400">
            <StarSolid className="h-4 w-4" />
            <StarSolid className="h-4 w-4" />
            <StarSolid className="h-4 w-4" />
            <StarSolid className="h-4 w-4" />
            <StarSolid className="h-4 w-4" />
          </div>
          <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            4.9 (128 reviews)
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            In Stock
          </span>
        </div>

        <h1 className="mb-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          {product.title}
        </h1>

        <div className="mr-auto w-auto rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>

      {/* Variant Selector */}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Description */}
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
          html={product.descriptionHtml}
        />
      ) : null}

      {/* Add To Cart Button */}
      <div className="mb-8">
        <AddToCart product={product} />
      </div>

      {/* Value Badges */}
      <div className="mb-8 grid grid-cols-2 gap-3 rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300">
        <div className="flex items-center gap-2">
          <TruckIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>Free shipping over $50</span>
        </div>
        <div className="flex items-center gap-2">
          <BanknotesIcon className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0" />
          <span>Cash on Delivery (COD)</span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowPathIcon className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>30-day money-back</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheckIcon className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>Certified GOTS organic</span>
        </div>
      </div>

      {/* Interactive Product Details Accordions */}
      <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm dark:divide-neutral-800 dark:border-neutral-800">
        {/* Accordion 1: Sizing */}
        <div>
          <button
            onClick={() => toggleTab("sizing")}
            className="flex w-full items-center justify-between py-4 text-left font-medium text-neutral-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            <span>Sizing & Fit Advice</span>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${
                activeTab === "sizing" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeTab === "sizing" && (
            <div className="pb-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p>
                Fits true to modern unisex sizing. If you prefer a tailored, clean silhouette, choose your normal size. For an oversized streetwear aesthetic, order one size up.
              </p>
            </div>
          )}
        </div>

        {/* Accordion 2: Materials & Care */}
        <div>
          <button
            onClick={() => toggleTab("care")}
            className="flex w-full items-center justify-between py-4 text-left font-medium text-neutral-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            <span>Materials & Sustainable Care</span>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${
                activeTab === "care" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeTab === "care" && (
            <div className="pb-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              <ul className="list-disc pl-4 space-y-1">
                <li>100% GOTS-certified combed organic cotton fleece.</li>
                <li>Machine wash cold with like colors inside out.</li>
                <li>Hang dry or tumble dry on low to preserve garment longevity.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Accordion 3: Shipping & Returns */}
        <div>
          <button
            onClick={() => toggleTab("shipping")}
            className="flex w-full items-center justify-between py-4 text-left font-medium text-neutral-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            <span>Shipping Speeds & Hassle-Free Returns</span>
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${
                activeTab === "shipping" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeTab === "shipping" && (
            <div className="pb-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p>
                Orders dispatch within 24 hours. Standard Tracked Shipping takes 3–5 business days. Enjoy full 30-day returns on unworn items with original tags.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
