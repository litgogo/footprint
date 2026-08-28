import CityFragments from "@/components/CityFragments";

export default function JourneyPage() {
  return (
    <main className="min-h-[100dvh] py-24 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          城市印记
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 mb-3">
          <span className="block w-8 h-px bg-film/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
          <span className="block w-8 h-px bg-film/30" />
        </div>
        <p className="text-sm text-ink-muted tracking-widest max-w-md mx-auto leading-relaxed">
          旅途中记下的一句话
        </p>
      </div>
      <CityFragments />
    </main>
  );
}
