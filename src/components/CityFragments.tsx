"use client";

import { cities } from "@/data/cities";

interface Fragment {
  id: string;
  type: "feeling" | "thought";
  content: React.ReactNode;
  city: string;
  vibe: string;
  date: string;
  slug: string;
}

// 从 14 城提取全部感受和思考碎片
const allFragments: Fragment[] = [];

cities.forEach((city) => {
  city.feelings.forEach((f) => {
    allFragments.push({
      id: f.id,
      type: "feeling",
      content: (
        <>
          <p className="text-lg md:text-xl font-serif font-light text-ink leading-relaxed tracking-wide">
            {f.quote}
          </p>
          {f.context && (
            <p className="mt-2 text-xs text-ink-muted/60 tracking-wider font-sans">
              — {f.context}
            </p>
          )}
        </>
      ),
      city: city.name,
      vibe: city.vibe,
      date: city.date,
      slug: city.slug,
    });
  });

  city.thoughts.forEach((t) => {
    const firstSentence = t.body.split(/[。.]/)[0];
    allFragments.push({
      id: t.id,
      type: "thought",
      content: (
        <>
          <h3 className="text-xs font-sans font-medium text-film tracking-[0.2em] mb-2 uppercase">
            {t.title}
          </h3>
          <p className="text-base font-serif font-light text-ink leading-relaxed">
            {firstSentence}。
          </p>
        </>
      ),
      city: city.name,
      vibe: city.vibe,
      date: city.date,
      slug: city.slug,
    });
  });
});

export default function CityFragments() {
  return (
    <div className="max-w-2xl mx-auto">
      {allFragments.map((frag, idx) => (
        <div key={frag.id} className="relative">
          {/* 碎片本体 */}
          <div
            className={`${
              frag.type === "feeling"
                ? "border-l-2 border-film/20 pl-5"
                : "pl-5"
            }`}
          >
            {/* 城市标签 */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  frag.type === "feeling" ? "bg-film/50" : "bg-ink-muted/30"
                }`}
              />
              <span className="text-[10px] tracking-[0.15em] text-ink-muted/50 font-sans">
                {frag.city}
                <span className="text-film/40 mx-1">·</span>
                {frag.vibe}
              </span>
              <span className="text-[10px] text-ink-muted/30 font-sans">
                {frag.date}
              </span>
            </div>

            {frag.content}
          </div>

          {/* 间隔 */}
          {idx < allFragments.length - 1 && (
            <div className="flex justify-center my-12">
              <span className="block w-px h-8 bg-oat/30" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
