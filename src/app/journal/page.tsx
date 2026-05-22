import TravelStories from "@/components/TravelStories";

export default function JournalPage() {
  return (
    <main className="min-h-screen py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          旅行故事
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 mb-3">
          <span className="block w-8 h-px bg-film/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
          <span className="block w-8 h-px bg-film/30" />
        </div>
        <p className="text-sm text-ink-muted tracking-widest">
          像翻阅一本旅行杂志的目录
        </p>
      </div>
      <TravelStories />
    </main>
  );
}
