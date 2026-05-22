// 手绘风格城市 Icon — viewBox 0 0 100 100
// 统一 stroke="var(--color-ink-light)" fill="none"，暖色点缀用 var(--color-film)

import { ReactNode } from "react";

// ---- 已上线 5 城 ----

export function JinanYantaiIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M35 80 Q30 55 35 35 Q40 15 50 15 Q60 15 65 35 Q70 55 65 80" stroke="var(--color-ink-light)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M45 80 L45 40 Q45 30 50 25" stroke="var(--color-ink-light)" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M55 80 L55 45 Q55 35 53 28" stroke="var(--color-ink-light)" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="40" cy="22" r="2" fill="var(--color-film)" opacity="0.6"/>
      <circle cx="58" cy="18" r="1.8" fill="var(--color-film)" opacity="0.5"/>
      <ellipse cx="50" cy="82" rx="22" ry="4" stroke="var(--color-ink-light)" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function KunmingIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M50 20 Q38 30 40 45 M50 20 Q62 30 60 45 M30 35 Q25 50 35 60 M70 35 Q75 50 65 60 M40 55 Q50 75 50 65 M60 55 Q50 75 50 65" stroke="var(--color-ink-light)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 30 Q44 38 46 48 M50 30 Q56 38 54 48 M42 42 Q38 50 44 55 M58 42 Q62 50 56 55" stroke="var(--color-film)" strokeWidth="1.1" strokeLinecap="round" opacity="0.7"/>
      <circle cx="50" cy="50" r="3" fill="var(--color-film)" opacity="0.5"/>
      <path d="M50 65 Q50 78 50 90" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M50 75 Q40 72 32 78" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M50 78 Q60 74 68 80" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

export function DaliIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M8 65 L20 40 L28 50 L38 25 L48 45 L58 30 L68 48 L78 28 L88 42 L95 30 L95 65 Z" fill="var(--color-oat)" stroke="var(--color-ink-light)" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="44" y="58" width="8" height="16" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <path d="M44 58 Q48 52 52 58" stroke="var(--color-ink-light)" strokeWidth="1" fill="none"/>
      <rect x="32" y="62" width="6" height="12" rx="1" stroke="var(--color-ink-light)" strokeWidth="1" fill="none"/>
      <rect x="58" y="62" width="6" height="12" rx="1" stroke="var(--color-ink-light)" strokeWidth="1" fill="none"/>
      <path d="M10 78 Q30 74 50 76 Q70 78 90 75" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function QuanzhouIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <rect x="42" y="25" width="10" height="45" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.5" fill="none"/>
      <path d="M36 30 L58 30 M34 38 L60 38 M32 46 L62 46" stroke="var(--color-ink-light)" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M47 18 L44 25 L50 25 Z" stroke="var(--color-ink-light)" strokeWidth="1" fill="none"/>
      <path d="M65 55 L65 85" stroke="var(--color-ink-light)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M65 58 L78 70 L65 82" stroke="var(--color-ink-light)" strokeWidth="1.2" strokeLinejoin="round" fill="var(--color-film) / 0.1" opacity="0.6"/>
      <path d="M55 88 Q60 84 65 86 Q70 88 75 84" stroke="var(--color-film)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function HongKongIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <path d="M15 62 L20 55 L80 55 L85 62 Z" stroke="var(--color-ink-light)" strokeWidth="1.6" strokeLinejoin="round" fill="var(--color-oat)"/>
      <path d="M22 55 L78 55" stroke="var(--color-ink-light)" strokeWidth="1.2"/>
      <rect x="30" y="42" width="8" height="13" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <rect x="55" y="42" width="8" height="13" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <circle cx="34" cy="38" r="2.5" fill="none" stroke="var(--color-ink-light)" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="38" cy="34" r="2" fill="none" stroke="var(--color-ink-light)" strokeWidth="0.6" opacity="0.3"/>
      <circle cx="72" cy="38" r="12" stroke="var(--color-film)" strokeWidth="1.2" fill="none" opacity="0.7"/>
      <line x1="72" y1="26" x2="72" y2="50" stroke="var(--color-film)" strokeWidth="0.6" opacity="0.4"/>
      <line x1="60" y1="38" x2="84" y2="38" stroke="var(--color-film)" strokeWidth="0.6" opacity="0.4"/>
      <path d="M12 70 Q20 67 28 70 Q36 73 44 70 Q52 67 60 70 Q68 73 76 70 Q84 67 90 70" stroke="var(--color-ink-light)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

// ---- 新增 9 城 ----

export function BeijingIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 天坛祈年殿剪影 */}
      <path d="M50 15 L35 45 L65 45 Z" stroke="var(--color-ink-light)" strokeWidth="1.5" strokeLinejoin="round" fill="var(--color-oat)" opacity="0.6"/>
      <rect x="40" y="45" width="20" height="10" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <rect x="36" y="55" width="28" height="12" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <rect x="30" y="67" width="40" height="14" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <path d="M42 45 L42 81 M58 45 L58 81" stroke="var(--color-ink-light)" strokeWidth="1" opacity="0.4"/>
      <circle cx="50" cy="15" r="3" fill="var(--color-film)" opacity="0.5"/>
    </svg>
  );
}

