'use client'
import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





// my custom images path
const images = ["slider.png", "slider.png", "slider.png"];
export default function Sliderr() {

    const sliderRef = useRef(null);
    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref: sliderRef,

    };

    return (
        <>
            <div className='relative '>
                <Slider {...settings} ref={sliderRef} className='overflow-hidden'>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt=""
                                className='h-[376px] md:h-full bg-cover w-full '
                            />
                        </div>
                    ))}
                </Slider>
                {/* middle content */}
                <div className='flex  flex-col mx-[30px]  md:mx-[100px] absolute top-[100px] lg:top-[180px] xl:top-[240px]'>
                    <div className='leading-tight  flex flex-col'>
                        <p className='text-[18px] lg:text-[32px] font-Lovelight text-[#FE8800] font-semibold '>One of the best travel partner</p>
                        <p className='text-[24px] lg:text-[64px] font-Oswald heig'>
                            Let&apos;s Leave The Road <br />
                            And Take <span className='text-border font-Lovelight text-[#FE8800] font-semibold  '>The Trails</span>
                        </p>

                    </div>
                    {/* Buttons */}
                    <div className=' flex flex-col justify-start items-start'>
                        {/* button Lets go */}
                        <div className='mt-6 cursor-pointer flex justify-center items-center border-2 border-dashed p-2 h-[50px] w-[151px] gap-x-2 rounded-md bg-[#00BCD4]'>
                            <button className=' text-white text-[16px]'>
                                Let&apos;s Go
                            </button>
                            <img src="rightarrow.svg" alt="" />
                        </div>
                        {/* left,right buttons */}
                        <div className='hidden md:flex gap-x-3  mt-[20px]'>

                            <img src="left.svg" alt="" className='cursor-pointer hover:opacity-80' onClick={next} />
                            <img src="right.svg" alt="" className='cursor-pointer hover:opacity-80' onClick={previous} />

                        </div>
                        {/* for mobile */}
                        <div className=' flex md:hidden  w-[80vw] justify-between  relative bottom-[75px] mx-0'>

                            <img src="leftside.svg" alt="" className='cursor-pointer hover:opacity-80' onClick={next} />
                            <img src="rightside.svg" alt="" className='cursor-pointer hover:opacity-80' onClick={previous} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
