# Acme Store — Next.js Commerce Storefront

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMrusman1234%2Fcommerce)

A modern, high-performance ecommerce storefront built with **Next.js 15 (App Router & Turbopack)**, **React 19**, **Tailwind CSS**, and optional **Shopify** headless backend.

Features a full built-in product catalog, conversion-optimized landing page, dynamic cart drawer with a free shipping tier bar, and a complete **Cash on Delivery (COD)** & Card checkout flow.

---

## ✨ Features

- **⚡ Next.js 15 & React 19:** Powered by React Server Components (RSC), Server Actions, and Partial Prerendering (PPR).
- **🛍️ Complete Product Catalog:** 12 curated apparel, workstation, and lifestyle items with variant selectors (Size & Color), high-resolution photography, and pricing.
- **🎯 Conversion-Optimized Landing Page:**
  - Dynamic Hero Banner with seasonal drop callouts.
  - Flagship 3-Item Grid highlighting showstopper products.
  - Value Proposition & Trust Bar (Free Delivery, 30-Day Returns, COD, Organic Cotton).
  - Category Spotlight cards (*Apparel* & *Accessories*).
  - Animated Trending Carousel.
  - Promo callout for 10% discount (`SAVE10`).
- **🛒 Dynamic Cart System:**
  - Instant slide-out cart drawer with quantity increments (`+` / `-`) and item removal.
  - **Free Shipping Progress Bar:** Real-time tier calculator toward free shipping over $50.
  - Cookie-backed local session persistence.
- **💳 Complete Checkout Experience (`/checkout`):**
  - Contact & Delivery Address collection.
  - Shipping speed options: Standard (FREE) vs Express ($12).
  - Payment options: **Cash on Delivery (COD)** and **Credit/Debit Card**.
  - Interactive Promo Engine (`SAVE10` gives 10% off).
  - Itemized Order Confirmation receipt with generated Order ID (`/checkout/success`).
- **🔍 Search & Filter Engine:**
  - Instant search by product titles, tags, and descriptions.
  - Collection filtering (`/search/apparel`, `/search/accessories`).
  - Sorting by Price (Low/High), Trending, and Latest Arrivals.
- **🎨 Glassmorphic Header & Multi-Column Footer:**
  - Sticky header with top announcement bar and category status pills (`HOT`, `NEW`).
  - Multi-column footer with newsletter signup, customer support links, and accepted payment badges (COD, Visa, Apple Pay, 256-Bit SSL).

---

## 🚀 One-Click Deployment to Vercel

### Option 1: Import via Vercel Dashboard (Recommended)

1. Open [vercel.com/new](https://vercel.com/new).
2. Under **Import Git Repository**, select **`Mrusman1234/commerce`**.
3. (Optional) In **Environment Variables**, add:
   ```env
   COMPANY_NAME="Acme Store"
   SITE_NAME="Acme Store"
   ```
4. Click **Deploy**. Vercel will build and assign your live production URL in under 2 minutes.

---

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Mrusman1234/commerce.git
cd commerce
```

### 2. Install dependencies
```bash
pnpm install
# or npm install
```

### 3. Run the development server
```bash
pnpm dev
# or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001) if port 3000 is occupied).

---

## 📄 License

MIT License.
