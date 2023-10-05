'use client'


import React from "react";
import Image from "next/image";
import classimg from "../../public//images/class.png";
import img1 from "../../public/images/mountain.png";
import img2 from "../../public/images/enjoy2.png";
import capimg from "../../public/images/cap.png";
import tourImg from "../../public/images/detail-tours.png"
import CustomerReview from "@/components/CustomerReview";
import badge from "../../public/images/badge.svg"
import peopleicon from "../../public/images/peopleicon.svg"
import sheild from "../../public/images/sheild.svg"
import booking from "../../public/images/booking.svg"
import BannerHeader from "@/components/BannerHeader/index"
import Footer from "@/components/Footer/index"


const page = () => {
  return (
    <>
      <BannerHeader Heading={"Evolve Back Corag"} Back={"Home"} front={"Details"} />
      <div className=" max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row mt-[100px] w-[100%] justify-between p-4 md:p-20 relative  ">
          <div className="flex flex-col gap-x-4  md:w-[60%] ">
            <div className="max-w-full md:max-w-[634px] w-full">
              <div className="flex flex-row items-center ">
                <h1 className="text-[40px] z-[-99] font-medium ">
                  We Help You Planning Your Journey
                </h1>
                <Image src={capimg} />
              </div>
              <p className=" ">
                Treat yourself with a journey to your inner self. Visit a mystique
                and start your spiritual adventure with comes to exploring exotic
                place. We promise, you will enjoy each and every step you make.Treat
                yourself with a journey to your inner self. Visit a mystique and
                start your spiritual adventure.
              </p>
              <p>
                Treat yourself with a journey to your inner self. Visit a mystique
                and start your spiritual adventure with comes to exploring exotic
                place. We promise,
              </p>
            </div>

            <div className="flex flex-row relative justify-between">
              <div className="flex-col flex gap-6 md:gap-3">

                <div className="flex flex-row gap-2">
                  <div className="w-[50px] h-[50px] bg-[#FE8800] flex justify-center items-center rounded-md">
                    <Image src={badge} />
                  </div>
                  <div>
                    <h2 className="text-[18px] font-normal">First Class Flights</h2>
                    <p>
                      The point of using Lorem Ipsum .The point of using Lorem Ipsum
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <div className="w-[50px] h-[50px] bg-[#FE8800] flex justify-center items-center rounded-md">
                    <Image src={badge} />
                  </div>
                  <div>
                    <h2 className="text-[18px] font-normal">First Class hotels</h2>
                    <p>
                      The point of using Lorem Ipsum .The point of using Lorem Ipsum
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">

                  <div>
                    <h2 className="text-[18px] font-normal">First Class tour cars</h2>
                    <p>
                      The point of using Lorem Ipsum .The point of using Lorem Ipsum
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex flex-row justify-center absolute right-[-12%] bottom-[-80%]   ">
                <Image className="hidden lg:flex " src={img2} />
              </div>
            </div>

          </div>

          <Image className="w-full md:w-[40%] md:mt-0 mt-[40px]" src={img1} />

        </div>

        <div className="mt-[50px] bgset h-[490px] w-full bg-no-repeat bg-cover  flex flex-col items-center justify-center text-white">

          <div className="text-center ">
            <h1 className="text-[40px] font-medium">Why Choose Us?</h1>
            <p className="mt-[10px] w-auto md:w-[600px]">Treat yourself with a journey to your inner self. Visit a mystique and start your spiritual adventure with comes to exploring exotic place. We promise,</p>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center  md:p-0  ">
          <div className="flex-col md:flex-row flex items-center max-w-[1150px] w-[80%] md:gap-0 gap-4 bg-white shadow-xl p-14">
            <div className="flex flex-col text-center items-center gap-2">
              <div className="w-[50px] h-[50px] bg-[#FE8800] flex justify-center items-center rounded-md">
                <Image src={badge} />
              </div>
              <div>
                <h2 className="text-[18px] font-medium">Competitive Pricing</h2>
                <p className="w-[240px]">
                  We offer the most reasonable price throughout market.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-center items-center gap-2">
              <div className="w-[50px] h-[50px] bg-[#FE8800] flex justify-center items-center rounded-md">
                <Image className="w-[30px]" src={peopleicon} />
              </div>
              <div>
                <h2 className="text-[18px] font-medium">Competitive Pricing</h2>
                <p>
                  We offer the most reasonable price throughout market.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-center items-center gap-2">
              <div className="w-[50px] h-[50px] bg-[#FE8800] flex justify-center items-center rounded-md">
                <Image className="w-[30px]" src={booking} />
              </div>
              <div>
                <h2 className="text-[18px] font-medium">Back Team</h2>
                <p>
                  We offer the most reasonable price throughout market.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-center items-center gap-2">
              <div className="w-[50px] h-[50px] bg-[#FE8800] flex justify-center items-center rounded-md">
                <Image className="w-[30px]" src={sheild} />
              </div>
              <div>
                <h2 className="text-[18px] font-medium">Stay Safe</h2>
                <p>
                  We offer the most reasonable price throughout market.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div>
          <p className="text-[40px] font-medium text-center mt-[50px]"> Enough About Us. Where can we take you ?</p>
        </div>
        <div >
          <Image className="mt-[50px] h-[250px]  md:h-auto w-[100%] " src={tourImg} />
        </div>


      </div>
      <CustomerReview />
      <Footer />

    </>
  );
};

export default page;
