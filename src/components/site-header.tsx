import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-black text-sm">
            F
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">FNB Founders</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              by Salesland
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#quem-somos" className="hover:text-foreground transition-colors">
            Quem somos
          </a>
          <a href="#esteira" className="hover:text-foreground transition-colors">
            Mentorias
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            Dúvidas
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border-strong bg-background-elevated px-4 py-2 text-xs font-semibold tracking-wide text-foreground transition hover:border-primary hover:text-primary"
        >
          Falar com Ives
        </a>
      </div>
    </header>
  );
}
