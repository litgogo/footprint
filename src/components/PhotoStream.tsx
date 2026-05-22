import { cities } from "@/data/cities";

// 用现有城市封面图做杂志拼贴 — 大小错落
// 布局：大-小-中 / 中-大-小 / 小-中-大
const photos = cities.flatMap((city, i) => {
  if (!city.photo) return [];
  return {
    src: `/footprint${city.photo}`,
    alt: city.name,
    // 根据位置分配不同占比
    span: (["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1"])[
      i % 14
    ],
  };
});

export default function PhotoStream() {
  if (photos.length === 0) {
    return (
      <div className="text-center py-16 text-ink-muted text-sm">
        影像尚未冲洗
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`${photo.span} overflow-hidden rounded-lg bg-oat`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
