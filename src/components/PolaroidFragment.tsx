import { Fragment } from "@/data/cities";

interface PolaroidFragmentProps {
  fragments: Fragment[];
  /** 是否显示「收纳切面」标签行（由外部 filter 控制） */
  showTopics?: boolean;
}

const typeLabel: Record<string, string> = {
  ticket: "票根",
  location: "定位",
  moment: "瞬间",
};

export default function PolaroidFragment({
  fragments,
}: PolaroidFragmentProps) {
  if (fragments.length === 0) {
    return (
      <div className="text-center py-16 text-[#a09080] text-sm">
        碎片尚未收集
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 pt-5">
      {fragments.map((frag) => (
        <div
          key={frag.id}
          className="
            bg-white rounded-lg border border-[#e0d6c5]
            overflow-hidden
            transition-all duration-300
            hover:shadow-md hover:-translate-y-0.5
          "
        >
          {/* 图片区 */}
          {frag.image ? (
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={frag.image}
                alt={frag.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-[#fdf5f4]/40 flex items-center justify-center">
              <span className="text-2xl opacity-40">
                {frag.type === "ticket" ? "🎫" : frag.type === "location" ? "📍" : "📷"}
              </span>
            </div>
          )}

          {/* 文字区 */}
          <div className="p-3 pb-4">
            <p className="text-xs leading-relaxed text-[#4a3728] font-serif line-clamp-3">
              {frag.caption}
            </p>
            <div className="flex items-center justify-between mt-2">
              {frag.date ? (
                <span className="text-[10px] text-[#a09080] tracking-wide">
                  {frag.date}
                </span>
              ) : (
                <span />
              )}
              <span className="text-[10px] text-[#a09080]">
                {typeLabel[frag.type] || "瞬间"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
