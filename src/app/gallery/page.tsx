import PhotoStream from "@/components/PhotoStream";

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          影像碎片
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 mb-3">
          <span className="block w-8 h-px bg-film/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
          <span className="block w-8 h-px bg-film/30" />
        </div>
        <p className="text-sm text-ink-muted tracking-widest">
          下午四点的海边没有人，风很大。
        </p>
      </div>
      <PhotoStream />
    </main>
  );
}
