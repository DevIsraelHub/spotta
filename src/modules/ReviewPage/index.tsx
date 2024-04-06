import Header from "@/components/Header"
import ReviewCard from "@/components/ReviewCard"
import React from 'react'

const ReviewPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>All Reviews</h1>
        <ReviewCard />
      </div>
    </div>
  )
}

export default ReviewPage
