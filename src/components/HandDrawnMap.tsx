"use client";

import { useState } from "react";
import { cities, City } from "@/data/cities";

export default function HandDrawnMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[720px] mx-auto px-2">
      {/* 地图图片 + SVG 标记叠加层 */}
      <div className="relative w-full">
        {/* 底图 — 已抠白底，RGBA 透明 PNG */}
        <img
          src="/footprint/photos/china-map.webp"
          alt="中国足迹地图"
          className="w-full h-auto"
          loading="eager"
        />

        {/* SVG 交互覆盖层 — viewBox 匹配图片比例 1448:1086 ≈ 1000:750 */}
        <svg
          viewBox="0 0 1000 750"
          className="absolute inset-0 w-full h-full"
          aria-label="足迹标记"
        >
          <defs>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {cities.map((city) => {
            const isHovered = hovered === city.slug;
            const dotOpacity = hovered === null ? 1 : isHovered ? 1 : 0.3;

            const cx = city.coordinates.x;
            const cy = city.coordinates.y;

            return (
              <g
                key={city.slug}
                style={{ opacity: dotOpacity, transition: "opacity 0.4s ease" }}
                onMouseEnter={() => setHovered(city.slug)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-default"
              >
                {/* 外圈微光 */}
                <circle
                  cx={`${cx}%`}
                  cy={`${cy}%`}
                  r={isHovered ? 16 : 9}
                  fill="none"
                  stroke="var(--color-film)"
                  strokeWidth="0.8"
                  opacity={isHovered ? 0.35 : 0}
                  style={{ transition: "all 0.35s ease" }}
                />

                {/* 标记点 */}
                <circle
                  cx={`${cx}%`}
                  cy={`${cy}%`}
                  r={isHovered ? 5.5 : 4}
                  fill="var(--color-film)"
                  filter="url(#softGlow)"
                  style={{ transition: "r 0.35s ease" }}
                />
              </g>
            );
          })}
        </svg>

        {/* Hover 浮层卡片 — 与 SVG 同一父容器，坐标对齐 */}
        {hovered && (
          <HoverCard
            city={cities.find((c) => c.slug === hovered)!}
            totalCities={cities.length}
          />
        )}
      </div>
    </div>
  );
}

function HoverCard({ city, totalCities }: { city: City; totalCities: number }) {
  // 智能定位：根据点在画面中的位置调整卡片偏移方向，避免溢出
  const { x, y } = city.coordinates;
  const isNearRight = x > 70;
  const isNearBottom = y > 75;
  const isNearTop = y < 15;

  const left = isNearRight
    ? `calc(${x}% - 180px)`   // 靠右时卡片出现在左侧
    : `calc(${x}% + 12px)`;
  const top = isNearBottom
    ? `calc(${y}% - 90px)`    // 靠下时卡片上移
    : isNearTop
    ? `calc(${y}% + 16px)`    // 靠上时卡片下移
    : `calc(${y}% - 55px)`;

  return (
    <div
      className="absolute z-20 pointer-events-none bg-warm/95 backdrop-blur-sm border border-oat rounded-lg p-3.5 shadow-lg min-w-[170px]"
      style={{ left, top }}
    >
      <div className="text-[10px] text-ink-muted mb-0.5">{city.date}</div>
      <div className="font-serif text-sm font-medium text-ink">
        {city.name}
      </div>
      <div className="flex gap-3 mt-1.5 text-[10px] text-ink-light">
        <span>💭 {city.feelings.length}</span>
        <span>🧠 {city.thoughts.length}</span>
      </div>
    </div>
  );
}
