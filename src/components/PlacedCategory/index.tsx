"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

type CategoryProps = {
  places: string[];
  selectedPlace: string;
  setSelectedPlace: React.Dispatch<React.SetStateAction<string>>;
}
const PlacedCategory = ({ places, selectedPlace, setSelectedPlace }: CategoryProps) => {

  return (
    <div className="flex items-center justify-between gap-x-4 w-full">
      <div
        className="flex items-center gap-x-2 w-[95%] scrollbar-hide overflow-hidden px-1 overflow-x-scroll"
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
        size="icon"
        variant="secondary"
        className="text-brandText dark:bg-brandCard dark:border-slate-500 hover:hover:bg-accent w-11 h-11 rounded-full border-none">
        <ChevronRight />
      </Button>
    </div>
  )
}

export default PlacedCategory
