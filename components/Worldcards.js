import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export default function Worldcards({ headingha }) {


    return (
        <>
            <div className='cursor-pointer hover:opacity-90 items-center justify-center relative m-3 bg-[#FFFFFF]   md:mt-[30px] flex  flex-col h-[404px] smmm:w-[334px] md:w-[287px]   rounded-lg'>


                <img src="maldives.png" alt="" className='w-full h-full rounded-lg ' />
                {/* gradient mask for image */}
                <div className='rounded-lg absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60'></div>
                <div className='absolute font-Oswald bottom-2 items-center   flex flex-col'>
                    <p className='text-[16px] text-[#FFFFFF70]'>Explore</p>
                    <p className='text-[24px] font-semibold text-white'>{headingha}</p>

                </div>

            </div >
        </>
    )
}
