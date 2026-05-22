import HandDrawnMap from "@/components/HandDrawnMap";
import TravelTimeline from "@/components/TravelTimeline";
import ScrollHint from "@/components/ScrollHint";

export default function MapPage() {
  return (
    <main className="min-h-screen py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          旅行地图
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="block w-8 h-px bg-film/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
          <span className="block w-8 h-px bg-film/30" />
        </div>
      </div>

      {/* 交互式地图 */}
      <div className="relative mb-16">
        <HandDrawnMap />
        <ScrollHint />
      </div>

      {/* 时间轴 */}
      <TravelTimeline />
    </main>
  );
}
