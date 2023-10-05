'use client'
import React, { useEffect, useRef, useState } from 'react'
import Toppickscards from './Toppickscards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Toppicks() {

    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add event listener to update isMobile state when window size changes
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check and set isMobile state
        handleResize();

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 200,
        ref: sliderRef,
        responsive: [



            {
                breakpoint: 1919,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 1465,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    infinite: false,
                    dots: false,
                },
            },
        ]

    };
    return (
        <>
            <div className='relative mb-[30px]'>
                <div className='hidden md:inline absolute left-0 z-[-1]'>
                    <img src="blossom.svg" alt="" />
                </div>
                <div className='hidden md:inline absolute left-0 z-[-1]'>
                    <img src="dashhedarrow.svg" alt="" />
                </div>
                <div className='hidden md:inline absolute right-[340px] z-[-1]'>
                    <img src="cap.svg" alt="" />
                </div>

                {/* top picks cards section */}
                <div className='flex '>
                    {/* cards header */}
                    <div className='flex justify-between w-full p-2 md:p-0 md:mx-[100px] mt-5 md:mt-[70px]'>
                        <div className=' flex flex-col'>
                            <p className='z-[2] relative text-[24px] md:text-[40px] font-Oswald font-bold'>Our top picks</p>
                            <img src="Picks.svg" alt="" className='hidden md:inline absolute top-[21px]' />

                        </div>

                        {/* buttons to move cards */}
                        <div className='hidden md:flex gap-x-3'>


                            <img src="left.svg" alt="" className='cursor-pointer hover:opacity-80' onClick={next} />
                            <img src="right.svg" alt="" className='cursor-pointer hover:opacity-80' onClick={previous} />

                        </div>

                    </div>


                </div>
                <div className=' md:mx-[100px] flex flex-col'>
                    <p className='p-2 md:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className='hidden md:inline' /> incididunt ut labore et dolore magna aliqua.</p>
                    {/* top pics cards */}

                    {/* Conditionally render the Slider component */}
                    {isMobile ? (
                        <div className='flex flex-col mt-4 gap-4 mx-auto  '>
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                        </div>
                    ) : (
                        <Slider {...settings} ref={sliderRef} className='overflow-hidden'>
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                            <Toppickscards />
                        </Slider>
                    )}


                </div >




            </div >
        </>
    )
}
