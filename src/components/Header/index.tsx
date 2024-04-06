"use client";

import React, { useState } from 'react'
import { Button } from "../ui/button"
import { Bookmark, ChevronRight, Share2 } from "lucide-react"
import { places } from "@/constants"
import PlacedCategory from "../PlacedCategory"
import Searchbar from "../Searchbar";

const Header = () => {
  const [selectedPlace, setSelectedPlace] = useState(places[0])
  return (
    <div className="space-y-6 py-6 px-4 md:px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="lg:hidden h-full w-full">
        <Searchbar
          inputClassName="bg-brandBg dark:bg-brandInput"
          className="flex bg-brandBg"
          placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h2 className="text-brandText text-xl md:text-2xl font-medium">Bonny and Clyde Street, Ajao Estate, Lagos</h2>
          <p className="text-brandText text-sm md:text-[16px]">
            <b>"450" Reviews</b> (People are raving about the selected location)</p>
        </div>
        <div className="hidden lg:flex items-center justify-between w-full lg:w-max gap-x-3">
          <Button size="lg" className="uppercase bg-brandColor text-white hover:bg-brandColor hover:opacity-90">
            Leave A Review
          </Button>
          <div className="flex items-center gap-x-3">
            <Button size="icon" variant="outline" className="border-brandColor">
              <Bookmark className="text-brandColor w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" className="border-brandColor">
              <Share2 className="text-brandColor w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <PlacedCategory
        places={places}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      <div className="lg:hidden flex items-center justify-between w-full lg:w-max gap-x-3">
        <Button size="lg" className="uppercase bg-brandColor text-white hover:bg-brandColor hover:opacity-90">
          Leave A Review
        </Button>
        <div className="flex items-center gap-x-3">
          <Button size="icon" variant="outline" className="border-brandColor">
            <Bookmark className="text-brandColor w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline" className="border-brandColor">
            <Share2 className="text-brandColor w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
