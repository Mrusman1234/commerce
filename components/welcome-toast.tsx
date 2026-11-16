"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes("welcome-toast=2")) {
      toast("🛍️ Welcome to Acme Store!", {
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
        description: (
          <>
            Enjoy 10% off your order with code{" "}
            <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
              SAVE10
            </span>
            . Free tracked shipping on orders over $50 + Cash on Delivery available!
          </>
        ),
      });
    }
  }, []);

  return null;
}
