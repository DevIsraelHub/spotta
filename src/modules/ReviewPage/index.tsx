"use client";

import ReviewCard from "@/components/ReviewCard"
import { gridImages } from "@/constants"
import { ArrowRight } from "lucide-react"
import React, { Suspense, useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/config/firbase";
import { MainReviewProp } from "@/types";


const ReviewPage = () => {
  const [reviews, setReviews] = useState<MainReviewProp[]>();

  const getReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const AllReviews = querySnapshot.docs.map(doc => ({
      id: doc.id, ...doc.data()
    }))
    setReviews(AllReviews as MainReviewProp[])
  }

  useEffect(() => {
    getReviews()
  }, [reviews])

  return (
    <>
      <div className="w-full flex flex-col-reverse lg:flex-row items-end lg:items-start justify-between space-x-10">
        <div className="w-full lg:w-[60%] mr-auto flex items-start flex-col">
          <Suspense fallback={<h2>Loading Reviews...</h2>}>
            {reviews?.map((review, index) => (
              <ReviewCard review={review} i={index} key={index} />
            ))}
          </Suspense>
        </div>
        <div className="w-full lg:w-[40%] mb-12 grid grid-cols-2 grid-rows-2 gap-4 -ml-auto">
          {
            gridImages.map((image, index) => (
              <div key={index} className="relative w-full h-full overflow-hidden group cursor-pointer rounded-lg">
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
    </>
  )
}

export default ReviewPage
