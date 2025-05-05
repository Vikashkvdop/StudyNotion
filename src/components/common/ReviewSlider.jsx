import React, { useEffect, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import 'swiper/css/autoplay';
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import {  FreeMode, Pagination } from "swiper/modules"
import { Autoplay } from 'swiper/modules'; 

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"
import StarRatings from "react-star-ratings"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  // console.log(reviews)

  return (
  <div className="text-white w-full flex justify-center ">
    <div className="my-[50px] w-full max-w-[1200px]">
      <Swiper
        slidesPerView={3}
        
        spaceBetween={25}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full"
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col gap-3 bg-gray-900 p-4 rounded-lg text-sm text-gray-200 h-[200px] ">
              <div className="flex items-center gap-4">
                <img
                  src={
                    review?.user?.image
                      ? review?.user?.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                  }
                  alt="User avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-gray-100">
                    {`${review?.user?.firstName} ${review?.user?.lastName}`}
                  </h1>
                  <h2 className="text-xs font-medium text-gray-400">
                    {review?.course?.courseName}
                  </h2>
                </div>
              </div>
              <p className="font-medium text-gray-300 overflow-hidden text-ellipsis">
                {review?.review.split(" ").length > truncateWords
                  ? `${review?.review
                      .split(" ")
                      .slice(0, truncateWords)
                      .join(" ")} ...`
                  : `${review?.review}`}
              </p>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-yellow-300">
                  {review.rating.toFixed(1)}
                </h3>
                <StarRatings
                  rating={review.rating}
                  starRatedColor="#ffd700" // Gold
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                  name="rating"
                />

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

}

export default ReviewSlider