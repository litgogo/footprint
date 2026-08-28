export default function HeroSlogan() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 text-center">
      {/* 装饰线 — 上方 */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className="block w-10 h-px bg-film opacity-30" />
        <span className="w-1.5 h-1.5 rounded-full bg-film opacity-50" />
        <span className="block w-10 h-px bg-film opacity-30" />
      </div>

      {/* 主标语 — 两行 */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-ink tracking-widest leading-relaxed max-w-3xl">
        脚步的延伸
        <br />
        是认知的位移
      </h1>

      {/* 文案段落 */}
      <div className="mt-10 max-w-xl text-sm md:text-base text-ink-light font-serif leading-loose tracking-wide space-y-3">
        <p>有些旅行，不是为了抵达。</p>
        <p>
          时间终会在旅途中留下痕迹。我们需要一些触点，去记住那些微不足道的瞬间。
        </p>
        <p>
          你的知识体系会决定你看到什么，感觉到什么。
          <br />
          行万里路看到的东西，不是决定视网膜，是决定于你的知识系统。
        </p>
      </div>

      {/* 装饰线 — 下方 */}
      <div className="flex items-center justify-center gap-3 mt-12">
        <span className="block w-12 h-px bg-ink-muted/30" />
        <span className="text-[10px] tracking-[0.3em] text-ink-muted uppercase font-light">
          Gogo
        </span>
        <span className="block w-12 h-px bg-ink-muted/30" />
      </div>
    </div>
  );
}
