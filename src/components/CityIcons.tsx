// 手绘风格城市 Icon — viewBox 0 0 100 100, 统一 stroke="#8c7b6b" fill="none"
// 每个 icon 捕捉城市的一个标志性意象

export function JinanYantaiIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 趵突泉三股水 */}
      <path
        d="M35 80 Q30 55 35 35 Q40 15 50 15 Q60 15 65 35 Q70 55 65 80"
        stroke="#8c7b6b"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 80 L45 40 Q45 30 50 25"
        stroke="#8c7b6b"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M55 80 L55 45 Q55 35 53 28"
        stroke="#8c7b6b"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* 水珠 */}
      <circle cx="40" cy="22" r="2" fill="#c75146" opacity="0.6" />
      <circle cx="58" cy="18" r="1.8" fill="#c75146" opacity="0.5" />
      <circle cx="50" cy="12" r="1.5" fill="#c75146" opacity="0.4" />
      {/* 池边 */}
      <ellipse cx="50" cy="82" rx="22" ry="4" stroke="#8c7b6b" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function KunmingIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 山茶花 */}
      {/* 外层花瓣 */}
      <path
        d="M50 20 Q38 30 40 45 M50 20 Q62 30 60 45 M30 35 Q25 50 35 60 M70 35 Q75 50 65 60 M40 55 Q50 75 50 65 M60 55 Q50 75 50 65"
        stroke="#8c7b6b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* 内层 */}
      <path
        d="M50 30 Q44 38 46 48 M50 30 Q56 38 54 48 M42 42 Q38 50 44 55 M58 42 Q62 50 56 55"
        stroke="#c75146"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* 花蕊 */}
      <circle cx="50" cy="50" r="3" fill="#c75146" opacity="0.5" />
      {/* 茎 + 叶 */}
      <path d="M50 65 Q50 78 50 90" stroke="#8c7b6b" strokeWidth="1" strokeLinecap="round" />
      <path d="M50 75 Q40 72 32 78" stroke="#8c7b6b" strokeWidth="1" strokeLinecap="round" />
      <path d="M50 78 Q60 74 68 80" stroke="#8c7b6b" strokeWidth="1" strokeLinecap="round" />
      {/* 花瓣水滴 */}
      <circle cx="38" cy="42" r="1.2" fill="#c75146" opacity="0.3" />
      <circle cx="62" cy="42" r="1.2" fill="#c75146" opacity="0.3" />
    </svg>
  );
}

export function DaliIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 苍山剪影 */}
      <path
        d="M8 65 L20 40 L28 50 L38 25 L48 45 L58 30 L68 48 L78 28 L88 42 L95 30 L95 65 Z"
        fill="#f0ebe0"
        stroke="#8c7b6b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* 崇圣寺三塔 */}
      {/* 中塔 */}
      <rect x="44" y="58" width="8" height="16" rx="1" stroke="#8c7b6b" strokeWidth="1.2" fill="none" />
      <path d="M44 58 Q48 52 52 58" stroke="#8c7b6b" strokeWidth="1" fill="none" />
      {/* 左塔 */}
      <rect x="32" y="62" width="6" height="12" rx="1" stroke="#8c7b6b" strokeWidth="1" fill="none" />
      <path d="M32 62 Q35 57 38 62" stroke="#8c7b6b" strokeWidth="0.8" fill="none" />
      {/* 右塔 */}
      <rect x="58" y="62" width="6" height="12" rx="1" stroke="#8c7b6b" strokeWidth="1" fill="none" />
      <path d="M58 62 Q61 57 64 62" stroke="#8c7b6b" strokeWidth="0.8" fill="none" />
      {/* 洱海水面 */}
      <path d="M10 78 Q30 74 50 76 Q70 78 90 75" stroke="#8c7b6b" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M15 82 Q35 80 55 82 Q75 84 90 81" stroke="#8c7b6b" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function QuanzhouIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 开元寺飞檐 + 帆船意象 */}
      {/* 塔身 */}
      <rect x="42" y="25" width="10" height="45" rx="1" stroke="#8c7b6b" strokeWidth="1.5" fill="none" />
      {/* 飞檐层叠 */}
      <path d="M36 30 L58 30" stroke="#8c7b6b" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M34 38 L60 38" stroke="#8c7b6b" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M32 46 L62 46" stroke="#8c7b6b" strokeWidth="1.3" strokeLinecap="round" />
      {/* 塔尖 */}
      <path d="M47 18 L44 25 L50 25 Z" stroke="#8c7b6b" strokeWidth="1" fill="none" />
      {/* 帆船 — 海上丝路 */}
      <path d="M65 55 L65 85" stroke="#8c7b6b" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M65 58 L78 70 L65 82" stroke="#8c7b6b" strokeWidth="1.2" strokeLinejoin="round" fill="#fdf5f4" opacity="0.6" />
      {/* 海浪 */}
      <path d="M55 88 Q60 84 65 86 Q70 88 75 84" stroke="#c75146" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M60 92 Q65 89 70 91" stroke="#c75146" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function HongKongIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 天星小轮剪影 */}
      {/* 船体 */}
      <path d="M15 62 L20 55 L80 55 L85 62 Z" stroke="#8c7b6b" strokeWidth="1.6" strokeLinejoin="round" fill="#f0ebe0" />
      {/* 甲板线 */}
      <path d="M22 55 L78 55" stroke="#8c7b6b" strokeWidth="1.2" />
      {/* 烟囱 */}
      <rect x="30" y="42" width="8" height="13" rx="1" stroke="#8c7b6b" strokeWidth="1.2" fill="none" />
      <rect x="55" y="42" width="8" height="13" rx="1" stroke="#8c7b6b" strokeWidth="1.2" fill="none" />
      {/* 烟 */}
      <circle cx="34" cy="38" r="2.5" fill="none" stroke="#8c7b6b" strokeWidth="0.8" opacity="0.5" />
      <circle cx="38" cy="34" r="2" fill="none" stroke="#8c7b6b" strokeWidth="0.6" opacity="0.3" />
      <circle cx="59" cy="38" r="2.5" fill="none" stroke="#8c7b6b" strokeWidth="0.8" opacity="0.5" />
      {/* 摩天轮 */}
      <circle cx="72" cy="38" r="12" stroke="#c75146" strokeWidth="1.2" fill="none" opacity="0.7" />
      <line x1="72" y1="26" x2="72" y2="50" stroke="#c75146" strokeWidth="0.6" opacity="0.4" />
      <line x1="60" y1="38" x2="84" y2="38" stroke="#c75146" strokeWidth="0.6" opacity="0.4" />
      {/* 维港波浪 */}
      <path d="M12 70 Q20 67 28 70 Q36 73 44 70 Q52 67 60 70 Q68 73 76 70 Q84 67 90 70" stroke="#8c7b6b" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

// 图标映射
import { ReactNode } from "react";

export const cityIconMap: Record<string, () => ReactNode> = {
  "jinan-yantai": JinanYantaiIcon,
  kunming: KunmingIcon,
  dali: DaliIcon,
  quanzhou: QuanzhouIcon,
  hongkong: HongKongIcon,
};
