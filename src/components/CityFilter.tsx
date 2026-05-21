"use client";

export type FilterTab = "topics" | "people" | "daily";

interface CityFilterProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  cityName: string;
  topics: { name: string; count: number }[];
  fragmentCount: number;
  feelingCount: number;
  thoughtCount: number;
}

// 主题图标映射
const topicIcons: Record<string, string> = {
  "在地建筑": "🏛️",
  "自然景观": "🌿",
  "美食记忆": "🍜",
  "市井烟火": "🔥",
  "文博展馆": "🏺",
  "文创聚落": "🎨",
  "非遗传承": "🧵",
  "光影记忆": "🎬",
};

export default function CityFilter({
  activeTab,
  onTabChange,
  cityName,
  topics,
  fragmentCount,
  feelingCount,
  thoughtCount,
}: CityFilterProps) {
  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: "topics", label: "碎片", count: fragmentCount },
    { key: "people", label: "感受", count: feelingCount },
    { key: "daily", label: "思考", count: thoughtCount },
  ];

  return (
    <>
      {/* ============================================ */}
      {/* Tab 切换栏 — 三列同排                               */}
      {/* ============================================ */}
      <div className="flex border-b border-[#e8e0d5]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`
                flex-1 flex items-center justify-center gap-1.5 py-3.5 text-sm
                transition-colors duration-300 relative
                ${isActive
                  ? "text-[#4a3728] font-medium"
                  : "text-[#a09080] hover:text-[#6b5d4f]"
                }
              `}
            >
              <span className="tracking-wide">{tab.label}</span>
              {/* 数字 badge */}
              <span
                className={`
                  inline-flex items-center justify-center min-w-[18px] h-[18px]
                  text-[10px] rounded-full px-1
                  ${isActive
                    ? "bg-[#c75146] text-white"
                    : "bg-[#e8e0d5] text-[#8c7b6b]"
                  }
                `}
              >
                {tab.count}
              </span>
              {/* 选中态底线 */}
              {isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c75146] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* ============================================ */}
      {/* 收纳切面 — 主题标签（仅碎片 Tab 可见）                    */}
      {/* ============================================ */}
      {activeTab === "topics" && topics.length > 0 && (
        <div className="py-5 border-b border-[#e8e0d5]">
          {/* 标题 */}
          <p className="text-xs text-[#a09080] tracking-wide mb-3">
            <span className="font-medium text-[#4a3728]">{cityName}</span>
            <span className="mx-1">·</span>
            收纳切面
          </p>

          {/* 标签网格 */}
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic.name}
                className="
                  inline-flex items-center gap-1.5
                  text-[11px] px-3 py-1.5 rounded-full
                  bg-white border border-[#e0d6c5]
                  text-[#6b5d4f] cursor-default
                  transition-colors hover:border-[#c75146]/30 hover:bg-[#fdf5f4]
                "
              >
                <span className="text-xs">
                  {topicIcons[topic.name] || "📌"}
                </span>
                <span>{topic.name}</span>
                <span className="text-[10px] text-[#a09080] ml-0.5">
                  {topic.count}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
