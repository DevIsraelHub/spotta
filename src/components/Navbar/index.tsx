import React from 'react'
import Logo from "@/components/Logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Searchbar from "@/components/Searchbar"
import UserButton from "../UserButton"
import { Search } from "lucide-react"
import { ModeToggle } from "../ModeToggle"

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <nav className="flex items-center bg-transparent justify-between w-full min-h-[70px] px-4 md:px-6 lg:px-12 max-w-[1400px]">
      <Link href="/" as={"/"}>
        <Logo w="120" h="50" />
      </Link>
      {
        !isLoggedIn && (

          <div className="lg:w-1/2 ml-auto lg:ml-0 mr-2 sm:mr-4 lg:mr-0">
            <Searchbar className="hidden lg:flex " placeholder="Bonny and Clyde Street, Ajao Estate, Lagos" />
            <Button size="icon" variant="ghost" className="text-brandColor hover:text-brandColor lg:hidden p-2 w-10 h-10 rounded-full">
              <Search />
            </Button>
          </div>
        )
      }
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar
