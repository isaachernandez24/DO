import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Une clases condicionales y elimina duplicados de Tailwind
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
