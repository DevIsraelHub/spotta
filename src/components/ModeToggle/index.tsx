"use client"

import * as React from "react"
import { Laptop2, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-brandCard dark:border-none">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-brandInput dark:border-none rounded-lg">
        <DropdownMenuItem className="cursor-pointer py-3 px-4 dark:hover:bg-sccent" onClick={() => setTheme("light")}>
          <Sun className="w-4 h-4 mr-3" />Light
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer py-3 px-4 dark:hover:bg-sccent" onClick={() => setTheme("dark")}>
          <Moon className="w-4 h-4 mr-3" />Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer py-3 px-4 dark:hover:bg-sccent" onClick={() => setTheme("system")}>
          <Laptop2 className="w-4 h-4 mr-3" />System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
