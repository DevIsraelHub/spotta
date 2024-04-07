import React from 'react';
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"

import { StarIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";


const ReviewModal = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {

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
          <SelectTrigger className="w-full bg-brandInput border-none">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="w-full mb-2 space'">
          <Label className="mb-3">Rate location</Label>
          <div className="flex items-center gap-x-2 text-brandTextDull">
            <StarIcon className="h-5 w-5 fill-yellow-400/50 text-yellow-400/50 cursor-pointer" />
            <StarIcon className="h-5 w-5 fill-yellow-400/50 text-yellow-400/50 cursor-pointer" />
            <StarIcon className="h-5 w-5 fill-yellow-400/50 text-yellow-400/50 cursor-pointer" />
            <StarIcon className="h-5 w-5 fill-yellow-400/50 text-yellow-400/50 cursor-pointer" />
            <StarIcon className="h-5 w-5 fill-yellow-400/50 text-yellow-400/50 cursor-pointer" />
          </div>
        </div>
        <div className="w-full space-y-4">
          <Label htmlFor="message">Write Review</Label>
          <Textarea className="min-h-[170px] max-h-[400px] bg-brandBg dark:border-slate-500" placeholder="Placeholder." id="message" />
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
            disabled
            className="uppercase w-full bg-brandColor text-white hover:bg-brandColor"
          >
            Submit
          </Button>
          <DialogClose className="w-full">
            <Button
              size="lg"
              variant="outline"
              className="uppercase border-brandColor text-brandColor hover:text-brandColor w-full bg-brandBg">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReviewModal
