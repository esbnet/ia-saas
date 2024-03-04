import { Locale } from "@/i18n";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard({ params }: { params: { locale: Locale } }) {
  return (
    <div>
      <p>Dashboard Page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
