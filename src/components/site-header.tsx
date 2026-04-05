import Image from "next/image";
import Link from "next/link";
import { CONTACT_URL } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/salesland-logo.webp"
            alt="Salesland"
            width={120}
            height={28}
            priority
            className="h-7 w-auto"
          />
          <span className="hidden h-5 w-px bg-border-strong sm:block" aria-hidden />
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-bold tracking-tight">FNB Founders</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Ecossistema de founders
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
          href={CONTACT_URL}
          className="rounded-full border border-border-strong bg-background-elevated px-4 py-2 text-xs font-semibold tracking-wide text-foreground transition hover:border-primary hover:text-primary"
        >
          Falar com Ives
        </a>
      </div>
    </header>
  );
}
