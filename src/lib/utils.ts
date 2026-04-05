import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent(
    "Olá! Vim pela página FNB Founders e quero falar sobre a mentoria."
  );
