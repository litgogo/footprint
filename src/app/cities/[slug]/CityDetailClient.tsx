"use client";

import { useState } from "react";
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

  return (
    <div>
      {/* 筛选器 */}
      <CityFilter
        activeTab={activeTab}
        onTabChange={setActiveTab}
        topics={city.topics}
        peopleCount={city.people.length}
      />

      {/* 内容区 */}
      <div className="mt-6">
        {activeTab === "topics" && (
          <PolaroidFragment fragments={city.fragments} />
        )}

        {activeTab === "people" && (
          <PeopleList people={city.people} />
        )}

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
      <div className="text-center py-16 text-[#a09080] text-sm">
        此城独行
      </div>
    );
  }

  return (
    <div className="pt-6 space-y-6 max-w-2xl mx-auto">
      {people.map((person) => (
        <div
          key={person.id}
          className="p-6 bg-white border border-[#e0d6c5] rounded-xl transition-all duration-300 hover:shadow-md"
        >
          <div className="flex items-baseline gap-3">
            <h3 className="text-lg font-serif font-medium text-[#4a3728]">
              {person.name}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#fdf5f4] text-[#c75146] border border-[#f5d5d2]/40">
              {person.role}
            </span>
          </div>
          {person.note && (
            <p className="mt-3 text-sm text-[#6b5d4f] leading-relaxed font-serif italic">
              &ldquo;{person.note}&rdquo;
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Daily 时间流：碎片 → 感受 → 思考，一页到底
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
    <div className="space-y-24 pt-4">
      {/* 碎片区 */}
      <section>
        <h3 className="text-xs tracking-[0.3em] text-[#a09080] mb-6 font-sans">
          🧩 碎片 · 足迹
        </h3>
        <PolaroidFragment fragments={fragments} />
      </section>

      {/* 感受区 */}
      {feelings.length > 0 && (
        <section>
          <h3 className="text-xs tracking-[0.3em] text-[#a09080] mb-6 font-sans">
            💭 感受 · 回响
          </h3>
          <BlockquoteFeeling feelings={feelings} />
        </section>
      )}

      {/* 思考区 */}
      {thoughts.length > 0 && (
        <section>
          <h3 className="text-xs tracking-[0.3em] text-[#a09080] mb-6 font-sans">
            🧠 思考 · 沉淀
          </h3>
          <ThoughtSection thoughts={thoughts} />
        </section>
      )}
    </div>
  );
}
