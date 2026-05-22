import HeroSlogan from "@/components/HeroSlogan";
import HandDrawnMap from "@/components/HandDrawnMap";
import ScrollHint from "@/components/ScrollHint";
import CityPortals from "@/components/CityPortals";
import TravelTimeline from "@/components/TravelTimeline";
import TravelStories from "@/components/TravelStories";
import PhotoStream from "@/components/PhotoStream";

export default function Home() {
  return (
    <>
      {/* ============================================ */}
      {/* ① Hero — 视差标语 + 极简地图                      */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pb-16">
        <HeroSlogan />
        <HandDrawnMap />
        <ScrollHint />
      </section>

      {/* ============================================ */}
      {/* ② 城市印记 — Chibi Icon 画廊                      */}
      {/* ============================================ */}
      <section className="min-h-screen py-24 md:py-32 px-4 max-w-5xl mx-auto flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
            城市印记
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-3">
            <span className="block w-8 h-px bg-film/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
            <span className="block w-8 h-px bg-film/30" />
          </div>
          <p className="text-sm text-ink-muted tracking-widest max-w-md mx-auto leading-relaxed">
            每一座城市，都是情绪的先验——在看地图之前，你已经知道它会在哪里打动你。
          </p>
        </div>

        <CityPortals />

        {/* 按钮：查看足迹 → 锚点到下一屏 */}
        <div className="text-center mt-16">
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm text-ink-light border border-oat rounded-full hover:border-film/40 hover:text-ink transition-all duration-300"
          >
            查看足迹
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ============================================ */}
      {/* ③ 旅行地图 — 左地图 / 右时间轴                      */}
      {/* ============================================ */}
      <section id="timeline" className="min-h-screen py-24 md:py-32 px-4 max-w-6xl mx-auto flex items-center">
        <TravelTimeline />
      </section>

      {/* ============================================ */}
      {/* ④ 旅行故事 — 杂志目录式卡片                          */}
      {/* ============================================ */}
      <section className="min-h-screen py-24 md:py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
            旅行故事
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-3">
            <span className="block w-8 h-px bg-film/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
            <span className="block w-8 h-px bg-film/30" />
          </div>
          <p className="text-sm text-ink-muted tracking-widest">
            像翻阅一本旅行杂志的目录
          </p>
        </div>

        <TravelStories />
      </section>

      {/* ============================================ */}
      {/* ⑤ 照片流 — Cereal 杂志呼吸感网格                    */}
      {/* ============================================ */}
      <section className="min-h-screen py-24 md:py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
            影像碎片
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-3">
            <span className="block w-8 h-px bg-film/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
            <span className="block w-8 h-px bg-film/30" />
          </div>
          <p className="text-sm text-ink-muted tracking-widest">
            下午四点的海边没有人，风很大。
          </p>
        </div>

        <PhotoStream />
      </section>

      {/* ============================================ */}
      {/* Footer                                         */}
      {/* ============================================ */}
      <footer className="py-20 px-4 text-center border-t border-oat/50">
        <p className="text-lg md:text-xl font-serif font-light text-ink-light tracking-wider leading-relaxed">
          世界很大，
          <br />
          但人总会记得某个傍晚吹过的风。
        </p>
        <p className="mt-8 text-[10px] text-ink-muted tracking-[0.3em] font-light">
          此处安放 · 二〇二六
        </p>
      </footer>
    </>
  );
}
