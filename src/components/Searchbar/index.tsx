import React from 'react'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Searchbar = ({ placeholder, className }: {
  className?: string,
  placeholder?: string
}) => {

  return (
    <div className={`relative items-center ${className}`}>
      <span className="absolute left-3">
        <Search className="w-5 h-5 text-brandColor dark:text-brandTextDull" />
      </span>
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full indent-8 bg-brandInput border-brandInputStroke dark:border-none"
      />
    </div>
  )
}

export default Searchbar
