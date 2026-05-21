"use client";

export type FilterTab = "topics" | "people" | "daily";

interface CityFilterProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  topics: string[];
  peopleCount: number;
}

const tabs: { key: FilterTab; label: string; hint: string }[] = [
  { key: "topics", label: "在地切片", hint: "碎片·面面观" },
  { key: "people", label: "同行的人", hint: "羁绊·连接" },
  { key: "daily", label: "时间流动", hint: "感受·思考" },
];

export default function CityFilter({
  activeTab,
  onTabChange,
  topics,
  peopleCount,
}: CityFilterProps) {
  return (
    <div className="sticky top-0 z-30 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e0d5] -mx-4 px-4 md:mx-0 md:px-0">
      {/* Tab 切换栏 */}
      <div className="flex items-center gap-0 max-w-3xl mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`
                relative flex-1 py-4 text-sm transition-colors duration-300
                ${isActive
                  ? "text-[#4a3728] font-medium"
                  : "text-[#a09080] hover:text-[#6b5d4f]"
                }
              `}
            >
              <span className="block tracking-wide">{tab.label}</span>
              <span className="block text-[10px] text-[#a09080] mt-0.5 font-normal">
                {tab.hint}
              </span>
              {/* 选中态下划线 */}
              {isActive && (
                <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-[#c75146] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Topics 模式下显示标签切换 */}
      {activeTab === "topics" && (
        <div className="flex flex-wrap gap-2 pb-3 max-w-3xl mx-auto">
          {topics.map((topic) => (
            <span
              key={topic}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-[#e0d6c5] text-[#6b5d4f] cursor-default"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
