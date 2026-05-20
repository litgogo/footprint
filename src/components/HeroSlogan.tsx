import { siteConfig } from "@/data/cities";

export default function HeroSlogan() {
  return (
    <div className="text-center mb-12 pt-12 pb-8">
      {/* 主 Slogan */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#5d4e37] tracking-wider leading-tight">
        {siteConfig.title}
      </h1>

      {/* 装饰线 */}
      <div className="flex items-center justify-center gap-4 my-6">
        <span className="block w-12 h-px bg-[#c75146] opacity-40" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#c75146] opacity-60" />
        <span className="block w-12 h-px bg-[#c75146] opacity-40" />
      </div>

      {/* 核心句 */}
      <p className="text-xl md:text-2xl text-[#8c7b6b] font-serif italic tracking-wide">
        {siteConfig.slogan}
      </p>

      {/* 副句 */}
      <p className="text-sm text-[#a09080] mt-3 tracking-widest font-light">
        {siteConfig.subtitle}
      </p>
    </div>
  );
}
