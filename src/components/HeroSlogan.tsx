"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/cities";

export default function HeroSlogan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ratio goes from 1 (fully visible) to 0 (fully scrolled out)
        const progress = 1 - entry.intersectionRatio;
        setScrollProgress(Math.min(progress, 1));
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const opacity = 1 - scrollProgress * 1.3;
  const translateY = scrollProgress * -80;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
      style={{
        opacity: Math.max(opacity, 0),
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.1s linear, transform 0.1s linear",
      }}
    >
      {/* 装饰线 — 上方 */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="block w-10 h-px bg-film opacity-30" />
        <span className="w-1.5 h-1.5 rounded-full bg-film opacity-50" />
        <span className="block w-10 h-px bg-film opacity-30" />
      </div>

      {/* 主标语 */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-ink tracking-widest leading-tight max-w-3xl">
        {siteConfig.slogan}
      </h1>

      {/* 副标 */}
      <p className="mt-6 text-lg md:text-xl text-ink-light font-serif italic tracking-wide max-w-xl leading-relaxed">
        {siteConfig.subtitle}
      </p>

      {/* 装饰线 — 下方 */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="block w-12 h-px bg-[var(--color-ink-muted)] opacity-30" />
        <span className="text-[10px] tracking-[0.3em] text-ink-muted uppercase font-light">
          {siteConfig.author}
        </span>
        <span className="block w-12 h-px bg-[var(--color-ink-muted)] opacity-30" />
      </div>
    </div>
  );
}
