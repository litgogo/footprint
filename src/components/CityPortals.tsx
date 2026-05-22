"use client";

import { cities } from "@/data/cities";
import { cityIconMap } from "@/components/CityIcons";
import Link from "next/link";

export default function CityPortals() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {cities.map((city) => {
        const Icon = cityIconMap[city.slug];

        return (
          <Link
            key={city.slug}
            href={city.route}
            className="group block"
          >
            <div
              className="
                relative bg-warm/80 backdrop-blur-sm
                border border-oat rounded-xl
                p-6 md:p-8
                flex flex-col items-center text-center
                transition-all duration-400 ease-out
                hover:border-[var(--color-film)]/40
                hover:bg-film/10/60
                hover:shadow-lg hover:shadow-[var(--color-film)]/5
                hover:-translate-y-1
              "
            >
              {/* 城市 Icon 容器 */}
              <div className="w-20 h-20 md:w-24 md:h-24 mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-400">
                {Icon && <Icon />}
              </div>

              {/* 日期 */}
              <div className="text-[10px] tracking-[0.2em] text-ink-muted mb-2 uppercase">
                {city.date}
              </div>

              {/* 城市名 */}
              <h3 className="font-serif text-base md:text-lg font-medium text-ink tracking-wide">
                {city.name}
              </h3>

              {/* Tagline */}
              <p className="mt-2 text-xs md:text-sm text-ink-light leading-relaxed max-w-[200px]">
                {city.tagline}
              </p>

              {/* 同行者 */}
              {city.companion && (
                <span className="mt-3 text-[10px] px-2.5 py-1 rounded-full bg-film/10 text-film border border-film/20/50">
                  {city.companion}
                </span>
              )}

              {/* Hover 时才显示的统计 */}
              <div className="mt-4 flex gap-3 text-[10px] text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>💭 {city.feelings.length}</span>
                <span>🧠 {city.thoughts.length}</span>
              </div>

              {/* 左下角装饰角标 */}
              <div className="absolute bottom-3 right-3 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg viewBox="0 0 12 12" fill="none">
                  <path d="M1 1L11 11M11 1v10H1" stroke="var(--color-film)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
