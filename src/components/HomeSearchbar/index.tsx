import React from 'react'
import Searchbar from "../Searchbar"
import { Button } from "../ui/button"
import Link from "next/link"

const HomeSearchbar = () => {
  return (
    <>
      <Searchbar
        className="flex mx-auto  lg:w-full mt-10"
        placeholder="Enter Address"
      />
      <Button
        asChild
        size="lg"
        className="text-white uppercase bg-brandColor hover:bg-brandColor/70 hover:scale-105 transition-transform mt-[20px]">
        <Link href="/reviews">
          Search
        </Link>
      </Button>
    </>
  )
}

export default HomeSearchbar
