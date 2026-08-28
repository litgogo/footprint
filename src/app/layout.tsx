import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

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
    <html lang="zh-CN" className={`${notoSansSC.variable} ${notoSerifSC.variable}`}>
      <body className="antialiased min-h-[100dvh]">
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
