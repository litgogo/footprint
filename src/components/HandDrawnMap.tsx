"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cities, City } from "@/data/cities";

// 简化手绘风格中国地图轮廓 (viewBox 1000x900)
const CHINA_OUTLINE =
  "M 340,75 L 375,55 L 420,48 L 510,42 L 590,44 L 710,50 L 745,60 " +
  "L 760,80 L 730,110 L 715,140 L 700,155 L 690,170 L 675,195 " +
  "L 665,220 L 660,255 L 668,290 L 665,325 L 655,355 L 635,380 " +
  "L 590,375 L 550,370 L 510,365 L 465,350 L 430,340 L 395,320 " +
  "L 355,310 L 315,290 L 270,270 L 230,250 L 200,225 " +
  "L 210,190 L 230,165 L 260,150 L 290,130 L 310,110 Z";

const TAIWAN_OUTLINE =
  "M 695,370 L 700,355 L 708,360 L 715,375 L 705,390 L 692,385 Z";

const HAINAN_OUTLINE =
  "M 590,430 L 600,425 L 610,435 L 605,450 L 592,448 Z";

export default function HandDrawnMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[720px] mx-auto px-2">
      {/* SVG 地图 */}
      <svg
        viewBox="0 0 1000 900"
        className="w-full h-auto"
        aria-label="足迹地图 — 中国"
      >
        <defs>
          {/* 手绘滤镜 */}
          <filter id="handDrawn" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* 微光滤镜 */}
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 底色 */}
        <rect width="1000" height="900" fill="transparent" />

        {/* 大陆轮廓 */}
        <path
          d={CHINA_OUTLINE}
          fill="#f0ebe0"
          stroke="#8c7b6b"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ filter: "url(#handDrawn)" }}
        />

        {/* 台湾 */}
        <path
          d={TAIWAN_OUTLINE}
          fill="#f0ebe0"
          stroke="#8c7b6b"
          strokeWidth="1.4"
          strokeLinejoin="round"
          style={{ filter: "url(#handDrawn)" }}
        />

        {/* 海南 */}
        <path
          d={HAINAN_OUTLINE}
          fill="#f0ebe0"
          stroke="#8c7b6b"
          strokeWidth="1.2"
          strokeLinejoin="round"
          style={{ filter: "url(#handDrawn)" }}
        />

        {/* 城市标记点 */}
        {cities.map((city) => {
          const isHovered = hovered === city.slug;
          const dotOpacity = hovered === null ? 1 : isHovered ? 1 : 0.25;

          return (
            <g
              key={city.slug}
              style={{ opacity: dotOpacity, transition: "opacity 0.4s ease" }}
              onMouseEnter={() => setHovered(city.slug)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => router.push(city.route)}
              className="cursor-pointer"
            >
              {/* 外圈微光 (hover 时可见) */}
              <circle
                cx={`${city.coordinates.x}%`}
                cy={`${city.coordinates.y}%`}
                r={isHovered ? 14 : 8}
                fill="none"
                stroke="#c75146"
                strokeWidth="0.8"
                opacity={isHovered ? 0.3 : 0}
                style={{ transition: "all 0.35s ease" }}
              />

              {/* 实心标记点 */}
              <circle
                cx={`${city.coordinates.x}%`}
                cy={`${city.coordinates.y}%`}
                r={isHovered ? 5 : 3.5}
                fill="#c75146"
                filter="url(#softGlow)"
                style={{ transition: "r 0.35s ease" }}
              />
            </g>
          );
        })}
      </svg>

      {/* Hover 浮层卡片 */}
      {hovered && (
        <HoverCard city={cities.find((c) => c.slug === hovered)!} />
      )}
    </div>
  );
}

function HoverCard({ city }: { city: City }) {
  return (
    <div
      className="absolute z-20 pointer-events-none bg-white/95 backdrop-blur-sm border border-[#e0d6c5] rounded-lg p-4 shadow-lg min-w-[180px]"
      style={{
        left: `calc(${city.coordinates.x}% + 12px)`,
        top: `calc(${city.coordinates.y}% - 60px)`,
        transform: "translateX(0)",
      }}
    >
      <div className="text-xs text-[#a09080] mb-1">{city.date}</div>
      <div className="font-serif text-sm font-medium text-[#4a3728]">
        {city.name}
      </div>
      <div className="flex gap-3 mt-2 text-[10px] text-[#8c7b6b]">
        <span>🧩 {city.fragments.length} 碎片</span>
        <span>💭 {city.feelings.length} 感受</span>
        <span>🧠 {city.thoughts.length} 思考</span>
      </div>
    </div>
  );
}
