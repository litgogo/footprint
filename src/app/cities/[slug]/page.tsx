import { cities } from "@/data/cities";
import Link from "next/link";
import { notFound } from "next/navigation";

// 静态生成所有城市页
export function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export default function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  // params is a Promise in Next.js 16
  const resolvedParams = useParamsAsync(params);
  return <CityPageContent slug={resolvedParams.slug} />;
}

// Helper to await params
import { use } from "react";

function CityPageContent({ slug }: { slug: string }) {
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      {/* 返回链接 */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[#8c7b6b] hover:text-[#5d4e37] transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        回到足迹地图
      </Link>

      {/* 城市标题 */}
      <div className="mb-10">
        <div className="text-xs text-[#a09080] tracking-widest mb-2">{city.date}</div>
        <h1 className="text-3xl md:text-4xl font-serif font-light text-[#5d4e37] tracking-wide">
          {city.name}
        </h1>
        <div className="flex items-center gap-3 mt-3">
          <span className="block w-8 h-px bg-[#c75146] opacity-40" />
          <p className="text-lg text-[#8c7b6b] font-serif italic">{city.tagline}</p>
        </div>
        {city.companion && (
          <div className="mt-4">
            <span className="text-xs px-3 py-1 rounded-full bg-[#fdf5f4] text-[#c75146] border border-[#f5d5d2]">
              同行者：{city.companion}
            </span>
          </div>
        )}
      </div>

      {/* 关键词标签 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {city.keywords.map((kw) => (
          <span
            key={kw}
            className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#e8e0d5] text-[#8c7b6b]"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* 正文占位 — 后续填充游记内容 */}
      <article className="prose prose-stone max-w-none font-serif text-[#3d3226] leading-relaxed">
        <div className="p-8 bg-white rounded-lg border border-[#e8e0d5] text-center">
          <p className="text-[#a09080] text-sm">
            游记正文即将呈现在这里。
          </p>
          <p className="text-[#c75146] text-xs mt-2">
            —— {city.name} · 慢游档案 ——
          </p>
        </div>
      </article>

      {/* 底部导航 — 前后城市 */}
      <CityNavigation currentSlug={slug} />
    </main>
  );
}

function CityNavigation({ currentSlug }: { currentSlug: string }) {
  const currentIndex = cities.findIndex((c) => c.slug === currentSlug);
  const prev = currentIndex > 0 ? cities[currentIndex - 1] : null;
  const next = currentIndex < cities.length - 1 ? cities[currentIndex + 1] : null;

  return (
    <nav className="mt-16 pt-8 border-t border-[#e8e0d5] flex justify-between items-center text-sm">
      {prev ? (
        <Link
          href={prev.route}
          className="text-[#8c7b6b] hover:text-[#5d4e37] transition-colors flex items-center gap-1 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          {prev.name}
        </Link>
      ) : (
        <span />
      )}
      <Link href="/" className="text-[#a09080] hover:text-[#5d4e37] transition-colors text-xs">
        足迹地图
      </Link>
      {next ? (
        <Link
          href={next.route}
          className="text-[#8c7b6b] hover:text-[#5d4e37] transition-colors flex items-center gap-1 group"
        >
          {next.name}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

// Helper component to unwrap params Promise
function useParamsAsync<T>(promise: Promise<T>): T {
  return use(promise);
}
