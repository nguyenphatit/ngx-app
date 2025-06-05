"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { setUserLocale } from "@/services/locale"
import { Languages } from "lucide-react"
import { languages, Locale } from "@/i18n/config"

export function LocaleToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon" className="cursor-pointer bg-transparent border-navbar-primary-foreground">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-navbar-primary-foreground" />
          <span className="sr-only">Toggle locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      {Object.entries(languages).map(([locale, language]) => (
        <DropdownMenuItem key={`locale-${locale}`} onClick={() => setUserLocale(locale as Locale)}>
          {language}
        </DropdownMenuItem>
      ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
