import TravelStories from "@/components/TravelStories";
import PhotoStream from "@/components/PhotoStream";
import Link from "next/link";

const magazines = [
  {
    slug: "wuxulancha-20260828",
    title: "向北六日",
    subtitle: "草原 · 火山 · 湖泊 · 和一座城",
    tagline: "六日静行 · 广州 ↔ 呼和浩特 · 同行的四个人",
    date: "2026.08",
    cover: "/magazines/wuxulancha-20260828/cover.jpg",
    vibe: "向内向北",
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-[100dvh] py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          城市记忆
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 mb-3">
          <span className="block w-8 h-px bg-film/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
          <span className="block w-8 h-px bg-film/30" />
        </div>
        <p className="text-sm text-ink-muted tracking-widest">
          像翻阅一本旅行杂志的目录
        </p>
      </div>

      {/* 杂志书 — featured */}
      <section className="mb-24 md:mb-32">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] tracking-[0.24em] text-film font-sans uppercase">
            Magazine
          </span>
          <span className="flex-1 h-px bg-film/30" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {magazines.map((mag) => (
            <Link
              key={mag.slug}
              href={`/magazines/${mag.slug}/`}
              className="group block md:col-span-2 md:grid md:grid-cols-2 md:gap-10 items-center"
            >
              <div className="relative overflow-hidden bg-oat/30 mb-5 md:mb-0">
                <img
                  src={`/footprint${mag.cover}`}
                  alt={mag.title}
                  className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[11px] tracking-[0.2em] text-film/70 font-sans uppercase">
                  Vol.01 · {mag.date}
                </p>
                <h2 className="text-xl md:text-2xl font-serif font-light text-ink tracking-wide group-hover:text-film transition-colors duration-300 leading-relaxed">
                  {mag.title}
                </h2>
                <p className="text-sm text-ink-muted tracking-wide font-sans">
                  {mag.subtitle}
                </p>
                <p className="text-sm text-ink-light font-serif italic">
                  {mag.tagline}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xs tracking-[0.15em] text-film font-sans">
                    翻阅这本杂志
                  </span>
                  <span className="text-film/70 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TravelStories />

      {/* 影像碎片 — 杂志拼贴 */}
      <section className="mt-24 md:mt-32">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-serif font-light text-ink tracking-widest">
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
    </main>
  );
}
