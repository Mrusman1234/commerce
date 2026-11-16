import type { Collection, Menu, Page, Product } from "./shopify/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_hoodie",
    handle: "acme-classic-hoodie",
    availableForSale: true,
    title: "Acme Classic Heavyweight Hoodie",
    description:
      "Crafted from 450gsm heavyweight combed fleece for supreme softness and structure. Features a double-layered hood, ribbed mobility side-panels, and reinforced kangaroo pocket.",
    descriptionHtml:
      "<p>Crafted from 450gsm heavyweight combed fleece for supreme softness and structure. Features a double-layered hood, ribbed mobility side-panels, and reinforced kangaroo pocket.</p><ul><li>450gsm 100% organic cotton fleece</li><li>Double-lined hood with braided drawstrings</li><li>Pre-shrunk to maintain fit over time</li><li>Custom Acme tonal embroidery</li></ul>",
    options: [
      { id: "opt_size_h", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "opt_color_h", name: "Color", values: ["Black", "Heather Grey"] },
    ],
    priceRange: {
      minVariantPrice: { amount: "65.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "65.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Classic Heavyweight Hoodie in Black",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Classic Heavyweight Hoodie in Black",
        width: 1200,
        height: 1200,
      },
      {
        url: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Classic Hoodie in Heather Grey",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Classic Heavyweight Hoodie | Premium Cotton",
      description: "Heavyweight 450gsm fleece hoodie with minimalist embroidery.",
    },
    tags: ["apparel", "hoodies", "featured", "hidden-homepage-featured-items", "hidden-homepage-carousel"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_h_b_s",
        title: "Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_b_m",
        title: "Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_b_l",
        title: "Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_b_xl",
        title: "Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "XL" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_g_s",
        title: "Heather Grey / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Heather Grey" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_g_m",
        title: "Heather Grey / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "Heather Grey" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_g_l",
        title: "Heather Grey / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "Heather Grey" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
      {
        id: "var_h_g_xl",
        title: "Heather Grey / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "XL" },
          { name: "Color", value: "Heather Grey" },
        ],
        price: { amount: "65.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_tee",
    handle: "acme-minimalist-tee",
    availableForSale: true,
    title: "Acme Minimalist Crewneck T-Shirt",
    description:
      "A tailored everyday crewneck t-shirt cut from 220gsm combed ringspun organic cotton. Ultra-breathable, silky smooth against the skin, and built with reinforced neck ribbing.",
    descriptionHtml:
      "<p>A tailored everyday crewneck t-shirt cut from 220gsm combed ringspun organic cotton. Ultra-breathable, silky smooth against the skin, and built with reinforced neck ribbing.</p><ul><li>220gsm 100% ringspun organic cotton</li><li>Pre-shrunk fabric to prevent post-wash shrinkage</li><li>Blind-stitched hems for a crisp modern look</li></ul>",
    options: [
      { id: "opt_size_t", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "opt_color_t", name: "Color", values: ["White", "Black"] },
    ],
    priceRange: {
      minVariantPrice: { amount: "32.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "32.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Minimalist Crewneck T-Shirt in White",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Minimalist Crewneck T-Shirt in White",
        width: 1200,
        height: 1200,
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Minimalist T-Shirt in Black",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Minimalist T-Shirt | 100% Organic Cotton",
      description: "Premium tailored heavyweight t-shirt in monochrome colorways.",
    },
    tags: ["apparel", "shirts", "featured", "hidden-homepage-featured-items", "hidden-homepage-carousel"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_t_w_s",
        title: "White / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "White" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_w_m",
        title: "White / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "White" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_w_l",
        title: "White / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "White" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_w_xl",
        title: "White / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "XL" },
          { name: "Color", value: "White" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_b_s",
        title: "Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_b_m",
        title: "Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_b_l",
        title: "Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
      {
        id: "var_t_b_xl",
        title: "Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "XL" },
          { name: "Color", value: "Black" },
        ],
        price: { amount: "32.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_deskmat",
    handle: "acme-felt-desk-mat",
    availableForSale: true,
    title: "Acme Premium Wool Felt Desk Mat",
    description:
      "Crafted from premium high-density Australian wool felt. Provides an acoustic cushion for mechanical keyboards, smooth mouse tracking, and desktop surface protection.",
    descriptionHtml:
      "<p>Crafted from premium high-density Australian wool felt. Provides an acoustic cushion for mechanical keyboards, smooth mouse tracking, and desktop surface protection.</p><ul><li>Natural anti-static water-resistant wool</li><li>Non-slip natural rubber underlayment</li><li>Laser-cut beveled edges</li></ul>",
    options: [
      { id: "opt_size_d", name: "Size", values: ["Medium (75x30cm)", "Large (90x40cm)"] },
      { id: "opt_color_d", name: "Color", values: ["Dark Charcoal", "Light Ash"] },
    ],
    priceRange: {
      minVariantPrice: { amount: "42.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "48.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Premium Wool Felt Desk Mat on a clean desktop",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Premium Wool Felt Desk Mat on a clean desktop",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Premium Wool Felt Desk Mat | Workspace Gear",
      description: "High-density natural wool felt desk pad with anti-slip backing.",
    },
    tags: ["accessories", "tech", "featured", "hidden-homepage-featured-items", "hidden-homepage-carousel"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_d_m_c",
        title: "Medium (75x30cm) / Dark Charcoal",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Medium (75x30cm)" },
          { name: "Color", value: "Dark Charcoal" },
        ],
        price: { amount: "42.00", currencyCode: "USD" },
      },
      {
        id: "var_d_l_c",
        title: "Large (90x40cm) / Dark Charcoal",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Large (90x40cm)" },
          { name: "Color", value: "Dark Charcoal" },
        ],
        price: { amount: "48.00", currencyCode: "USD" },
      },
      {
        id: "var_d_m_a",
        title: "Medium (75x30cm) / Light Ash",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Medium (75x30cm)" },
          { name: "Color", value: "Light Ash" },
        ],
        price: { amount: "42.00", currencyCode: "USD" },
      },
      {
        id: "var_d_l_a",
        title: "Large (90x40cm) / Light Ash",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Large (90x40cm)" },
          { name: "Color", value: "Light Ash" },
        ],
        price: { amount: "48.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_windbreaker",
    handle: "acme-tech-windbreaker",
    availableForSale: true,
    title: "Acme All-Weather Tech Windbreaker",
    description:
      "Ultra-packable weather protection made from recycled micro-ripstop nylon with a water-repellent finish. Equipped with YKK AquaGuard zips and an adjustable storm hood.",
    descriptionHtml:
      "<p>Ultra-packable weather protection made from recycled micro-ripstop nylon with a water-repellent finish. Equipped with YKK AquaGuard zips and an adjustable storm hood.</p><ul><li>Recycled micro-ripstop nylon with DWR finish</li><li>Packs into its own internal zip pocket</li><li>Reflective tonal branding for nighttime visibility</li></ul>",
    options: [
      { id: "opt_size_w", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "opt_color_w", name: "Color", values: ["Matte Black", "Olive Drab"] },
    ],
    priceRange: {
      minVariantPrice: { amount: "88.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "88.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Tech Windbreaker Jacket in Matte Black",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Tech Windbreaker Jacket in Matte Black",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Tech Windbreaker Jacket | Waterproof Shell",
      description: "Packable all-weather technical windbreaker jacket.",
    },
    tags: ["apparel", "jackets", "hidden-homepage-carousel"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_w_b_s",
        title: "Matte Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Matte Black" },
        ],
        price: { amount: "88.00", currencyCode: "USD" },
      },
      {
        id: "var_w_b_m",
        title: "Matte Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "Matte Black" },
        ],
        price: { amount: "88.00", currencyCode: "USD" },
      },
      {
        id: "var_w_b_l",
        title: "Matte Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "Matte Black" },
        ],
        price: { amount: "88.00", currencyCode: "USD" },
      },
      {
        id: "var_w_b_xl",
        title: "Matte Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "XL" },
          { name: "Color", value: "Matte Black" },
        ],
        price: { amount: "88.00", currencyCode: "USD" },
      },
      {
        id: "var_w_o_m",
        title: "Olive Drab / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "Olive Drab" },
        ],
        price: { amount: "88.00", currencyCode: "USD" },
      },
      {
        id: "var_w_o_l",
        title: "Olive Drab / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "Olive Drab" },
        ],
        price: { amount: "88.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_cap",
    handle: "acme-dad-cap",
    availableForSale: true,
    title: "Acme Low-Profile Cotton Dad Cap",
    description:
      "Unstructured 6-panel silhouette in washed cotton chino twill. Featuring subtle tonal embroidery, a curved brim, and a metal slide closure with tuck-in strap.",
    descriptionHtml:
      "<p>Unstructured 6-panel silhouette in washed cotton chino twill. Featuring subtle tonal embroidery, a curved brim, and a metal slide closure with tuck-in strap.</p>",
    options: [{ id: "opt_color_cap", name: "Color", values: ["Washed Black", "Navy", "Khaki"] }],
    priceRange: {
      minVariantPrice: { amount: "28.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "28.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Cotton Dad Cap in Washed Black",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Cotton Dad Cap in Washed Black",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Low-Profile Dad Cap | Washed Cotton",
      description: "Casual 6-panel dad cap in vintage washed cotton twill.",
    },
    tags: ["accessories", "headwear", "hidden-homepage-carousel"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_cap_b",
        title: "Washed Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Washed Black" }],
        price: { amount: "28.00", currencyCode: "USD" },
      },
      {
        id: "var_cap_n",
        title: "Navy",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Navy" }],
        price: { amount: "28.00", currencyCode: "USD" },
      },
      {
        id: "var_cap_k",
        title: "Khaki",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Khaki" }],
        price: { amount: "28.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_tumbler",
    handle: "acme-thermal-tumbler",
    availableForSale: true,
    title: "Acme Vacuum Insulated Thermal Tumbler",
    description:
      "Double-walled 18/8 food-grade stainless steel with vacuum insulation keeps coffee hot for 12 hours or iced drinks cold for 24 hours. Leakproof 360-degree lid.",
    descriptionHtml:
      "<p>Double-walled 18/8 food-grade stainless steel with vacuum insulation keeps coffee hot for 12 hours or iced drinks cold for 24 hours. Leakproof 360-degree lid.</p><ul><li>500ml / 17oz volume capacity</li><li>BPA-free twist lid with magnetic slider</li><li>Powder-coated matte grip</li></ul>",
    options: [{ id: "opt_color_tumb", name: "Color", values: ["Matte Black", "Stainless Steel"] }],
    priceRange: {
      minVariantPrice: { amount: "36.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "36.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Thermal Tumbler in Matte Black",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Thermal Tumbler in Matte Black",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Vacuum Insulated Tumbler | 500ml",
      description: "Double-walled stainless steel travel tumbler with leakproof lid.",
    },
    tags: ["accessories", "drinkware", "hidden-homepage-carousel"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_tumb_b",
        title: "Matte Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Matte Black" }],
        price: { amount: "36.00", currencyCode: "USD" },
      },
      {
        id: "var_tumb_s",
        title: "Stainless Steel",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Stainless Steel" }],
        price: { amount: "36.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_tote",
    handle: "acme-canvas-tote",
    availableForSale: true,
    title: "Acme Heavy-Duty Canvas Everyday Tote",
    description:
      "Crafted from robust 16oz organic unbleached cotton canvas. Built with reinforced dual shoulder straps, a heavy-gauge bottom gusset, and internal zippered security pouch.",
    descriptionHtml:
      "<p>Crafted from robust 16oz organic unbleached cotton canvas. Built with reinforced dual shoulder straps, a heavy-gauge bottom gusset, and internal zippered security pouch.</p>",
    options: [{ id: "opt_color_tote", name: "Color", values: ["Natural Cream", "Pitch Black"] }],
    priceRange: {
      minVariantPrice: { amount: "26.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "26.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Heavy-Duty Canvas Tote in Natural Cream",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Heavy-Duty Canvas Tote in Natural Cream",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Heavyweight Canvas Tote Bag | 16oz Cotton",
      description: "Durable organic cotton canvas tote for groceries, books, and daily carry.",
    },
    tags: ["accessories", "bags"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_tote_c",
        title: "Natural Cream",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Natural Cream" }],
        price: { amount: "26.00", currencyCode: "USD" },
      },
      {
        id: "var_tote_b",
        title: "Pitch Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Pitch Black" }],
        price: { amount: "26.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_mug",
    handle: "acme-ceramic-mug",
    availableForSale: true,
    title: "Acme Handcrafted Matte Ceramic Mug",
    description:
      "Wheel-thrown stoneware ceramic mug with a smooth matte black glaze and debossed minimalist logo. Holds 350ml / 12oz of your favorite brew.",
    descriptionHtml:
      "<p>Wheel-thrown stoneware ceramic mug with a smooth matte black glaze and debossed minimalist logo. Holds 350ml / 12oz of your favorite brew.</p>",
    options: [{ id: "opt_color_mug", name: "Color", values: ["Matte Obsidian", "Speckled Sand"] }],
    priceRange: {
      minVariantPrice: { amount: "22.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "22.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Matte Ceramic Mug",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Matte Ceramic Mug",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Ceramic Coffee Mug | Handcrafted Stoneware",
      description: "Artisanal stoneware ceramic mug with modern satin glaze finish.",
    },
    tags: ["accessories", "drinkware"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_mug_o",
        title: "Matte Obsidian",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Matte Obsidian" }],
        price: { amount: "22.00", currencyCode: "USD" },
      },
      {
        id: "var_mug_s",
        title: "Speckled Sand",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Speckled Sand" }],
        price: { amount: "22.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_charger",
    handle: "acme-wireless-charger",
    availableForSale: true,
    title: "Acme 15W Qi Fast Wireless Charging Stand",
    description:
      "Precision-machined from aerospace-grade aluminum and genuine American walnut. Supports fast 15W Qi wireless inductive charging with built-in thermal control.",
    descriptionHtml:
      "<p>Precision-machined from aerospace-grade aluminum and genuine American walnut. Supports fast 15W Qi wireless inductive charging with built-in thermal control.</p>",
    options: [{ id: "opt_color_charger", name: "Finish", values: ["Space Grey / Walnut", "Silver / Oak"] }],
    priceRange: {
      minVariantPrice: { amount: "48.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "48.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1622445262464-84b14e3295b6?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Wireless Charging Stand in Walnut",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1622445262464-84b14e3295b6?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Wireless Charging Stand in Walnut",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Fast Wireless Charging Pad | Walnut & Aluminum",
      description: "15W wireless desk charging station for phones and accessories.",
    },
    tags: ["accessories", "tech"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_chg_w",
        title: "Space Grey / Walnut",
        availableForSale: true,
        selectedOptions: [{ name: "Finish", value: "Space Grey / Walnut" }],
        price: { amount: "48.00", currencyCode: "USD" },
      },
      {
        id: "var_chg_o",
        title: "Silver / Oak",
        availableForSale: true,
        selectedOptions: [{ name: "Finish", value: "Silver / Oak" }],
        price: { amount: "48.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_crewneck",
    handle: "acme-oversized-crewneck",
    availableForSale: true,
    title: "Acme Boxy Heavyweight Crewneck",
    description:
      "A streetwear-inspired relaxed fit crewneck sweatshirt made with 400gsm brushed fleece. Dropped shoulders, wide 2x2 ribbing at neck, cuffs, and hem.",
    descriptionHtml:
      "<p>A streetwear-inspired relaxed fit crewneck sweatshirt made with 400gsm brushed fleece. Dropped shoulders, wide 2x2 ribbing at neck, cuffs, and hem.</p>",
    options: [
      { id: "opt_size_cr", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "opt_color_cr", name: "Color", values: ["Charcoal Grey", "Vintage Cream"] },
    ],
    priceRange: {
      minVariantPrice: { amount: "62.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "62.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Boxy Heavyweight Crewneck in Charcoal Grey",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Boxy Heavyweight Crewneck in Charcoal Grey",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Boxy Heavyweight Crewneck | 400gsm Fleece",
      description: "Relaxed streetwear crewneck sweatshirt in heavyweight cotton fleece.",
    },
    tags: ["apparel", "hoodies"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_cr_c_s",
        title: "Charcoal Grey / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "S" },
          { name: "Color", value: "Charcoal Grey" },
        ],
        price: { amount: "62.00", currencyCode: "USD" },
      },
      {
        id: "var_cr_c_m",
        title: "Charcoal Grey / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "M" },
          { name: "Color", value: "Charcoal Grey" },
        ],
        price: { amount: "62.00", currencyCode: "USD" },
      },
      {
        id: "var_cr_c_l",
        title: "Charcoal Grey / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "L" },
          { name: "Color", value: "Charcoal Grey" },
        ],
        price: { amount: "62.00", currencyCode: "USD" },
      },
      {
        id: "var_cr_c_xl",
        title: "Charcoal Grey / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "XL" },
          { name: "Color", value: "Charcoal Grey" },
        ],
        price: { amount: "62.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_keychain",
    handle: "acme-leather-keychain",
    availableForSale: true,
    title: "Acme Horween Leather Carabiner Lanyard",
    description:
      "Handmade full-grain Horween vegetable-tanned leather key clip paired with an anodized matte black zinc carabiner and heavy-duty split ring.",
    descriptionHtml:
      "<p>Handmade full-grain Horween vegetable-tanned leather key clip paired with an anodized matte black zinc carabiner and heavy-duty split ring.</p>",
    options: [{ id: "opt_color_key", name: "Color", values: ["Cognac Brown", "Midnight Black"] }],
    priceRange: {
      minVariantPrice: { amount: "18.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "18.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Leather Carabiner Keychain",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Leather Carabiner Keychain",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Leather Carabiner Keychain | Horween Leather",
      description: "Full-grain Horween leather everyday carry keychain lanyard.",
    },
    tags: ["accessories"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_key_c",
        title: "Cognac Brown",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Cognac Brown" }],
        price: { amount: "18.00", currencyCode: "USD" },
      },
      {
        id: "var_key_b",
        title: "Midnight Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Midnight Black" }],
        price: { amount: "18.00", currencyCode: "USD" },
      },
    ],
  },
  {
    id: "prod_stickers",
    handle: "acme-sticker-pack",
    availableForSale: true,
    title: "Acme Holographic Developer Sticker Pack",
    description:
      "A pack of 10 weather-resistant vinyl stickers designed for developers and creators. UV-laminated for outdoor scratch resistance and vibrant color retention.",
    descriptionHtml:
      "<p>A pack of 10 weather-resistant vinyl stickers designed for developers and creators. UV-laminated for outdoor scratch resistance and vibrant color retention.</p>",
    options: [{ id: "opt_pack_stk", name: "Pack", values: ["10-Pack Assorted"] }],
    priceRange: {
      minVariantPrice: { amount: "12.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "12.00", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
      altText: "Acme Holographic Sticker Pack",
      width: 1200,
      height: 1200,
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
        altText: "Acme Holographic Sticker Pack",
        width: 1200,
        height: 1200,
      },
    ],
    seo: {
      title: "Acme Holographic Sticker Pack | 10 Vinyl Decals",
      description: "Set of 10 durable vinyl developer stickers with holographic accents.",
    },
    tags: ["accessories"],
    updatedAt: new Date().toISOString(),
    variants: [
      {
        id: "var_stk_10",
        title: "10-Pack Assorted",
        availableForSale: true,
        selectedOptions: [{ name: "Pack", value: "10-Pack Assorted" }],
        price: { amount: "12.00", currencyCode: "USD" },
      },
    ],
  },
];

export const MOCK_COLLECTIONS: Collection[] = [
  {
    handle: "",
    title: "All",
    description: "Explore all products in the Acme collection.",
    seo: {
      title: "All Products | Acme Store",
      description: "Browse the complete collection of modern apparel and everyday gear.",
    },
    updatedAt: new Date().toISOString(),
    path: "/search",
  },
  {
    handle: "apparel",
    title: "Apparel",
    description: "Premium heavy cotton hoodies, tailored t-shirts, and technical jackets.",
    seo: {
      title: "Apparel Collection | Acme Store",
      description: "Engineered clothing built with organic fabrics and minimal aesthetics.",
    },
    updatedAt: new Date().toISOString(),
    path: "/search/apparel",
  },
  {
    handle: "accessories",
    title: "Accessories",
    description: "Desk mats, thermal drinkware, leather goods, and everyday carry essentials.",
    seo: {
      title: "Accessories & Everyday Gear | Acme Store",
      description: "Precision-designed lifestyle accessories for work and daily life.",
    },
    updatedAt: new Date().toISOString(),
    path: "/search/accessories",
  },
];

export const MOCK_HEADER_MENU: Menu[] = [
  { title: "All", path: "/search" },
  { title: "Apparel", path: "/search/apparel" },
  { title: "Accessories", path: "/search/accessories" },
];

export const MOCK_FOOTER_MENU: Menu[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Terms & Conditions", path: "/terms" },
  { title: "Shipping & Returns", path: "/shipping" },
  { title: "Privacy Policy", path: "/privacy" },
  { title: "FAQ", path: "/faq" },
];

export const MOCK_PAGES: Page[] = [
  {
    id: "page_about",
    title: "About Acme Store",
    handle: "about",
    body: `<h2>Crafted for the Modern Creator</h2>
<p>At Acme Store, we believe products should be durable, minimal, and crafted with uncompromising standards. We engineer everyday goods that balance clean aesthetics with long-lasting functional utility.</p>
<h3>Our Commitment to Quality</h3>
<p>Every piece in our collection—from our 450gsm heavyweight cotton hoodies to our anodized charging docks—is designed in-house and manufactured in ethical facilities prioritizing sustainable methods and fair compensation.</p>
<h3>Sustainability</h3>
<p>We source 100% GOTS-certified organic cotton, recycled polyester fibers, and biodegradable packaging to minimize our environmental footprint without sacrificing performance.</p>`,
    bodySummary: "Learn about Acme Store's mission, craftsmanship, and sustainability practices.",
    seo: {
      title: "About Us | Acme Store",
      description: "The story, values, and manufacturing standards behind Acme Store.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "page_terms",
    title: "Terms and Conditions",
    handle: "terms",
    body: `<h2>Terms of Service</h2>
<p>Welcome to Acme Store. By using our website and placing orders, you agree to comply with our terms and conditions.</p>
<h3>1. Orders and Acceptance</h3>
<p>All orders placed through Acme Store are subject to acceptance. We reserve the right to refuse or cancel orders due to stock availability, pricing errors, or suspected unauthorized transactions.</p>
<h3>2. Pricing & Currency</h3>
<p>All prices displayed are in US Dollars ($ USD) unless otherwise indicated. Taxes and shipping charges are calculated during checkout prior to final payment.</p>
<h3>3. Cash on Delivery (COD)</h3>
<p>For orders placed under Cash on Delivery, payment must be handed over in full to the delivery courier upon arrival before package handover.</p>`,
    bodySummary: "Standard terms and conditions governing purchases and site use.",
    seo: {
      title: "Terms & Conditions | Acme Store",
      description: "Our terms of service and order policies.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "page_shipping",
    title: "Shipping & Returns",
    handle: "shipping",
    body: `<h2>Shipping Information</h2>
<p>We ship worldwide. All orders are processed and dispatched within 24 to 48 hours on business days.</p>
<h3>Shipping Options & Rates</h3>
<ul>
  <li><strong>Standard Shipping (3-5 business days):</strong> FREE for orders over $50 ($5 flat rate under $50).</li>
  <li><strong>Express Priority (1-2 business days):</strong> $12.00 flat rate with end-to-end tracking.</li>
  <li><strong>Cash on Delivery (COD):</strong> Available in select regions with zero convenience surcharge.</li>
</ul>
<h3>30-Day Hassle-Free Returns</h3>
<p>If you are not 100% satisfied with your purchase, you may return unwashed, unworn items in their original packaging within 30 days of delivery for a full refund or exchange.</p>`,
    bodySummary: "Details on shipping speeds, rates, cash on delivery, and our 30-day return policy.",
    seo: {
      title: "Shipping & Returns | Acme Store",
      description: "Shipping timelines, delivery rates, and return policies.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "page_privacy",
    title: "Privacy Policy",
    handle: "privacy",
    body: `<h2>Your Privacy Matters</h2>
<p>Acme Store is committed to safeguarding your personal data. We do not sell, rent, or trade your personal information with third parties.</p>
<h3>Data We Collect</h3>
<p>When you complete a checkout or create an account, we collect necessary contact and shipping information solely to process your orders and provide shipment tracking updates.</p>
<h3>Payment Security</h3>
<p>All online transactions are encrypted via 256-bit SSL encryption. We do not store raw credit card details on our servers.</p>`,
    bodySummary: "Our privacy commitments, data security, and encryption policies.",
    seo: {
      title: "Privacy Policy | Acme Store",
      description: "Learn how Acme Store protects your personal data.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "page_faq",
    title: "Frequently Asked Questions",
    handle: "faq",
    body: `<h2>Frequently Asked Questions</h2>
<h3>How do I know what size to choose?</h3>
<p>Our apparel fits true to modern unisex streetwear sizing. If you prefer a tailored fit, select your standard size. For an oversized fit, size up one full size.</p>
<h3>What payment methods do you accept?</h3>
<p>We accept all major credit/debit cards (Visa, Mastercard, Amex), Cash on Delivery (COD), Apple Pay, and Google Pay.</p>
<h3>How can I track my order?</h3>
<p>As soon as your order ships, you will receive an email confirmation containing your live tracking number.</p>`,
    bodySummary: "Common questions about sizing, payment methods, delivery, and tracking.",
    seo: {
      title: "FAQ | Acme Store",
      description: "Frequently asked questions about orders, sizing, and shipping.",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
