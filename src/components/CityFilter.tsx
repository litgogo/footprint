"use client";

export type FilterTab = "notes" | "feelings" | "thoughts";

interface CityFilterProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  feelingCount: number;
  thoughtCount: number;
}

const tabs: { key: FilterTab; label: string }[] = [
  { key: "notes", label: "笔记" },
  { key: "feelings", label: "感受" },
  { key: "thoughts", label: "思考" },
];

export default function CityFilter({
  activeTab,
  onTabChange,
  feelingCount,
  thoughtCount,
}: CityFilterProps) {
  return (
    <div className="flex border-b border-[#e8e0d5]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        const count =
          tab.key === "feelings"
            ? feelingCount
            : tab.key === "thoughts"
              ? thoughtCount
              : null;

        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`
              flex-1 flex items-center justify-center gap-1.5 py-3.5 text-sm
              transition-colors duration-300 relative
              ${
                isActive
                  ? "text-[#4a3728] font-medium"
                  : "text-[#a09080] hover:text-[#6b5d4f]"
              }
            `}
          >
            <span className="tracking-wide">{tab.label}</span>
            {count !== null && (
              <span
                className={`
                  inline-flex items-center justify-center min-w-[18px] h-[18px]
                  text-[10px] rounded-full px-1
                  ${
                    isActive
                      ? "bg-[#c75146] text-white"
                      : "bg-[#e8e0d5] text-[#8c7b6b]"
                  }
                `}
              >
                {count}
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c75146] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
