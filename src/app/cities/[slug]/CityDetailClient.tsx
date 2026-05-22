"use client";

import { useState } from "react";
import type { City } from "@/data/cities";
import Link from "next/link";

type Tab = "notes" | "feelings" | "thoughts";

// ---- 简易 Markdown 渲染 ----
function renderMarkdown(text: string): React.ReactNode {
  const sections = text.split(/(?=^## )/m);

  return sections.map((section, si) => {
    const lines = section.trim().split("\n");
    const elements: React.ReactNode[] = [];

    lines.forEach((line, i) => {
      // H2 header
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={`${si}-h2-${i}`}
            className="text-lg font-serif font-medium text-ink mt-10 mb-4 first:mt-0 tracking-wide"
          >
            {line.replace("## ", "")}
          </h2>
        );
        return;
      }

      // H3 header
      if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={`${si}-h3-${i}`}
            className="text-base font-serif font-medium text-ink mt-8 mb-3 tracking-wide"
          >
            {line.replace("### ", "")}
          </h3>
        );
        return;
      }

      // Blockquote
      if (line.startsWith("> ")) {
        elements.push(
          <blockquote
            key={`${si}-bq-${i}`}
            className="border-l-2 border-film/40 pl-4 my-3 text-ink-light italic font-serif leading-relaxed"
          >
            {parseInline(line.replace(/^> ?/, ""))}
          </blockquote>
        );
        return;
      }

      // Horizontal rule
      if (line.trim() === "---") {
        elements.push(
          <hr
            key={`${si}-hr-${i}`}
            className="my-8 border-oat/40"
          />
        );
        return;
      }

      // Bold list items
      if (line.startsWith("**") && line.includes("**")) {
        elements.push(
          <p
            key={`${si}-p-${i}`}
            className="text-sm text-ink-light leading-relaxed mt-2 font-medium"
          >
            {parseInline(line)}
          </p>
        );
        return;
      }

      // Empty line
      if (line.trim() === "") {
        elements.push(<div key={`${si}-sp-${i}`} className="h-3" />);
        return;
      }

      // Regular paragraph
      elements.push(
        <p
          key={`${si}-p-${i}`}
          className="text-sm text-ink-light leading-loose"
        >
          {parseInline(line)}
        </p>
      );
    });

    return <div key={si}>{elements}</div>;
  });
}

function parseInline(text: string): React.ReactNode {
  // Bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// ---- 主组件 ----
export default function CityDetailClient({ city }: { city: City }) {
  const [tab, setTab] = useState<Tab>("notes");

  const tabs: { key: Tab; label: string }[] = [
    { key: "notes", label: "笔记" },
    { key: "feelings", label: "感受" },
    { key: "thoughts", label: "思考" },
  ];

  return (
    <main className="min-h-screen py-20 md:py-28 px-4 max-w-3xl mx-auto">
      {/* 返回链接 */}
      <Link
        href="/journal"
        className="inline-flex items-center gap-1.5 text-xs tracking-widest text-ink-muted hover:text-film transition-colors mb-12 font-sans"
      >
        <span className="text-film/60">←</span>
        旅行故事
      </Link>

      {/* 城市头部 */}
      <div className="mb-12">
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

      {/* Tab 切换 */}
      <div className="flex gap-8 border-b border-oat/50 mb-10">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-3 text-sm tracking-widest font-sans transition-colors duration-300 border-b-2 -mb-[1px] ${
              tab === t.key
                ? "text-film border-film"
                : "text-ink-muted border-transparent hover:text-ink-light"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 内容区 */}
      <div className="min-h-[40vh]">
        {/* 笔记 */}
        {tab === "notes" && (
          <div className="prose-custom">{renderMarkdown(city.notes)}</div>
        )}

        {/* 感受 */}
        {tab === "feelings" && (
          <div className="space-y-8">
            {city.feelings.map((f) => (
              <div key={f.id} className="group">
                <blockquote className="border-l-2 border-film/30 pl-5 py-1">
                  <p className="text-base md:text-lg font-serif font-light text-ink leading-relaxed">
                    「{f.quote}」
                  </p>
                </blockquote>
                {f.context && (
                  <p className="mt-2 ml-5 text-xs text-ink-muted tracking-wide font-sans">
                    {f.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 思考 */}
        {tab === "thoughts" && (
          <div className="space-y-10">
            {city.thoughts.map((t) => (
              <div key={t.id}>
                <h3 className="text-base font-serif font-medium text-ink mb-4 tracking-wide">
                  {t.title}
                </h3>
                <div className="text-sm text-ink-light leading-loose space-y-3">
                  {t.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
