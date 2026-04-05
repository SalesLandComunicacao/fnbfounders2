import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Esteira } from "@/components/esteira";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Esteira />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
