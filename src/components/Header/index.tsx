"use client";

import React, { useState } from 'react'
import { Button } from "../ui/button"
import { Bookmark, ChevronRight, Share2 } from "lucide-react"
import { places } from "@/constants"
import PlacedCategory from "../PlacedCategory"

const Header = () => {
  const [selectedPlace, setSelectedPlace] = useState(places[0])
  return (
    <header className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="leading-relaxed">
          <h2 className="text-brandText text-2xl font-medium">Bonny and Clyde Street, Ajao Estate, Lagos</h2>
          <p className="text-brandText text-[16px]">
            <b>"450" Reviews</b> (People are raving about the selected location)</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Button size="lg" className="uppercase bg-brandColor text-white hover:bg-brandColor hover:opacity-90">
            Leave A Review
          </Button>
          <Button size="icon" variant="outline" className="border-brandColor">
            <Bookmark className="text-brandColor w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline" className="border-brandColor">
            <Share2 className="text-brandColor w-4 h-4" />
          </Button>
        </div>
      </div>
      <PlacedCategory
        places={places}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
    </header>
  )
}

export default Header
