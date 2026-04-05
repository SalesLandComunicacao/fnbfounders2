import { Check, Sparkles, Crown, Flame } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Tier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  installment: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
  bullets: string[];
  classes?: string[];
  ctaLabel: string;
};

const tiers: Tier[] = [
  {
    id: "comunidade",
    name: "Comunidade FNB Founders",
    tagline: "Acesso anual à comunidade de founders da Salesland",
    price: "R$ 897",
    installment: "ou 12x no cartão",
    icon: Sparkles,
    bullets: [
      "Acesso anual à comunidade FNB Founders",
      "Networking direto com founders em operação",
      "Conteúdos, cases e bastidores da Salesland",
      "Encontros e discussões recorrentes",
      "Primeira fila nos lançamentos e mentorias",
    ],
    ctaLabel: "Entrar na comunidade",
  },
  {
    id: "gestao",
    name: "Mentoria Gestão & Escala",
    tagline: "Para operações que já faturam e querem escalar com método",
    price: "R$ 3.500",
    installment: "em até 12x",
    badge: "Mais escolhida",
    icon: Flame,
    featured: true,
    bullets: [
      "Acompanhamento de 6 meses com Ives Gabriel",
      "Acesso anual à comunidade FNB Founders",
      "5 templates das soluções reais da Salesland",
    ],
    classes: [
      "Criação de esteira de produtos (com base em margem)",
      "Construção de agentes internos para produtividade",
      "Canais de aquisição com base no que já foi validado",
      "Construção do setor de Customer Success",
    ],
    ctaLabel: "Quero escalar com a FNB",
  },
  {
    id: "crescimento",
    name: "Mentoria Validação & Crescimento",
    tagline: "Para founders que querem dominar a stack técnica da Salesland",
    price: "R$ 5.000",
    installment: "em até 12x",
    badge: "Avançada",
    icon: Crown,
    bullets: [
      "Acompanhamento de 6 meses com Ives Gabriel",
      "Acesso anual à comunidade FNB Founders",
      "5 templates das soluções reais da Salesland",
    ],
    classes: [
      "Criação de esteira de produtos (com base em margem)",
      "Construção de agentes internos para produtividade",
      "Canais de aquisição com base no que já foi validado",
      "Imersão avançada em criação de agentes em Python",
      "Imersão avançada em no-code (Claude + Antigravity)",
      "Imersão de criação de um CRM próprio",
    ],
    ctaLabel: "Quero a imersão completa",
  },
];

export function Esteira() {
  return (
    <section
      id="esteira"
      className="relative border-b border-border/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Esteira FNB Founders
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
            Escolha o nível de{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(15_95%_60%)] bg-clip-text text-transparent">
              profundidade
            </span>{" "}
            que você precisa agora.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Três caminhos. Um mesmo princípio: só o que realmente roda dentro
            da Salesland.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Todos os planos incluem acesso anual à comunidade FNB Founders.
        </p>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const Icon = tier.icon;
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border bg-background-elevated/70 p-8 backdrop-blur transition",
        tier.featured
          ? "border-primary/60 shadow-[0_0_0_1px_hsl(4_90%_58%/0.4),0_40px_120px_-40px_hsl(4_90%_58%/0.5)]"
          : "border-border-strong hover:border-primary/40"
      )}
    >
      {tier.badge && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
            tier.featured
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border-strong bg-background-elevated text-muted-foreground"
          )}
        >
          {tier.badge}
        </div>
      )}

      <div className="mb-6 flex items-center gap-3">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl ring-1",
            tier.featured
              ? "bg-primary/15 text-primary ring-primary/40"
              : "bg-muted text-foreground ring-border-strong"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            {tier.name}
          </h3>
        </div>
      </div>

      <p className="min-h-[3rem] text-sm leading-relaxed text-muted-foreground">
        {tier.tagline}
      </p>

      <div className="mt-6 border-y border-border py-6">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-4xl font-black text-foreground">
            {tier.price}
          </span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          {tier.installment}
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {tier.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-foreground/90">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tier.featured ? "text-primary" : "text-foreground/60"
              )}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {tier.classes && tier.classes.length > 0 && (
        <div className="mt-6 rounded-xl border border-border bg-background/40 p-5">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
            {tier.classes.length} aulas ao vivo
          </div>
          <ul className="space-y-2.5">
            {tier.classes.map((c) => (
              <li
                key={c}
                className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-8">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
            tier.featured
              ? "bg-primary text-primary-foreground shadow-[0_20px_60px_-20px_hsl(4_90%_58%/0.8)] hover:brightness-110"
              : "border border-border-strong bg-background text-foreground hover:border-primary hover:text-primary"
          )}
        >
          {tier.ctaLabel}
        </a>
      </div>
    </article>
  );
}
