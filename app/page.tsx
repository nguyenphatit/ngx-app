import HeaderGradient from "@/components/HeaderGradient";
import { useTranslations } from "next-intl";
import BentoGrids from "@/components/BentoGrids";
import Hero from "@/components/Hero";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <HeaderGradient />
      <Hero />
      <BentoGrids />
    </>
  );
}
