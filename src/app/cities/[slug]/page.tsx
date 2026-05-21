import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import Link from "next/link";
import CityDetailClient from "./CityDetailClient";

// 静态生成所有城市页
export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <main className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
      {/* ============================================ */}
      {/* 返回链接                                        */}
      {/* ============================================ */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[#8c7b6b] hover:text-[#4a3728] transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform text-xs">←</span>
        <span className="tracking-wide">回到足迹地图</span>
      </Link>

      {/* ============================================ */}
      {/* 城市标题区                                      */}
      {/* ============================================ */}
      <header className="mb-10">
        <div className="text-[11px] text-[#a09080] tracking-[0.2em] mb-3">
          {city.date}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#4a3728] tracking-wider">
          {city.name}
        </h1>

        {/* 装饰线 + tagline */}
        <div className="flex items-center gap-4 mt-4">
          <span className="block w-10 h-px bg-[#c75146]/40" />
          <p className="text-lg md:text-xl text-[#8c7b6b] font-serif italic leading-relaxed">
            {city.tagline}
          </p>
        </div>

        {/* 关键词 + 同行者 */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {city.keywords.map((kw) => (
            <span
              key={kw}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-[#e8e0d5] text-[#8c7b6b]"
            >
              {kw}
            </span>
          ))}
          {city.companion && (
            <span className="text-[11px] px-3 py-1 rounded-full bg-[#fdf5f4] text-[#c75146] border border-[#f5d5d2]/50">
              同行：{city.companion}
            </span>
          )}
        </div>

        {/* 统计概览 */}
        <div className="flex gap-5 mt-6 text-xs text-[#a09080]">
          <span>🧩 {city.fragments.length} 碎片</span>
          <span>💭 {city.feelings.length} 感受</span>
          <span>🧠 {city.thoughts.length} 思考</span>
        </div>
      </header>

      {/* ============================================ */}
      {/* 三级索引交互区（客户端组件）                          */}
      {/* ============================================ */}
      <CityDetailClient city={city} />

      {/* ============================================ */}
      {/* 底部城市导航                                     */}
      {/* ============================================ */}
      <CityNavigation currentSlug={slug} />
    </main>
  );
}

// ============================================================
// 城市间导航
// ============================================================

function CityNavigation({ currentSlug }: { currentSlug: string }) {
  const currentIndex = cities.findIndex((c) => c.slug === currentSlug);
  const prev = currentIndex > 0 ? cities[currentIndex - 1] : null;
  const next =
    currentIndex < cities.length - 1 ? cities[currentIndex + 1] : null;

  return (
    <nav className="mt-20 pt-8 border-t border-[#e8e0d5] flex justify-between items-center text-sm">
      {prev ? (
        <Link
          href={prev.route}
          className="text-[#8c7b6b] hover:text-[#4a3728] transition-colors flex items-center gap-1.5 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform text-xs">
            ←
          </span>
          <span className="hidden sm:inline">{prev.name}</span>
        </Link>
      ) : (
        <span />
      )}
      <Link
        href="/"
        className="text-[#a09080] hover:text-[#4a3728] transition-colors text-xs tracking-wider"
      >
        足迹地图
      </Link>
      {next ? (
        <Link
          href={next.route}
          className="text-[#8c7b6b] hover:text-[#4a3728] transition-colors flex items-center gap-1.5 group"
        >
          <span className="hidden sm:inline">{next.name}</span>
          <span className="group-hover:translate-x-1 transition-transform text-xs">
            →
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
