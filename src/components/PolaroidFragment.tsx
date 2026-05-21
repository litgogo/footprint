import { Fragment } from "@/data/cities";

interface PolaroidFragmentProps {
  fragments: Fragment[];
}

// 不同 type 的装饰
const typeDecor: Record<string, { icon: string; border: string }> = {
  ticket: { icon: "🎫", border: "border-dashed border-[#d4c9b8]" },
  location: { icon: "📍", border: "border-[#e0d6c5]" },
  moment: { icon: "📷", border: "border-[#e0d6c5]" },
};

export default function PolaroidFragment({ fragments }: PolaroidFragmentProps) {
  if (fragments.length === 0) {
    return (
      <div className="text-center py-16 text-[#a09080] text-sm">
        碎片尚未收集
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 gap-6 pt-6">
      {fragments.map((frag, i) => {
        const decor = typeDecor[frag.type] || typeDecor.moment;
        // 随机旋转 -3° 到 3°
        const rotation = ((i * 2.3 + 1) % 6) - 3;

        return (
          <div
            key={frag.id}
            className="
              break-inside-avoid mb-6
              bg-white border rounded-lg
              transition-all duration-400 ease-out
              hover:-translate-y-1 hover:shadow-md hover:shadow-[#c75146]/5
            "
            style={{
              borderColor: "#e0d6c5",
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {/* 图片区 */}
            {frag.image ? (
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={frag.image}
                  alt={frag.caption}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                {/* type 标签 */}
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-white/85 backdrop-blur-sm text-[#6b5d4f] border border-[#e0d6c5]/50">
                  {decor.icon} {frag.type === "ticket" ? "票根" : frag.type === "location" ? "定位" : "瞬间"}
                </span>
              </div>
            ) : (
              <div className={`
                flex items-center justify-center h-32 rounded-t-lg bg-[#fdf5f4]/40
                ${decor.border} border-b
              `}>
                <span className="text-2xl">{decor.icon}</span>
              </div>
            )}

            {/* 底部留白 — 拍立得相纸效果 */}
            <div className="p-4 pb-5">
              <p className="text-sm text-[#4a3728] leading-relaxed font-serif">
                {frag.caption}
              </p>
              {frag.date && (
                <p className="mt-2 text-[10px] text-[#a09080] tracking-wider">
                  {frag.date}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
