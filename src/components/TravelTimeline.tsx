import { cities } from "@/data/cities";
import Link from "next/link";

// 按年份分组
const timeline = cities.reduce(
  (acc, city) => {
    const year = city.date.replace(/[^0-9]/g, "").slice(0, 4) || "2024";
    if (!acc[year]) acc[year] = [];
    acc[year].push(city);
    return acc;
  },
  {} as Record<string, typeof cities>
);

const sortedYears = Object.keys(timeline).sort();

export default function TravelTimeline() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
      {sortedYears.map((year) => (
        <div key={year}>
          {/* 年份 header — 大衬线数字 */}
          <div className="flex items-baseline gap-4 mb-6">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wider">
              {year}
            </h3>
            <span className="flex-1 h-px bg-oat/60" />
            <span className="text-[10px] tracking-[0.2em] text-ink-light font-sans">
              {timeline[year].length} 城
            </span>
          </div>

          {/* 城市卡片网格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {timeline[year].map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-warm/80 backdrop-blur-sm border border-oat rounded-xl transition-all duration-400 ease-out hover:border-[var(--color-film)]/40 hover:shadow-lg hover:shadow-[var(--color-film)]/5 hover:-translate-y-1">
                  {/* 照片封面 — 3:4 竖版海报比例 */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-oat/30">
                    {city.photo ? (
                      <img
                        src={`/footprint${city.photo}`}
                        alt={city.name}
                        className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                          city.poster
                            ? "object-contain p-3 md:p-4"
                            : "object-cover"
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl text-oat/40 font-serif select-none">
                          {city.name.slice(0, 1)}
                        </span>
                      </div>
                    )}
                    {/* 日期角标 */}
                    <span className="absolute top-2.5 left-2.5 text-[9px] tracking-[0.15em] px-2 py-0.5 rounded-full bg-paper/85 backdrop-blur-sm text-ink-light font-sans">
                      {city.date}
                    </span>
                  </div>

                  {/* 文字区 */}
                  <div className="p-4">
                    <h4 className="font-serif text-sm md:text-base font-medium text-ink tracking-wide group-hover:text-film transition-colors duration-300">
                      {city.name}
                      <span className="text-film/50 mx-1">·</span>
                      <span className="text-ink-light font-light text-xs">
                        {city.vibe}
                      </span>
                    </h4>
                    <p className="mt-1.5 text-[10px] tracking-wider text-ink-light/80 font-sans line-clamp-1">
                      {city.tagline}
                    </p>
                    <div className="mt-2.5 text-[10px] text-ink-light/70 font-sans">
                      {city.feelings.length + city.thoughts.length} 碎片
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
