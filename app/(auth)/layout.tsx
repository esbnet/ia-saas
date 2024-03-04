import { Locale } from "@/i18n";

export default function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
