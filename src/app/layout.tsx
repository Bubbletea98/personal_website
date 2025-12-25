import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/data/config";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
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
        className={`${spaceMono.variable} ${inter.variable} antialiased bg-[#f0f0f0] text-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
