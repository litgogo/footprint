"use client";

import type { City } from "@/data/cities";
import Link from "next/link";

export default function CityDetailClient({ city }: { city: City }) {
  // 将 feelings 和 thoughts 合并为随笔碎片流
  const fragments: { type: "feeling" | "thought"; id: string; content: React.ReactNode }[] = [];

  city.feelings.forEach((f) => {
    fragments.push({
      type: "feeling",
      id: f.id,
      content: (
        <>
          <p className="text-lg md:text-xl font-serif font-light text-ink leading-relaxed tracking-wide">
            {f.quote}
          </p>
          {f.context && (
            <p className="mt-2 text-xs text-ink-muted tracking-wider font-sans">
              — {f.context}
            </p>
          )}
        </>
      ),
    });
  });

  city.thoughts.forEach((t) => {
    // 提炼：取标题 + 正文首句
    const firstSentence = t.body.split(/[。.\\n]/)[0];
    fragments.push({
      type: "thought",
      id: t.id,
      content: (
        <>
          <h3 className="text-sm font-sans font-medium text-film tracking-widest mb-3">
            {t.title}
          </h3>
          <p className="text-base font-serif font-light text-ink leading-relaxed">
            {firstSentence}
            {firstSentence.length < t.body.length ? "…" : ""}
          </p>
        </>
      ),
    });
  });

  // 交错排列：feeling → thought → feeling → thought ...
  const sorted: typeof fragments = [];
  const feelings = fragments.filter((f) => f.type === "feeling");
  const thoughts = fragments.filter((f) => f.type === "thought");
  const maxLen = Math.max(feelings.length, thoughts.length);
  for (let i = 0; i < maxLen; i++) {
    if (feelings[i]) sorted.push(feelings[i]);
    if (thoughts[i]) sorted.push(thoughts[i]);
  }

  return (
    <main className="min-h-screen py-20 md:py-28 px-4 max-w-2xl mx-auto">
      {/* 返回 */}
      <Link
        href="/journal"
        className="inline-flex items-center gap-1.5 text-xs tracking-widest text-ink-muted hover:text-film transition-colors mb-16 font-sans"
      >
        <span className="text-film/60">←</span>
        旅行故事
      </Link>

      {/* 城市头部 */}
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          {city.name}
          <span className="text-film/50 mx-2">·</span>
          <span className="text-ink-light font-light">{city.vibe}</span>
        </h1>
        <div className="flex items-center gap-4 mt-3">
          <p className="text-xs tracking-[0.15em] text-ink-muted font-sans">
            {city.date}
          </p>
          {city.companion && (
            <p className="text-xs tracking-wider text-ink-muted/70 font-sans">
              with {city.companion}
            </p>
          )}
        </div>
        {/* 关键词 */}
        <div className="flex flex-wrap gap-2 mt-5">
          {city.keywords.map((kw) => (
            <span
              key={kw}
              className="text-[10px] tracking-wider px-2.5 py-1 rounded-full bg-oat/30 text-ink-muted font-sans"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* 随笔碎片流 */}
      <div className="space-y-16">
        {sorted.map((frag, idx) => (
          <div key={frag.id} className="relative">
            {/* 装饰圆点 */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  frag.type === "feeling" ? "bg-film/50" : "bg-ink-muted/30"
                }`}
              />
              <span className="text-[10px] tracking-[0.2em] text-ink-muted/40 font-sans uppercase">
                {frag.type === "feeling" ? "感受" : "思考"}
              </span>
            </div>

            <div
              className={`${
                frag.type === "feeling"
                  ? "border-l-2 border-film/20 pl-5"
                  : "pl-5"
              }`}
            >
              {frag.content}
            </div>

            {/* 分隔线（最后一项不显示） */}
            {idx < sorted.length - 1 && (
              <div className="mt-16 flex justify-center">
                <span className="block w-px h-8 bg-oat/30" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 底部 */}
      <div className="mt-24 text-center">
        <span className="text-[10px] tracking-[0.3em] text-ink-muted/50 font-sans">
          {city.name} · {city.date}
        </span>
      </div>
    </main>
  );
}
