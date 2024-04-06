import React from 'react'
import Logo from "@/components/Logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import UserButton from "@/components/UserButton"
import { ModeToggle } from "../ModeToggle"

const HomeNav = () => {
  const isLoggedIn = false;

  return (
    <nav className="flex items-center bg-transparent justify-between w-full min-h-[70px] px-4 md:px-6 lg:px-12 max-w-[1400px]">
      <Link href="/" as={"/"}>
        <Logo w="120" h="50" />
      </Link>
      <div className="flex itemss-center gap-x-4">
        <ModeToggle />
        {
          !isLoggedIn ? (
            <Button
              asChild
              variant="ghost"
              className="text-brandColor hover:text-brandColor uppercase"
            >
              <Link href="/reviews">Login</Link>
            </Button>
          ) : (
            <UserButton />
          )
        }
      </div>
    </nav>
  )
}

export default HomeNav
