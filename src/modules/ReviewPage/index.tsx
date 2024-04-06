import Header from "@/components/Header"
import ReviewCard from "@/components/ReviewCard"
import React from 'react'

const ReviewPage = () => {
  return (
    <div className="w-full flex items-start justify-between">
      <div className="w-[60%]">
        <ReviewCard />
      </div>
      <div className="w-[40%]">
        Images
      </div>
    </div>
  )
}

export default ReviewPage
