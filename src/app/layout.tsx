import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FNB Founders — Mentoria de Gestão, Escala e IA para founders",
  description:
    "Comunidade e mentoria para founders que querem escalar com IA, agentes internos, canais de aquisição e processos de verdade. Por Ives Gabriel, Salesland.",
  openGraph: {
    title: "FNB Founders — Mentoria de Escala para Founders",
    description:
      "Comunidade, mentoria de 6 meses, templates e aulas ao vivo para founders escalarem com IA e processo comercial.",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://fnbfounders.salesland.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
