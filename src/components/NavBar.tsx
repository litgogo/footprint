"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/map", label: "Map" },
  { href: "/journal", label: "Journal" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-md border-b border-oat/50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12 md:h-14">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-serif text-ink tracking-wider hover:text-film transition-colors"
        >
          此处安放
        </Link>

        {/* Nav links — 桌面横排，移动端缩成滚动 */}
        <div className="flex items-center gap-1 md:gap-4 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-[11px] md:text-xs tracking-wider px-2 py-1 rounded transition-colors duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? "text-film font-medium"
                      : "text-ink-muted hover:text-ink-light"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
