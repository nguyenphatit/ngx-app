import HeaderGradient from "@/components/header-gradient";
import { useTranslations } from "next-intl";
import BentoGrids from "@/components/bento-grids";
import Hero from "@/components/hero";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Hero />
      <HeaderGradient />
      <BentoGrids />
    </>
  );
}
