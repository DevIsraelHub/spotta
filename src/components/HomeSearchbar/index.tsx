import React from 'react'
import Searchbar from "../Searchbar"
import { Button } from "../ui/button"

const HomeSearchbar = () => {
  return (
    <>
      <Searchbar
        className="flex mx-auto  lg:w-full mt-10"
        placeholder="Enter Address"
      />
      <Button size="lg" className="text-white uppercase bg-brandColor hover:bg-brandColor/70 hover:scale-105 transition-transform mt-[20px]">
        Search
      </Button>
    </>
  )
}

export default HomeSearchbar
