"use client";

import Link from "next/link";
import { cities } from "@/data/cities";

/** 将城市按时间线交替分配到左右两列，形成左→右瀑布流 */
function splitColumns() {
  const left: typeof cities = [];
  const right: typeof cities = [];
  cities.forEach((city, i) => {
    (i % 2 === 0 ? left : right).push(city);
  });
  return { left, right };
}

export default function TravelStories() {
  const { left, right } = splitColumns();

  return (
    <div className="flex gap-6 md:gap-10">
      {/* 左列 */}
      <div className="flex-1 flex flex-col gap-8 md:gap-10">
        {left.map((city) => (
          <Card key={city.slug} city={city} />
        ))}
      </div>

      {/* 右列 — 顶部留白形成错落 */}
      <div className="flex-1 flex flex-col gap-8 md:gap-10 mt-10 md:mt-16">
        {right.map((city) => (
          <Card key={city.slug} city={city} />
        ))}
      </div>
    </div>
  );
}

function Card({ city }: { city: (typeof cities)[number] }) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group block"
    >
      {/* 图片区 — 自适应比例，不裁切 */}
      <div className="relative overflow-hidden bg-oat/30 mb-3">
        {city.photo ? (
          <img
            src={`/footprint${city.photo}`}
            alt={city.name}
            className="w-full block transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="aspect-[4/3] flex items-center justify-center">
            <span className="text-6xl md:text-7xl text-oat/40 font-serif select-none">
              {city.name.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      {/* 文字区 */}
      <div className="space-y-1">
        <h2 className="text-base md:text-lg font-serif font-light text-ink tracking-wide group-hover:text-film transition-colors duration-300">
          {city.name}
          <span className="text-film/50 mx-1">·</span>
          <span className="text-ink-light font-light text-sm">{city.vibe}</span>
        </h2>
        <p className="text-[11px] tracking-[0.15em] text-ink-muted font-sans">
          {city.date}
        </p>
      </div>
    </Link>
  );
}
