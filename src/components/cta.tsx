import { ArrowRight } from "lucide-react";
import { CONTACT_URL } from "@/lib/utils";

export function CTA() {
  return (
    <section id="faq" className="relative overflow-hidden border-b border-border/60 py-24">
      <div className="absolute inset-0 bg-radial-primary opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
          Se você já fatura, o próximo salto{" "}
          <span className="bg-gradient-to-r from-primary to-[hsl(15_95%_60%)] bg-clip-text text-transparent">
            não é trabalhar mais.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          É construir sistemas que escalam sem você. É exatamente isso que a
          gente faz dentro da FNB Founders.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={CONTACT_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_hsl(4_90%_58%),0_30px_80px_-20px_hsl(4_90%_58%/0.7)] transition hover:brightness-110"
          >
            Falar com o Ives
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#esteira"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated px-8 py-4 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            Rever mentorias
          </a>
        </div>
      </div>
    </section>
  );
}
