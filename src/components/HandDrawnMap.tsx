"use client";

import { useState } from "react";
import { cities, City } from "@/data/cities";
import Link from "next/link";

// 简化手绘风格中国地图轮廓 (viewBox 1000x900)
const CHINA_OUTLINE =
  "M 340,75 L 375,55 L 420,48 L 510,42 L 590,44 L 710,50 L 745,60 " +
  "L 760,80 L 730,110 L 715,140 L 700,155 L 690,170 L 675,195 " +
  "L 665,220 L 660,255 L 668,290 L 665,325 L 655,355 L 635,380 " +
  "L 590,375 L 550,370 L 510,365 L 465,350 L 430,340 L 395,320 " +
  "L 355,310 L 315,290 L 270,270 L 230,250 L 200,225 " +
  "L 210,190 L 230,165 L 260,150 L 290,130 L 310,110 Z";

// 台湾简易轮廓
const TAIWAN_OUTLINE = "M 695,370 L 700,355 L 708,360 L 715,375 L 705,390 L 692,385 Z";

// 海南简易轮廓
const HAINAN_OUTLINE = "M 590,430 L 600,425 L 610,435 L 605,450 L 592,448 Z";

export default function HandDrawnMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const isCityVisible = (city: City) =>
    hoveredCity === null || hoveredCity === city.slug;

  return (
    <div className="relative w-full max-w-[800px] mx-auto">
      <svg
        viewBox="0 0 1000 900"
        className="w-full h-auto"
        aria-label="足迹地图 - 中国"
        style={{ filter: "url(#handDrawn)" }}
      >
        <defs>
          {/* 手绘风格滤镜 */}
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
              scale="1.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* 标记点发光 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 标记点阴影 */}
          <filter id="markerShadow">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#5d4e37" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 底色 */}
        <rect x="0" y="0" width="1000" height="900" fill="transparent" />

        {/* 中国大陆轮廓 */}
        <path
          d={CHINA_OUTLINE}
          fill="#e8e0d5"
          stroke="#5d4e37"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="transition-colors duration-500"
        />

        {/* 轮廓加强线 — 手绘感第二笔 */}
        <path
          d={CHINA_OUTLINE}
          fill="none"
          stroke="#5d4e37"
          strokeWidth="0.6"
          strokeLinejoin="round"
          opacity="0.4"
          style={{ filter: "url(#handDrawn)" }}
        />

        {/* 台湾 */}
        <path
          d={TAIWAN_OUTLINE}
          fill="#e8e0d5"
          stroke="#5d4e37"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* 海南 */}
        <path
          d={HAINAN_OUTLINE}
          fill="#e8e0d5"
          stroke="#5d4e37"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* 城市标记点 */}
        {cities.map((city) => {
          const isActive = activeCity === city.slug;
          const isHovered = hoveredCity === city.slug;
          const visible = isCityVisible(city);
          const scale = isActive || isHovered ? 2 : 1;
          const opacity = visible ? 1 : 0.3;

          return (
            <g
              key={city.slug}
              style={{ opacity, transition: "opacity 0.3s ease" }}
              onMouseEnter={() => setHoveredCity(city.slug)}
              onMouseLeave={() => setHoveredCity(null)}
              onClick={() => setActiveCity(isActive ? null : city.slug)}
              className="cursor-pointer"
            >
              {/* 外圈光晕 (脉冲动画) */}
              <circle
                cx={`${city.coordinates.x}%`}
                cy={`${city.coordinates.y}%`}
                r={isActive ? 20 : 12}
                fill="none"
                stroke="#c75146"
                strokeWidth="1"
                opacity={isActive ? 0.3 : isHovered ? 0.5 : 0}
                className={!isActive ? "animate-ping" : ""}
                style={{ animationDuration: "2.5s" }}
              />

              {/* 实心标记点 */}
              <circle
                cx={`${city.coordinates.x}%`}
                cy={`${city.coordinates.y}%`}
                r={5}
                fill="#c75146"
                filter="url(#markerShadow)"
                style={{
                  transformOrigin: `${city.coordinates.x}% ${city.coordinates.y}%`,
                  transform: `scale(${scale})`,
                  transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              />

              {/* Hover/Active 城市名标签 */}
              {(isHovered || isActive) && (
                <g className="pointer-events-none">
                  <text
                    x={`${city.coordinates.x}%`}
                    y={`${city.coordinates.y - 5}%`}
                    textAnchor="middle"
                    dominantBaseline="alphabetic"
                    fill="#5d4e37"
                    fontSize="13"
                    fontWeight="500"
                    style={{
                      fontFamily: "'Noto Serif SC', 'Source Han Serif SC', serif",
                    }}
                  >
                    {city.name}
                  </text>
                  {/* 下划线装饰 */}
                  <line
                    x1={`${city.coordinates.x - 8}%`}
                    y1={`${city.coordinates.y - 2}%`}
                    x2={`${city.coordinates.x + 8}%`}
                    y2={`${city.coordinates.y - 2}%`}
                    stroke="#c75146"
                    strokeWidth="0.6"
                    opacity="0.5"
                  />
                </g>
              )}

              {/* 连线 (仅 active 时连接所有城市) */}
              {isActive && (
                <circle
                  cx={`${city.coordinates.x}%`}
                  cy={`${city.coordinates.y}%`}
                  r={6}
                  fill="none"
                  stroke="#c75146"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* 底部已访问城市网格 */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={city.route}
            className="group"
            onMouseEnter={() => setHoveredCity(city.slug)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <div
              className={`
                p-4 rounded-lg border transition-all duration-300
                ${hoveredCity === city.slug
                  ? "border-[#c75146] bg-[#fdf5f4] shadow-md -translate-y-1"
                  : "border-[#d4c9b8] bg-white hover:shadow-sm"
                }
              `}
            >
              <div className="text-xs text-[#8c7b6b] mb-1">{city.date}</div>
              <div className="font-serif text-[#5d4e37] font-medium">{city.name}</div>
              <div className="text-xs text-[#a09080] mt-1 line-clamp-2 leading-relaxed">
                {city.tagline}
              </div>
              {city.companion && (
                <div className="text-[10px] text-[#c75146] mt-2 inline-block px-2 py-0.5 rounded-full bg-[#fdf5f4]">
                  {city.companion}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 自定义动画样式 */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
