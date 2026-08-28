import HeroSlogan from "@/components/HeroSlogan";
import CityPortals from "@/components/CityPortals";
import TravelTimeline from "@/components/TravelTimeline";

export default function Home() {
  return (
    <>
      {/* 首屏 — 封面 slogan */}
      <section className="relative min-h-[100dvh]">
        <HeroSlogan />
      </section>

      {/* 城市入口 — 手绘图标卡片，点击进入城市记忆 */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto">
        <CityPortals />
      </section>

      {/* 时间轴 — 年份记忆 */}
      <section className="py-20 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-serif font-light text-ink tracking-widest">
            旅行年份
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="block w-8 h-px bg-film/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
            <span className="block w-8 h-px bg-film/30" />
          </div>
        </div>
        <TravelTimeline />
      </section>
    </>
  );
}
