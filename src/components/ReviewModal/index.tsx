"use client";

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"

import { StarIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { places } from "@/constants";

const ReviewModal = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {

  const [bodyText, setBodyText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBodyText(e.target.value)
    if (bodyText.length > 0) {
      setDisabled(false)
    } return
  }

  return (
    <Dialog>
      <DialogTrigger className={`${className}`}>
        {children}
      </DialogTrigger>
      <DialogContent className="xs:rounded-lg w-full h-full xs:h-max bg-brandBg dark:border-slate-500">
        <DialogHeader className="text-brandText">
          <DialogTitle className="text-center mb-2">Review Location</DialogTitle>
          <p className="font-medium">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </p>
        </DialogHeader>
        <Select>
          <SelectTrigger className="w-full bg-brandInput h-[50px] border-none">
            <SelectValue placeholder="Select Amenities" />
          </SelectTrigger>
          <SelectContent className="-mt-[2px] w-full p-0 bg-brandInput dark:border-none">
            <div className="bg-brandInput w-full p-6 py-7 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 p-x-2 grid-x-3 gap-y-4">
              {places.map((place, index) => (
                <div key={index} className="w-full flex items-center space-x-2 group">
                  <Checkbox id={place} className="group-hover:border-brandColor" />
                  <label
                    htmlFor={place}
                    className="text w-full font-medium leading-none group-hover:text-brandColor peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-brandTextDull cursor-pointer"
                  >
                    {place}
                  </label>
                </div>
              ))}
            </div>
          </SelectContent>
        </Select>
        <div className="w-full mb-2 space-y-2">
          <Label>Rate location</Label>
          <div className="flex items-center gap-x-2 text-brandTextDull">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                size={20}
                fill="currentColor"
                className="text-yellow-400 opacity-50 cursor-pointer hover:scale-110 hover:opacity-100 transition-transform"
              />
            ))}
          </div>
        </div>
        <div className="w-full space-y-4">
          <Label htmlFor="message">Write Review</Label>
          <Textarea
            onClick={() => handleChange}
            className="min-h-[200px] max-h-[400px] bg-brandBg dark:border-slate-500" placeholder="Placeholder."
            id="message"
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-brandTextDull cursor-pointer"
            >
              Post as anonymous
            </label>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-5 mt-2">
          <Button
            size="lg"
            disabled={disabled}
            className="uppercase text-lg w-full bg-brandColor text-white h-14 hover:bg-brandColor"
          >
            Submit
          </Button>
          <DialogClose className="text-lg w-full border rounded-md h-14 hover:bg-accent uppercase border-brandColor text-brandColor hover:text-brandColor bg-brandBg">
            Cancel
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReviewModal
