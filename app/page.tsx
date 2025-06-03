import { LocaleToggle } from "@/components/toggle-locale";
import { ModeToggle } from "@/components/toggle-mode";
import { useTranslations } from "next-intl";
import Chatter from "@/components/chatter";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Chatter />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <ModeToggle />
        <LocaleToggle />
      </footer>
    </div>
  );
}
