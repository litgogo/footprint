"use client";

import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span className="text-xs tracking-[0.25em] font-light">向下探索</span>
      <svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        className="animate-bounce"
      >
        <path
          d="M8 3v14M3 13l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
