import HeroSlogan from "@/components/HeroSlogan";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <HeroSlogan />
      <p className="mt-6 text-sm text-ink-muted tracking-widest">
        <a href="/journey" className="hover:text-ink transition-colors">
          开始旅行 ↓
        </a>
      </p>
    </section>
  );
}
