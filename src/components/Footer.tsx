import { portfolioData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center text-xs text-zinc-600">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <p>© 2026 {portfolioData.name}. Wszystkie prawa zastrzeżone.</p>
        <p className="font-light">
          Zbudowano przy użyciu Next.js, Tailwind CSS, Framer Motion i
          TypeScript.
        </p>
      </div>
    </footer>
  );
}
