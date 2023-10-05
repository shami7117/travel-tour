import React from 'react'
import Image from 'next/image'
import r1 from '@/public/review1.png'

const reviewCard = () => {
    return (
        <div className='w-[412px] h-[300px]  p-2'>
            <div className='flex flex-row items-center text-center'>
                <div>
                    <Image src={r1} />
                </div>
                <p className='flex flex-col items-center'>
                    <span>Joel Elliot</span>
                    <span>Traveler</span>
                </p>

            </div>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}

export default reviewCard
