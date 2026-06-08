import HeroSlogan from "@/components/HeroSlogan";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <HeroSlogan />
      <p className="mt-6 text-sm text-ink-muted tracking-widest">
        <Link href="/about" className="hover:text-ink transition-colors">
          展信 ↓
        </Link>
      </p>
    </section>
  );
}
