"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme , theme} = useTheme()

  const handleToggle = () => {
    if (theme === "dark") {
      setTheme("light")
    }
    if (theme === "light") {
      setTheme("dark")
    }
  }

  return (

    <button
      onClick={handleToggle}
      className="relative w-10 h-10 rounded-rounded focus:bg-transparent bg-transparent  flex items-center justify-center transition-all hover:bg-muted p-2 dark:hover:bg-primary-background"
    >
      { theme === "dark"?
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
       :
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-slate-900 transition-all dark:-rotate-90 dark:scale-0" />
      }
    </button>
  )
}
