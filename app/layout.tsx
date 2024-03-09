import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

// export async function generateStaticParams() {
//   const languages = i18n.locales.map((locale) => ({
//     locale,
//   }));

//   return languages;
// }

export const metadata: Metadata = {
  title: "Synthetic",
  description: "AI Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
