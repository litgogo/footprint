import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "此处安放 · 足迹",
  description: "脚步的延伸，是认知的位移。奔赴山海，和自己重逢。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        <NavBar />
        {/* pt 留出导航栏高度 */}
        <div className="pt-12 md:pt-14">
          {children}
        </div>
        {/* 全局 Footer */}
        <footer className="py-16 px-4 text-center border-t border-oat/50">
          <p className="text-lg md:text-xl font-serif font-light text-ink-light tracking-wider leading-relaxed">
            世界很大，
            <br />
            但人总会记得某个傍晚吹过的风。
          </p>
          <p className="mt-6 text-[10px] text-ink-muted tracking-[0.3em] font-light">
            此处安放 · 二〇二六
          </p>
        </footer>
      </body>
    </html>
  );
}
