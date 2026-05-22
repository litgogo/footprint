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
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-center md:items-start">
      {/* 左：地图 */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <img
          src="/footprint/photos/china-map.webp"
          alt="中国足迹地图"
          className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* 右：时间轴 */}
      <div className="w-full md:w-1/2 space-y-10">
        {sortedYears.map((year) => (
          <div key={year}>
            {/* 年份 */}
            <h3 className="text-sm tracking-[0.3em] text-ink-muted mb-4 font-sans">
              {year}
            </h3>

            {/* 城市列表 */}
            <div className="space-y-2">
              {timeline[year].map((city) => (
                <Link
                  key={city.slug}
                  href={city.route}
                  className="group flex items-center gap-3 py-2 border-b border-oat/50 hover:border-film/30 transition-all duration-300"
                >
                  {/* 小圆点 */}
                  <span className="w-2 h-2 rounded-full bg-film/50 group-hover:bg-film group-hover:scale-125 transition-all duration-300 flex-shrink-0" />

                  {/* 城市名 + tagline */}
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-serif text-ink group-hover:text-ink transition-colors">
                      {city.name}
                    </span>
                    <span className="text-xs text-ink-muted ml-3 hidden sm:inline">
                      {city.tagline.slice(0, 20)}…
                    </span>
                  </div>

                  {/* 箭头 */}
                  <span className="text-xs text-ink-muted opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
