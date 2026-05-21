import HeroSlogan from "@/components/HeroSlogan";
import HandDrawnMap from "@/components/HandDrawnMap";
import ScrollHint from "@/components/ScrollHint";
import CityPortals from "@/components/CityPortals";

export default function Home() {
  return (
    <>
      {/* ============================================ */}
      {/* 首屏：视差标语 + 手绘地图                         */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pb-16">
        <HeroSlogan />
        <HandDrawnMap />
        <ScrollHint />
      </section>

      {/* ============================================ */}
      {/* 分屏：城市入口画廊                                */}
      {/* ============================================ */}
      <section id="cities" className="min-h-screen py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[#4a3728] tracking-wide">
            城市的收纳切面
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="block w-8 h-px bg-[#c75146] opacity-30" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#c75146] opacity-40" />
            <span className="block w-8 h-px bg-[#c75146] opacity-30" />
          </div>
          <p className="mt-3 text-sm text-[#a09080] tracking-widest">
            每一座城市，都是一个独立的故事
          </p>
        </div>

        <CityPortals />
      </section>
    </>
  );
}
