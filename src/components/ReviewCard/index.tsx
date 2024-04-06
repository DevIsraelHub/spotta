import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator"
import { MessageSquare, StarIcon, ThumbsDown, ThumbsUp } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/images/reviewerProfile.png" alt="Reviewer Profile Image" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <h2 className="mr-1 text-sm text-brandText font-medium">James T.</h2>
          <p className="text-sm text-brandTextDull font-normal">5 months ago</p>
        </div>
        <div>
          <span className="flex items-center gap-x-1">
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <p className="text-sm text-brandText">4.0</p>
          </span>
        </div>
      </div>
      <p className="text-brandText tex-[16px] my-4">
        There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.
      </p>
      <div className="flex items-center gap gap-x-6">
        <span className="flex items-center gap-x-1 cursor-pointer p-1 px-2 hover:bg-accent rounded-full transition-all">
          <ThumbsUp className="w-5 h-5 text-brandIcon" />
          <small className="text-brandIcon">1224</small>
        </span>
        <span className="flex items-center gap-x-1 cursor-pointer p-1 px-2 hover:bg-accent rounded-full transition-all">
          <ThumbsDown className="w-5 h-5 text-brandIcon" />
          <small className="text-brandIcon">4</small>
        </span>
        <span className="flex items-center gap-x-1 cursor-pointer p-1 px-2 hover:bg-accent rounded-full transition-all">
          <MessageSquare className="w-5 h-5 text-brandIcon" />
          <small className="text-brandIcon">124</small>
        </span>
      </div>
      <Separator className="my-6 dark:bg-slate-500" />
    </div>
  )
}

export default ReviewCard
