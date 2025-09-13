"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed z-50 motion-safe:transition-all motion-safe:duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <button
        onClick={handleClick}
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 rounded-full p-3 md:p-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-secondary)] shadow-md hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-ring)]"
      >
        <ArrowUp className="h-5 w-5 text-black" aria-hidden />
        <span className="sr-only">Back to top</span>
      </button>
    </div>
  );
};