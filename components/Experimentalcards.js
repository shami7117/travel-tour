import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
export default function Experimentalcards() {


    return (
        <>
            <div className='m-3 bg-[#FFFFFF] shadow-xl  md:mt-[30px] flex  flex-col h-[400px] smmm:w-[334px] md:w-[287px]   rounded-md'>
                <div className=' mt-[20px] border mx-[20px] rounded-md  md:w-[248px] h-[185px]'>
                    <img src="toppickssample.png" alt="" className='w-full' />
                </div>
                {/* Details */}
                <div className='mt-[30px] mx-[20px] flex flex-col'>
                    <p className='text-[24px]'>Evolve Back Corag</p>
                    <p className='font-medium text-[18px] text-[#FE8800]'>2 N & 3 D I Adults</p>

                </div>
                {/* price */}
                <div className='mx-[20px] flex gap-x-2 text-[14px]'>
                    <p className='line-through text-black'>$ 19999</p>
                    <p className=' text-[#00BCD4]'>$ 19999</p>

                </div>
                {/* Button */}
                <Link href={'/details'} className='z-[10] cursor-pointer border-black hover:border-none mx-3 mt-3 rounded-md hover:text-white hover:bg-[#00BCD4] border p-2 flex justify-center gap-x-2 items-center text-[16px]'>
                    <p>Explore Now</p>
                    <BsArrowRight className='  w-[16px] h-[20px]' />
                </Link>
            </div>
        </>
    )
}
