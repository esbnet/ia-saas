const defaultLocale = "pt-BR";
const langs = [defaultLocale, "en-US"] as const;

const locales = langs as unknown as string[];

export const i18n = {
  defaultLocale,
  locales,
  localeDetection: true,
  publicRoutes: ["/"],
};

export type Locale = (typeof langs)[number];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     messages: (await import(`./messages/${locale}.ts`)).default,
//   };
// });
