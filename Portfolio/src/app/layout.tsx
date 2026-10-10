import type { Metadata } from "next";
import { Geist, Geist_Mono, Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  weight: "400",
  variable: "--font-cursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shauryam Bajpai - Portfolio",
  description:
    "Software engineering intern and CS student building RAG systems, distributed storage and scalable APIs.",
  keywords: [
    "Shauryam Bajpai",
    "Backend Developer",
    "Software Engineer",
    "AI Systems",
    "RAG",
    "Distributed Systems",
    "Next.js",
    "FastAPI",
    "Go",
  ],
  authors: [{ name: "Shauryam Bajpai" }],
  openGraph: {
    title: "Shauryam Bajpai - Portfolio",
    description:
      "Software engineering intern and CS student building RAG systems, distributed storage and scalable APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${monsieurLaDoulaise.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        {children}
      </body>
    </html>
  );
}
