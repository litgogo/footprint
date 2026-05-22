import { Thought } from "@/data/cities";

interface ThoughtSectionProps {
  thoughts: Thought[];
}

export default function ThoughtSection({ thoughts }: ThoughtSectionProps) {
  if (thoughts.length === 0) {
    return (
      <div className="text-center py-16 text-ink-muted text-sm">
        思考尚未落笔
      </div>
    );
  }

  return (
    <div className="pt-6 max-w-2xl mx-auto space-y-16">
      {thoughts.map((thought, i) => (
        <article key={thought.id}>
          {/* 标题 */}
          <h3 className="text-lg md:text-xl font-serif font-medium text-ink tracking-wide leading-snug">
            <span className="text-film text-xs tracking-[0.3em] block mb-2 font-sans">
              THOUGHT 0{i + 1}
            </span>
            {thought.title}
          </h3>

          {/* 标题装饰线 */}
          <div className="flex items-center gap-2 mt-3 mb-6">
            <span className="block w-8 h-px bg-film/40" />
          </div>

          {/* 正文 — 支持 Markdown 段落 */}
          <div className="text-ink leading-loose font-serif text-[15px]">
            {thought.body.split("\n\n").map((para, pi) => (
              <p key={pi} className="mb-4 last:mb-0">
                {para.split("\n").map((line, li) => (
                  <span key={li}>
                    {line}
                    {li < para.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>

          {/* 思考间分割 */}
          {i < thoughts.length - 1 && (
            <div className="mt-12 pt-12 border-t border-oat/60">
              <span className="text-[10px] tracking-[0.4em] text-ink-muted uppercase">
                &middot; &middot; &middot;
              </span>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
