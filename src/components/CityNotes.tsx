interface CityNotesProps {
  notes: string;
}

export default function CityNotes({ notes }: CityNotesProps) {
  const paragraphs = notes.split("\n\n");

  return (
    <div className="pt-5 max-w-2xl mx-auto">
      <div className="text-[#3d3226] leading-loose font-serif text-[15px]">
        {paragraphs.map((block, i) => {
          // 跳过首行空
          if (!block.trim()) return null;

          const trimmed = block.trim();

          // Markdown 标题 ##
          if (trimmed.startsWith("## ")) {
            return (
              <h3
                key={i}
                className="text-lg font-medium text-[#4a3728] mt-10 mb-3 tracking-wide"
              >
                {trimmed.replace(/^## /, "")}
              </h3>
            );
          }

          // Markdown 标题 ###
          if (trimmed.startsWith("### ")) {
            return (
              <h4
                key={i}
                className="text-base font-medium text-[#4a3728] mt-8 mb-2"
              >
                {trimmed.replace(/^### /, "")}
              </h4>
            );
          }

          // 引用块 >
          if (trimmed.startsWith("> ")) {
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#c75146]/40 pl-4 my-4 text-[#8c7b6b] italic"
              >
                {trimmed
                  .split("\n")
                  .map((line) => line.replace(/^> ?/, ""))
                  .join("\n")}
              </blockquote>
            );
          }

          // 分隔线
          if (trimmed === "---") {
            return (
              <div key={i} className="flex items-center justify-center gap-2 my-8">
                <span className="block w-6 h-px bg-[#d4c9b8]" />
                <span className="w-1 h-1 rounded-full bg-[#c75146]/30" />
                <span className="block w-6 h-px bg-[#d4c9b8]" />
              </div>
            );
          }

          // 普通段落
          return (
            <p key={i} className="mb-3 last:mb-0">
              {block.split("\n").map((line, li) => (
                <span key={li}>
                  {line}
                  {li < block.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    </div>
  );
}
