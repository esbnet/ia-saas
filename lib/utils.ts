import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  console.log("API ADRESS:" + `${process.env.NEXT_PUBLIC_APP_URL}${path}`);

  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
