import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Common")
  return (
    <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-main dark:bg-black flex justify-center items-center">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-main-foreground dark:text-main">
        <div className="flex flex-row space-x-12 sm:pace-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
          <ul>
            <li className="hover:underline cursor-pointer">
              <Link href="/">{t("home")}</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/about">{t("about")}</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/blog">{t("blog")}</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/contact">{t("contact")}</Link>
            </li>
          </ul>
          <ul>
            <li className="hover:underline cursor-pointer">Github</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">X (Twitter)</li>
          </ul>
        </div>
        <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-primary font-calendas">
          <span className="flex items-center">motion<X className="w-24 h-24" /></span>
        </h2>
      </div>
    </div>
  )
}