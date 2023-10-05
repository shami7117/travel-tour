import React from 'react'
import Image from 'next/image'
import img4 from "../public/images/trees.png"
import Review from './Review'
import r1 from "../public/images/review1.png"
import r2 from "../public/images/review1.png"
import r3 from "../public/images/review1.png"

const CustomerReview = () => {
  return (
    <div className='w-[100%] overflow-x-hidden'>

      <div className="ml-0 md:ml-[70px] mt-[50px] md:mt-[150px]">
        <div className=" flex flex-col md:flex-row  md:justify-between mt-[40px] md:mt-[70px] p-5">
          <div className="md:w-[60%] bg-[url('/images/bg-arrow.png')]">
            <h1 className="text-[40px] w-auto  md:w-[380px] font-[900]">Our Customer Love What We DO</h1>
            <p className="w-auto md:w-[400px] md:mt-0 mt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="md:w-[40%] w-auto md:mt-0 mt-[15px]">
            <Image src={img4} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-3 mt-[10px] md:transform md:translate-y-[-400px] ">

        <Review img={r1} rating={3} />
        <Review img={r2} rating={4} />
        <Review img={r3} rating={4} />

      </div>

    </div>


  )
}

export default CustomerReview
