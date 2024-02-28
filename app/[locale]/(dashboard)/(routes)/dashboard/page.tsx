import { Locale } from "@/i18n";
import { getDictionaryServerOnly } from "@/messages/default-dictionary-server-only";

export default function Dashboard({ params }: { params: { locale: Locale } }) {
  const dict = getDictionaryServerOnly(params.locale);
  return <p>Dashboard Page {dict.Index.error}</p>;
}
