import Comment from "@/components/Comment"
import ReviewCard from "@/components/ReviewCard"
import { gridImages, reviewCards } from "@/constants"
import { ArrowRight } from "lucide-react"
import React from 'react'

import { collection, getDocs } from "firebase/firestore"

const ReviewPage = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-end lg:items-start justify-between space-x-10">
      <div className="w-full lg:w-[60%] mr-auto flex items-start flex-col">
        <ReviewCard />
        <Comment />
        {reviewCards.map((review, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
      <div className="w-full lg:w-[40%] mb-12 grid grid-cols-2 grid-rows-2 gap-4 -ml-auto">
        {
          gridImages.map((image, index) => (
            <div className="relative w-full h-full overflow-hidden group cursor-pointer rounded-lg">
              <img key={index} src={image} alt="Grid Image" className="w-full h-full group-hover:scale-110 transition-transform object-cover" />
              {index === 3 && (
                <p className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white font-medium">
                  View more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </p>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ReviewPage
