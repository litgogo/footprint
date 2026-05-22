import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import CityDetailClient from "./CityDetailClient";

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
    <main className="min-h-screen max-w-2xl mx-auto">
      {/* 客户端交互区：顶部大图 + 筛选器 + 内容 */}
      <CityDetailClient city={city} />

      {/* 底部城市导航 */}
      <CityNavigation currentSlug={slug} />
    </main>
  );
}

// ============================================================
// 城市间导航
// ============================================================

import Link from "next/link";

function CityNavigation({ currentSlug }: { currentSlug: string }) {
  const currentIndex = cities.findIndex((c) => c.slug === currentSlug);
  const prev = currentIndex > 0 ? cities[currentIndex - 1] : null;
  const next =
    currentIndex < cities.length - 1 ? cities[currentIndex + 1] : null;

  return (
    <nav className="px-4 pt-8 pb-12 border-t border-oat flex justify-between items-center text-sm max-w-2xl mx-auto">
      {prev ? (
        <Link
          href={prev.route}
          className="text-ink-light hover:text-ink transition-colors flex items-center gap-1.5 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform text-xs">←</span>
          <span className="hidden sm:inline">{prev.name}</span>
        </Link>
      ) : (
        <span />
      )}
      <Link
        href="/"
        className="text-ink-muted hover:text-ink transition-colors text-xs tracking-wider"
      >
        足迹地图
      </Link>
      {next ? (
        <Link
          href={next.route}
          className="text-ink-light hover:text-ink transition-colors flex items-center gap-1.5 group"
        >
          <span className="hidden sm:inline">{next.name}</span>
          <span className="group-hover:translate-x-1 transition-transform text-xs">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
