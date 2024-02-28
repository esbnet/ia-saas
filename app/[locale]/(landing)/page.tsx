import { Button } from "@/components/ui/button";

import { Locale } from "@/i18n";
import { getDictionaryServerOnly } from "@/messages/default-dictionary-server-only";

export default function LandingPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = getDictionaryServerOnly(params.locale);
  return (
    <Button variant="destructive" size="lg">
      {dict.Index.success}
    </Button>
  );
}
