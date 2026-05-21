"use client";

import { useState } from "react";
import Link from "next/link";
import type { City } from "@/data/cities";
import CityFilter, { FilterTab } from "@/components/CityFilter";
import CityNotes from "@/components/CityNotes";
import BlockquoteFeeling from "@/components/BlockquoteFeeling";
import ThoughtSection from "@/components/ThoughtSection";

interface CityDetailClientProps {
  city: City;
}

export default function CityDetailClient({ city }: CityDetailClientProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("notes");

  return (
    <div>
      {/* ============================================ */}
      {/* 顶部大图 + 覆盖层                                */}
      {/* ============================================ */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden">
        {city.photo ? (
          <img
            src={`/footprint${city.photo}`}
            alt={city.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#e8e0d5]" />
        )}
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

        {/* 📌 */}
        <span className="absolute top-4 right-4 text-white/80 text-lg drop-shadow-sm">
          📌
        </span>

        {/* 城市名 + tagline */}
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
      {/* 三 Tab 筛选器                                   */}
      {/* ============================================ */}
      <div className="px-4">
        <CityFilter
          activeTab={activeTab}
          onTabChange={setActiveTab}
          feelingCount={city.feelings.length}
          thoughtCount={city.thoughts.length}
        />
      </div>

      {/* ============================================ */}
      {/* 内容区                                         */}
      {/* ============================================ */}
      <div className="px-4 mt-4">
        {activeTab === "notes" && <CityNotes notes={city.notes} />}

        {activeTab === "feelings" && (
          <BlockquoteFeeling feelings={city.feelings} />
        )}

        {activeTab === "thoughts" && (
          <ThoughtSection thoughts={city.thoughts} />
        )}
      </div>
    </div>
  );
}
