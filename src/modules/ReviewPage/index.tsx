import Header from "@/components/Header"
import ReviewCard from "@/components/ReviewCard"
import React from 'react'

const ReviewPage = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-start justify-between space-x-10 lg:space-x-12">
      <div className="w-full lg:w-[60%]">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="w-[40%]">
        Images
      </div>
    </div>
  )
}

export default ReviewPage
