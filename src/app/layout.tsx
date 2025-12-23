import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/data/config";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${RESUME_DATA.personal.name} | ML Engineer`,
  description: RESUME_DATA.personal.highlight,
  keywords: [
    "Machine Learning",
    "AI Engineer",
    "LLM",
    "RAG",
    "Portfolio",
    RESUME_DATA.personal.name,
  ],
  authors: [{ name: RESUME_DATA.personal.name }],
  openGraph: {
    title: `${RESUME_DATA.personal.name} | ML Engineer`,
    description: RESUME_DATA.personal.highlight,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-abyss-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}

