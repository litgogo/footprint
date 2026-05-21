"use client";

import { useState } from "react";
import Link from "next/link";
import type { City } from "@/data/cities";
import CityFilter, { FilterTab } from "@/components/CityFilter";
import PolaroidFragment from "@/components/PolaroidFragment";
import BlockquoteFeeling from "@/components/BlockquoteFeeling";
import ThoughtSection from "@/components/ThoughtSection";

interface CityDetailClientProps {
  city: City;
}

export default function CityDetailClient({ city }: CityDetailClientProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("topics");

  const topicTags = city.topics.map((name) => ({
    name,
    count: city.fragments.length,
  }));

  return (
    <div>
      {/* ============================================ */}
      {/* 顶部大图 + 覆盖层                                */}
      {/* ============================================ */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        {city.photo ? (
          <img
            src={city.photo}
            alt={city.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#e8e0d5]" />
        )}
        {/* 暗色渐变 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />

        {/* ← 返回 */}
        <Link
          href="/"
          className="absolute top-4 left-4 text-white/90 hover:text-white transition-colors drop-shadow-md"
          aria-label="返回足迹地图"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>

        {/* 📌 图钉 */}
        <span className="absolute top-4 right-4 text-white/80 text-lg drop-shadow-sm">
          📌
        </span>

        {/* 城市名 + tagline — 左下 */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-[10px] tracking-[0.2em] opacity-70 mb-1">
            {city.date}
          </p>
          <h1 className="text-xl md:text-2xl font-serif font-light tracking-wider drop-shadow-sm">
            {city.name}
          </h1>
          <p className="text-xs opacity-70 mt-1 font-serif italic max-w-[280px] leading-relaxed">
            {city.tagline}
          </p>
        </div>
      </div>

      {/* ============================================ */}
      {/* 筛选器 + 收纳切面                                 */}
      {/* ============================================ */}
      <div className="px-4">
        <CityFilter
          activeTab={activeTab}
          onTabChange={setActiveTab}
          cityName={city.name}
          topics={topicTags}
          fragmentCount={city.fragments.length}
          feelingCount={city.feelings.length}
          thoughtCount={city.thoughts.length}
        />
      </div>

      {/* ============================================ */}
      {/* 内容区                                         */}
      {/* ============================================ */}
      <div className="px-4 mt-4">
        {activeTab === "topics" && (
          <PolaroidFragment fragments={city.fragments} />
        )}

        {activeTab === "people" && <PeopleList people={city.people} />}

        {activeTab === "daily" && (
          <DailyChronology
            fragments={city.fragments}
            feelings={city.feelings}
            thoughts={city.thoughts}
          />
        )}
      </div>
    </div>
  );
}

// ============================================================
// People 列表
// ============================================================

function PeopleList({ people }: { people: City["people"] }) {
  if (people.length === 0) {
    return (
      <div className="text-center py-16 text-[#a09080] text-sm">此城独行</div>
    );
  }
  return (
    <div className="pt-4 space-y-4">
      {people.map((person) => (
        <div
          key={person.id}
          className="p-5 bg-white border border-[#e0d6c5] rounded-xl"
        >
          <div className="flex items-baseline gap-3">
            <h3 className="text-base font-serif font-medium text-[#4a3728]">
              {person.name}
            </h3>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#fdf5f4] text-[#c75146] border border-[#f5d5d2]/40">
              {person.role}
            </span>
          </div>
          {person.note && (
            <p className="mt-2 text-sm text-[#6b5d4f] leading-relaxed font-serif italic">
              &ldquo;{person.note}&rdquo;
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Daily 时间流
// ============================================================

function DailyChronology({
  fragments,
  feelings,
  thoughts,
}: {
  fragments: City["fragments"];
  feelings: City["feelings"];
  thoughts: City["thoughts"];
}) {
  return (
    <div className="space-y-20 pt-2">
      <section>
        <h3 className="text-xs tracking-[0.2em] text-[#a09080] mb-4 font-sans">
          🧩 碎片 · 足迹
        </h3>
        <PolaroidFragment fragments={fragments} />
      </section>

      {feelings.length > 0 && (
        <section>
          <h3 className="text-xs tracking-[0.2em] text-[#a09080] mb-4 font-sans">
            💭 感受 · 回响
          </h3>
          <BlockquoteFeeling feelings={feelings} />
        </section>
      )}

      {thoughts.length > 0 && (
        <section>
          <h3 className="text-xs tracking-[0.2em] text-[#a09080] mb-4 font-sans">
            🧠 思考 · 沉淀
          </h3>
          <ThoughtSection thoughts={thoughts} />
        </section>
      )}
    </div>
  );
}