export function ChangshaIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 橘子洲 + 爱晚亭意象 */}  
      <path d="M30 55 Q50 40 70 55 Q50 70 30 55 Z" stroke="var(--color-ink-light)" strokeWidth="1.3" fill="var(--color-oat)" opacity="0.6"/>
      <path d="M50 25 L50 45" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M40 30 L50 25 L60 30" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M35 38 Q50 32 65 38" stroke="var(--color-film)" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* 江水 */}
      <path d="M20 55 Q50 50 80 55" stroke="var(--color-ink-light)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      <path d="M25 62 Q50 58 75 62" stroke="var(--color-ink-light)" strokeWidth="0.5" strokeLinecap="round" opacity="0.2"/>
    </svg>
  );
}

export function ChengduIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 熊猫脸 */}
      <circle cx="50" cy="55" r="22" stroke="var(--color-ink-light)" strokeWidth="1.5" fill="var(--color-oat)"/>
      {/* 耳朵 */}
      <circle cx="38" cy="36" r="9" stroke="var(--color-ink-light)" strokeWidth="1.3" fill="var(--color-oat)"/>
      <circle cx="62" cy="36" r="9" stroke="var(--color-ink-light)" strokeWidth="1.3" fill="var(--color-oat)"/>
      {/* 眼睛 */}
      <ellipse cx="41" cy="52" rx="6" ry="8" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="var(--color-oat)"/>
      <ellipse cx="59" cy="52" rx="6" ry="8" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="var(--color-oat)"/>
      <circle cx="42" cy="50" r="2" fill="var(--color-film)" opacity="0.6"/>
      <circle cx="58" cy="50" r="2" fill="var(--color-film)" opacity="0.6"/>
      {/* 鼻子 */}
      <ellipse cx="50" cy="62" rx="4" ry="3" stroke="var(--color-ink-light)" strokeWidth="0.8" fill="none"/>
      <path d="M50 65 L50 68" stroke="var(--color-ink-light)" strokeWidth="0.8" strokeLinecap="round"/>
      {/* 嘴 */}
      <path d="M44 70 Q50 74 56 70" stroke="var(--color-ink-light)" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export function DatongIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 云冈大佛侧脸剪影 */}
      <path d="M25 85 Q25 60 28 45 Q30 32 35 25 Q40 18 48 16 Q55 14 62 18 Q68 22 72 30 Q76 40 78 52 Q80 65 80 85" stroke="var(--color-ink-light)" strokeWidth="1.6" strokeLinejoin="round" fill="var(--color-oat)"/>
      {/* 佛光 */}
      <circle cx="53" cy="30" r="28" stroke="var(--color-film)" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <circle cx="53" cy="30" r="20" stroke="var(--color-film)" strokeWidth="0.6" fill="none" opacity="0.2"/>
      {/* 洞窟石壁纹理 */}
      <path d="M22 80 L28 75 L24 70" stroke="var(--color-ink-light)" strokeWidth="0.6" opacity="0.4"/>
      <path d="M80 78 L76 72 L82 68" stroke="var(--color-ink-light)" strokeWidth="0.6" opacity="0.4"/>
    </svg>
  );
}

export function GuizhouIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 苗寨鼓楼 */}
      <path d="M50 12 L35 35 L65 35 Z" stroke="var(--color-ink-light)" strokeWidth="1.3" strokeLinejoin="round" fill="var(--color-oat)" opacity="0.5"/>
      <path d="M50 12 L42 35 M50 12 L58 35" stroke="var(--color-ink-light)" strokeWidth="0.8" opacity="0.5"/>
      {/* 鼓楼层次 */}
      <path d="M38 35 L62 35 M36 45 L64 45 M34 55 L66 55" stroke="var(--color-ink-light)" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="32" y="55" width="36" height="25" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.2" fill="none"/>
      <path d="M38 55 L38 80 M62 55 L62 80" stroke="var(--color-ink-light)" strokeWidth="0.8" opacity="0.4"/>
      {/* 山路 */}
      <path d="M20 70 Q35 62 45 68 Q55 74 70 65" stroke="var(--color-film)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
    </svg>
  );
}

