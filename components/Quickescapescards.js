import React from 'react'

export default function Quickescapescards({ quick, hideonbig, hideonsmall, headingha }) {
    return (
        <>
            {
                quick ? <div className={`${hideonbig === 'hidden' ? 'md:hidden' : ''} ${hideonsmall === 'hidden' ? 'hidden md:inline' : ''} pb-16 relative bg-[#F6F6F6]    cursor-pointer hover:opacity-90  `}>

                    <div className=' mt-10 flex flex-col gap-y-8 justify-center items-center'>
                        <div className='relative'>
                            <p className='text-[40px] font-Oswald font-bold'>Quick Escapes</p>
                        </div>
                        <img src="cap.svg" alt="" className='absolute top-0' />
                        <img src="escaps.svg" alt="" className='absolute top-0' />
                        <div>
                            <p className='text-[16px] text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br className='hidden lg:inline' />
                                do eiusmod tempor incididunt ut labore et dolore magna <br className='hidden lg:inline' />
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br className='hidden lg:inline' />
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br className='hidden lg:inline' />
                                Duis aute irure dolor in reprehenderit in voluptate velit esse <br className='hidden lg:inline' />
                                cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>

                    </div>
                </div> : <div className=' relative     cursor-pointer hover:opacity-90  '>
                    {/* <div className=''> */}
                    <img src="Ban.png" alt="" className='h-full w-full ' />
                    {/* </div> */}
                    {/* gradient mask for image by jamshaid*/}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60'></div>
                    <div className='absolute left-1/2 -translate-x-1/2 font-Oswald bottom-2 items-center   flex flex-col'>
                        <p className='text-[18px] text-[#FFFFFF70]'>Explore</p>
                        <p className='text-[32px] font-bold text-white'>{headingha}</p>

                    </div>
                </div>
            }
        </>
    )
}
