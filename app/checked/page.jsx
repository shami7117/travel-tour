'use client'

import React from "react";
import Footer from "@/components/Footer/index";
import BannerHeader from "@/components/BannerHeader/index"
import { useState } from "react";

function Checked() {
  return (
    <>

      <BannerHeader Heading="Payment" Back="Home" front="My Account" />
      <div className="w-full py-[3.5rem] px-[2rem] space-y-8 md:space-y-0 flex-col md:flex-row flex md:justify-center md:space-x-8 items-start h-full">

        <div className="flex flex-col md:flex-row w-full md:w-[76%] max-w-[900px] px-[1.3rem] py-[2rem] justify-center items-center rounded-lg pay-shadow">
          {/* Image Icon */}
          <img
            src="/images/checked.svg"
            alt="Success Icon"
            className=" w-[100px] h-auto  mb-4"
          />

          {/* Text */}
          <div className="ml-6 ">
            <p className=" text-center md:text-left text-[20px] font-[600] ">
              James Williams, Your booking has been submitted successfully!
            </p>
            <p className=" text-center md:text-left text-[#00000099] ">
              James Williams, Your booking has been submitted successfully!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checked;
