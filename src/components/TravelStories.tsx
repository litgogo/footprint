import { cities } from "@/data/cities";

// 精选几个城市做杂志目录式展示
const featured = cities.slice(0, 8);

export default function TravelStories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {featured.map((city) => (
          <div key={city.slug} className="group block">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
            {/* 大图 */}
            {city.photo ? (
              <img
                src={`/footprint${city.photo}`}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-oat" />
            )}

            {/* 暗色渐变 + 文字覆盖 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* 文字 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="text-[10px] tracking-[0.2em] text-white/60 mb-1 font-sans">
                {city.date}
              </p>
              <h3 className="text-sm md:text-base font-serif font-light text-white tracking-wide">
                {city.name}
                {city.name.includes("&") ? "" : ""}
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-relaxed line-clamp-2">
                {city.tagline}
              </p>
            </div>
          </div>
          </div>
      ))}
    </div>
  );
}
