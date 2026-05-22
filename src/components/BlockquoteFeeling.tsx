import { Feeling } from "@/data/cities";

interface BlockquoteFeelingProps {
  feelings: Feeling[];
}

export default function BlockquoteFeeling({ feelings }: BlockquoteFeelingProps) {
  if (feelings.length === 0) {
    return (
      <div className="text-center py-16 text-ink-muted text-sm">
        感受尚未沉淀
      </div>
    );
  }

  return (
    <div className="pt-8 space-y-12 max-w-2xl mx-auto">
      {feelings.map((feeling, i) => (
        <div key={feeling.id} className="relative group">
          {/* 左侧装饰竖线 */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-film)]/60 via-[var(--color-film)]/20 to-transparent rounded-full" />

          {/* 引用语 */}
          <blockquote className="pl-8">
            <p className="text-xl md:text-2xl font-serif text-ink leading-relaxed tracking-wide">
              &ldquo;{feeling.quote}&rdquo;
            </p>
          </blockquote>

          {/* 触发场景 */}
          {feeling.context && (
            <p className="pl-8 mt-3 text-xs text-ink-muted tracking-wide leading-relaxed max-w-md">
              <span className="inline-block w-4 h-px bg-film/30 mr-2 align-middle" />
              {feeling.context}
            </p>
          )}

          {/* 感受间装饰分割 */}
          {i < feelings.length - 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <span className="block w-6 h-px bg-[var(--color-oat)]" />
              <span className="w-1 h-1 rounded-full bg-film/30" />
              <span className="block w-6 h-px bg-[var(--color-oat)]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
