import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="quem-somos"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Backdrops */}
      <div className="absolute inset-0 bg-grid opacity-[0.35]" aria-hidden />
      <div className="absolute inset-0 bg-radial-primary" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left — copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Comunidade + mentoria de founders · Salesland
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A mentoria para quem já{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-[hsl(15_95%_60%)] to-primary bg-clip-text text-transparent">
                fatura
              </span>
              <span
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-primary/20 blur-md"
                aria-hidden
              />
            </span>{" "}
            e agora precisa escalar com método.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            FNB Founders é o ecossistema da Salesland para founders que já
            validaram o negócio e querem destravar a próxima curva — com{" "}
            <span className="text-foreground font-medium">IA, agentes internos, canais de aquisição e operação comercial real.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#esteira"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_hsl(4_90%_58%),0_20px_60px_-15px_hsl(4_90%_58%/0.6)] transition hover:brightness-110"
            >
              Ver mentorias
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary"
            >
              Conversar no WhatsApp
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {[
              "Fundador ativo no mercado",
              "Operação comercial de R$ 80k/mês",
              "LTV médio de 1 ano",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Quem somos card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/30 via-primary/5 to-transparent opacity-60 blur-xl" />
          <div className="relative rounded-2xl border border-border-strong bg-background-elevated/70 p-8 backdrop-blur">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                <span className="text-xl font-black">IG</span>
              </div>
              <div>
                <div className="text-base font-bold text-foreground">
                  Ives Gabriel
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Sócio-fundador · Salesland
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Construí a Salesland do zero em <span className="text-foreground font-medium">2024</span> e hoje operamos uma
              máquina comercial recorrente de{" "}
              <span className="text-foreground font-medium">R$ 80 mil/mês</span>, com{" "}
              <span className="text-foreground font-medium">LTV médio de 12 meses</span> —
              usando IA, agentes internos e processo de aquisição validado.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A FNB Founders nasceu para dividir essa engenharia com founders
              que estão no mesmo caminho — sem teoria reciclada, só o que de
              fato roda aqui dentro.
            </p>

            <div className="mt-6 grid grid-cols-3 divide-x divide-border border-t border-border pt-6">
              <Stat value="R$80k" label="MRR atual" />
              <Stat value="12m" label="LTV médio" />
              <Stat value="2024" label="No mercado" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2 text-center first:pl-0 last:pr-0">
      <div className="font-mono text-xl font-black text-foreground">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
