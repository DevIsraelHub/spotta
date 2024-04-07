import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"

import { reviewCards } from "@/constants/index"
import { MessageSquare, StarIcon, ThumbsDown, ThumbsUp } from "lucide-react";

const ReviewCardCarousel = ({ animation = "animate-loop-scroll" }: {
  animation?: string
}) => {

  return (
    <div className="flex flex-col max-h-[90%] items-end overflow-hidden w-full h-full space-y-4">
      {reviewCards.map((card) => (
        <Card key={card.id} className={`${animation} bg-brandCard border-none w-full h-full xl:w-[280px] xl:h-max`}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-start gap-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/images/reviewerProfile.png" alt="Reviewer Profile Image" />
                  <AvatarFallback>JT</AvatarFallback>
                </Avatar>
                <div className="">
                  <h2 className="text-sm text-brandText font-semibold">{card.name}</h2>
                  <p className="text-xs text-brandTextDull font-normal">
                    {card.date}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-sm text-brandText font-semibold">
                  {card.location}
                </h2>
                <div className="flex items-center gap-x-[1px] text-brandTextDull">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                      key={index}
                      size={20}
                      fill="currentColor"
                      className={`h-4 w-4 ${index < card.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </CardTitle>
            <CardDescription className="text-brandText">
              {card.review}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <span className="flex items-center gap-x-1">
                <ThumbsUp className="w-4 h-4 text-brandTextDull" />
                <small className="text-brandTextDull">24</small>
              </span>
              <span className="flex items-center gap-x-1">
                <ThumbsDown className="w-4 h-4 text-brandTextDull" />
                <small className="text-brandTextDull">02</small>
              </span>
              <span className="flex items-center gap-x-1">
                <MessageSquare className="w-4 h-4 text-brandTextDull" />
                <small className="text-brandTextDull">125</small>
              </span>
            </div>
            <Badge className={`lowercase border border-blue-500 hover:bg-blue-500/20 bg-blue-500/10 text-blue-500`}>
              {card.condition}
            </Badge>
          </CardFooter>
        </Card>
      ))
      }
    </div>
  )
}

export default ReviewCardCarousel
