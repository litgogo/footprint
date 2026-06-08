"use client";

import { useState, useRef, useCallback } from "react";
import { cities, City } from "@/data/cities";

export default function HandDrawnMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [cardPos, setCardPos] = useState<{ left: number; top: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback((slug: string, x: number, y: number) => {
    setHovered(slug);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // 用图片容器实际像素计算点位
    const left = (x / 100) * rect.width + 12;
    const top = (y / 100) * rect.height - 60;
    // 智能避让边缘
    const cardW = 180;
    const cardH = 90;
    setCardPos({
      left: left + cardW > rect.width ? left - cardW - 12 : left,
      top: top < 0 ? top + cardH + 20 : top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
    setCardPos(null);
  }, []);

  const hoveredCity = hovered ? cities.find((c) => c.slug === hovered) : null;

  return (
    <div className="relative w-full max-w-[720px] mx-auto px-2">
      <div ref={containerRef} className="relative w-full">
        <img
          src="/footprint/photos/china-map.webp"
          alt="中国足迹地图"
          className="w-full h-auto"
          loading="eager"
        />

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
            const active = hovered === city.slug;
            const dimmed = hovered !== null && !active;
            const cx = city.coordinates.x;
            const cy = city.coordinates.y;

            return (
              <g
                key={city.slug}
                style={{ opacity: dimmed ? 0.25 : 1, transition: "opacity 0.4s ease" }}
                onMouseEnter={() => handleMouseEnter(city.slug, cx, cy)}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer"
              >
                <circle
                  cx={`${cx}%`}
                  cy={`${cy}%`}
                  r={active ? 16 : 8}
                  fill="none"
                  stroke="var(--color-film)"
                  strokeWidth="0.8"
                  opacity={active ? 0.35 : 0}
                  style={{ transition: "all 0.35s ease" }}
                />
                <circle
                  cx={`${cx}%`}
                  cy={`${cy}%`}
                  r={active ? 5 : 3.5}
                  fill="var(--color-film)"
                  filter="url(#softGlow)"
                  style={{ transition: "r 0.35s ease" }}
                />
              </g>
            );
          })}
        </svg>

        {hoveredCity && cardPos && (
          <div
            className="absolute z-20 pointer-events-none bg-warm/95 backdrop-blur-sm border border-oat rounded-lg p-3.5 shadow-lg"
            style={{ left: cardPos.left, top: cardPos.top }}
          >
            <div className="text-[10px] text-ink-muted mb-0.5">
              {hoveredCity.date}
            </div>
            <div className="font-serif text-sm font-medium text-ink whitespace-nowrap">
              {hoveredCity.name}
            </div>
            <div className="flex gap-3 mt-1.5 text-[10px] text-ink-light">
              <span>💭 {hoveredCity.feelings.length}</span>
              <span>🧠 {hoveredCity.thoughts.length}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
