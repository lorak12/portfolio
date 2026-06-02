import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Karol Stróż | Fullstack Developer Portfolio",
  description: "Portfolio programisty Karola Stróża. Tworzę nowoczesne, wydajne i dopracowane aplikacje internetowe w ekosystemie Next.js, React i Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
