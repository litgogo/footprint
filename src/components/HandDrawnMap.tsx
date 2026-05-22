"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cities, City } from "@/data/cities";

export default function HandDrawnMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[720px] mx-auto px-2">
      {/* 地图图片 + SVG 标记叠加层 */}
      <div className="relative w-full">
        {/* 底图 */}
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

            // 坐标适配：原 coords 基于 900 高，映射到 750 高
            const cx = city.coordinates.x;
            const cy = (city.coordinates.y * 750) / 900;

            return (
              <g
                key={city.slug}
                style={{ opacity: dotOpacity, transition: "opacity 0.4s ease" }}
                onMouseEnter={() => setHovered(city.slug)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(city.route)}
                className="cursor-pointer"
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
      </div>

      {/* Hover 浮层卡片 */}
      {hovered && (
        <HoverCard city={cities.find((c) => c.slug === hovered)!} />
      )}
    </div>
  );
}

function HoverCard({ city }: { city: City }) {
  const cy = (city.coordinates.y * 750) / 900;
  return (
    <div
      className="absolute z-20 pointer-events-none bg-warm/95 backdrop-blur-sm border border-oat rounded-lg p-3.5 shadow-lg min-w-[170px]"
      style={{
        left: `calc(${city.coordinates.x}% + 10px)`,
        top: `calc(${cy}% - 55px)`,
      }}
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
