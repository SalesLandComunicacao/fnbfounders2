import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/salesland-logo.webp"
            alt="Salesland"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
          <div className="hidden h-8 w-px bg-border-strong sm:block" aria-hidden />
          <div className="leading-tight">
            <div className="font-bold text-foreground">FNB Founders</div>
            <div className="text-[11px] uppercase tracking-[0.16em]">
              Ecossistema de founders
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} Salesland. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
