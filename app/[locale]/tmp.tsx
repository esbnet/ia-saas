import { Button } from "@/components/ui/button";

import { Locale } from "@/i18n";
import { getDictionaryServerOnly } from "@/messages/default-dictionary-server-only";

export default function Home({ params }: { params: { locale: Locale } }) {
  const dict = getDictionaryServerOnly(params.locale);
  return (
    <Button variant="destructive" size="lg">
      {dict.Index.send}
    </Button>
  );
}
