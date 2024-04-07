"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryProps = {
  places: string[];
  selectedPlace: string;
  setSelectedPlace: React.Dispatch<React.SetStateAction<string>>;
}
const PlaceCategory = ({
  places,
  selectedPlace,
  setSelectedPlace
}: CategoryProps) => {

  const [slided, setSlided] = useState(false)

  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft - 200;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft + 200;
    setSlided(true)
  };


  return (
    <div className="flex items-center justify-between gap-x-4 w-full">
      {
        slided && (
          <Button
            onClick={() => slideLeft()}
            size="icon"
            variant="secondary"
            className="hidden md:flex text-brandText bg-brandBg dark:bg-brandCard dark:border-slate-500 hover:hover:bg-accent w-11 h-11 rounded-full border dark:border-none">
            <ChevronLeft />
          </Button>
        )
      }
      <div
        id="slider"
        className="flex items-center gap-x-2 w-full md:w-[95%] scrollbar-hide overflow-hidden px-1 overflow-x-scroll scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {places.map((place, index) => (
          <Button
            onClick={() => setSelectedPlace(place)}
            variant={selectedPlace === place ? "default" : "outline"}
            size="sm"
            key={index}
            className={`${selectedPlace !== place && "dark:bg-brandCard dark:border-slate-500"}`}
          >
            {place}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => slideRight()}
        size="icon"
        variant="secondary"
        className="hidden md:flex text-brandText bg-brandBg dark:bg-brandCard dark:border-slate-500 hover:hover:bg-accent w-11 h-11 rounded-full border dark:border-none">
        <ChevronRight />
      </Button>
    </div>
  )
}

export default PlaceCategory