export function HangzhouIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 三潭印月 */}
      <path d="M20 45 Q50 30 80 45" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none" opacity="0.3"/>
      {/* 水面 */}
      <path d="M10 65 Q50 55 90 65" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      <path d="M15 72 Q50 63 85 72" stroke="var(--color-ink-light)" strokeWidth="0.5" strokeLinecap="round" opacity="0.3"/>
      {/* 三座石塔 */}
      <rect x="30" y="52" width="8" height="14" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.1" fill="none"/>
      <circle cx="34" cy="56" r="3" stroke="var(--color-ink-light)" strokeWidth="0.7" fill="none"/>
      <rect x="46" y="48" width="8" height="14" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.1" fill="none"/>
      <circle cx="50" cy="52" r="3" stroke="var(--color-ink-light)" strokeWidth="0.7" fill="none"/>
      <rect x="62" y="52" width="8" height="14" rx="1" stroke="var(--color-ink-light)" strokeWidth="1.1" fill="none"/>
      <circle cx="66" cy="56" r="3" stroke="var(--color-ink-light)" strokeWidth="0.7" fill="none"/>
      {/* 柳枝 */}
      <path d="M80 40 Q85 50 82 60" stroke="var(--color-film)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      <path d="M15 42 Q18 55 15 62" stroke="var(--color-film)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function NanjingIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 梧桐叶 */}
      <path d="M50 15 Q55 30 68 35 Q60 42 55 55 Q50 45 45 55 Q40 42 32 35 Q45 30 50 15 Z" stroke="var(--color-ink-light)" strokeWidth="1.4" strokeLinejoin="round" fill="var(--color-oat)"/>
      {/* 叶脉 */}
      <path d="M50 18 L50 50" stroke="var(--color-ink-light)" strokeWidth="0.8"/>
      <path d="M50 28 L60 38 M50 33 L40 42" stroke="var(--color-ink-light)" strokeWidth="0.6"/>
      {/* 叶柄 */}
      <path d="M50 52 L50 80" stroke="var(--color-ink-light)" strokeWidth="1.2" strokeLinecap="round"/>
      {/* 中山陵台阶暗示 */}
      <path d="M35 75 L65 75 M38 70 L62 70 M42 65 L58 65" stroke="var(--color-film)" strokeWidth="0.6" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function QingdaoIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 帆船 */}
      <path d="M50 20 L50 85" stroke="var(--color-ink-light)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M50 25 L75 50 L50 75" stroke="var(--color-ink-light)" strokeWidth="1.3" strokeLinejoin="round" fill="var(--color-oat)" opacity="0.6"/>
      <path d="M50 40 L30 50" stroke="var(--color-ink-light)" strokeWidth="0.8" strokeLinecap="round"/>
      {/* 栈桥回澜阁 */}
      <path d="M15 72 L35 78" stroke="var(--color-ink-light)" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="33" cy="79" r="7" stroke="var(--color-film)" strokeWidth="1" fill="none" opacity="0.6"/>
      <circle cx="33" cy="79" r="3" fill="var(--color-film)" opacity="0.3"/>
      {/* 海浪 */}
      <path d="M50 88 Q55 84 60 86 Q65 88 70 84 Q75 82 80 84" stroke="var(--color-ink-light)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function ChongqingIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      {/* 轻轨穿楼 */}
      <rect x="30" y="30" width="40" height="50" rx="2" stroke="var(--color-ink-light)" strokeWidth="1.3" fill="var(--color-oat)"/>
      {/* 窗户 */}
      <rect x="35" y="35" width="8" height="8" rx="1" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none"/>
      <rect x="47" y="35" width="8" height="8" rx="1" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none"/>
      <rect x="59" y="35" width="8" height="8" rx="1" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none"/>
      <rect x="35" y="48" width="8" height="8" rx="1" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none"/>
      <rect x="47" y="48" width="8" height="8" rx="1" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none"/>
      <rect x="59" y="48" width="8" height="8" rx="1" stroke="var(--color-ink-light)" strokeWidth="0.6" fill="none"/>
      {/* 轻轨穿洞 */}
      <rect x="42" y="55" width="18" height="10" rx="1" stroke="var(--color-film)" strokeWidth="1" fill="var(--color-film) / 0.1"/>
      {/* 轻轨列车 */}
      <path d="M24 60 L40 60 M60 60 L80 60" stroke="var(--color-film)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      <rect x="25" y="57" width="10" height="6" rx="1" stroke="var(--color-film)" strokeWidth="0.8" fill="var(--color-film) / 0.1" opacity="0.7"/>
      <rect x="66" y="57" width="10" height="6" rx="1" stroke="var(--color-film)" strokeWidth="0.8" fill="var(--color-film) / 0.1" opacity="0.7"/>
      {/* 山形背景 */}
      <path d="M5 85 L20 70 L32 78 L42 65 L55 75 L68 60 L80 72 L95 62 L95 85 Z" stroke="var(--color-ink-light)" strokeWidth="0.8" fill="none" opacity="0.3"/>
    </svg>
  );
}

// ============================================================
// Icon 映射表
// ============================================================

export const cityIconMap: Record<string, () => ReactNode> = {
  "jinan-yantai": JinanYantaiIcon,
  kunming: KunmingIcon,
  dali: DaliIcon,
  quanzhou: QuanzhouIcon,
  hongkong: HongKongIcon,
  beijing: BeijingIcon,
  changsha: ChangshaIcon,
  chengdu: ChengduIcon,
  datong: DatongIcon,
  guizhou: GuizhouIcon,
  hangzhou: HangzhouIcon,
  nanjing: NanjingIcon,
  qingdao: QingdaoIcon,
  chongqing: ChongqingIcon,
};
