import React from 'react'
import Image from 'next/image'
import r1 from '../public/images/review1.png'
import fillStar from "../public/images/colorstar.png"
import unFillStar from "../public/images/unfillStar.png"

const Review = () => {
  return (
    <div className='w-auto md:w-[412px] h-[300px] p-6 md:p-2 flex flex-col justify-around bg-white  rounded-md shadow-xl z-10'>
      <div className='flex flex-row items-center text-center p-2 bg-[#f9f9f9]'>
        <div>
          <Image src={r1} />
        </div>
        <p className='flex flex-col items-center pl-[5px]'>
          <span className="font-[700px]">Joel Elliot</span>
          <span className="text-[grey]">Traveler</span>
        </p>

      </div>

      <div className="mt-[5px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-row ml-[10px] gap-2">
        <Image src={fillStar} />
        <Image src={fillStar} />
        <Image src={fillStar} />
        <Image src={unFillStar} />
        <Image src={unFillStar} />
      </div>
    </div>
  )
}

export default Review
