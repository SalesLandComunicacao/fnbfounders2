import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONTACT_EMAIL = "founders@salesland.com.br";
export const CONTACT_URL =
  `mailto:${CONTACT_EMAIL}?subject=` +
  encodeURIComponent("FNB Founders — quero falar sobre a mentoria");
