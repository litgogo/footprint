export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] py-24 px-4 max-w-3xl mx-auto flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-serif font-light text-ink tracking-widest">
          关于此处安放
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 mb-8">
          <span className="block w-8 h-px bg-film/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-film/40" />
          <span className="block w-8 h-px bg-film/30" />
        </div>

        <div className="space-y-6 text-sm text-ink-light leading-loose font-serif max-w-lg mx-auto">
          <p>
            一个记录旅行足迹的个人网站。
          </p>
          <p>
            用文字收容走过的路、看过的海、吹过的风。
            用影像记住某个傍晚的光线。
          </p>
          <p>
            世界很大，但人总会记得某个傍晚吹过的风。
          </p>
        </div>

        <p className="mt-16 text-xs text-ink-muted tracking-[0.3em] font-light">
          GOGO · 二〇二六
        </p>
      </div>
    </main>
  );
}
