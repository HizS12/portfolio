import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hizb Patel | Backend Developer & Founder",
  description: "Portfolio of Hizb Patel - Building Scalable Systems & Intelligent Workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
