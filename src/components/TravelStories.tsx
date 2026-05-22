"use client";

import Link from "next/link";
import { cities } from "@/data/cities";

export default function TravelStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {cities.map((city) => (
        <Link
          key={city.slug}
          href={`/cities/${city.slug}`}
          className="group block"
        >
          {/* 图片占位区 — 后续统一替换 */}
          <div className="relative overflow-hidden bg-oat/30 aspect-[4/3] mb-5">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-7xl text-oat/40 font-serif select-none">
                {city.name.slice(0, 1)}
              </span>
            </div>
          </div>

          {/* 文字区 */}
          <div className="space-y-1.5">
            <h2 className="text-lg md:text-xl font-serif font-light text-ink tracking-wide group-hover:text-film transition-colors duration-300">
              {city.name}
              <span className="text-film/60 mx-1.5">·</span>
              <span className="text-ink-light font-light">{city.vibe}</span>
            </h2>
            <p className="text-xs tracking-[0.15em] text-ink-muted font-sans">
              {city.date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
