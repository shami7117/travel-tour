import React from 'react'

export default function Groupbookingscards({ title }) {
    return (
        <div className=' relative   cursor-pointer hover:opacity-90  '>
            <div className=''>
                <img src="staycations.png" alt="" className='h-full w-full' />
            </div>
            {/* gradient mask for image by jamshaid*/}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60'></div>
            <div className='text-[32px]  text-white left-1/2 -translate-x-1/2 absolute bottom-[32px]'>
                <p className='font-Oswald font-semibold'>{title}</p>

            </div>
        </div>
    )
}
