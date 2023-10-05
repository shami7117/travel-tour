import React from 'react'
import Tropicalcards from './Tropicalcards'

export default function Tropicalpackages() {
    return (
        <div className='flex flex-col bg-white md:bg-[#F6F6F6]'>
            <div className=' pt-[70px] pb-[70px]  flex justify-center text-center items-center text-[24px] md:text-[40px] font-Oswald'>
                <p className='font-bold text-black'>Voyaah&apos;s best Tropical packages</p>

            </div>
            <div className='grid md:grid-cols-2'>
                <Tropicalcards imgis="inter.png" headingis="International" />
                <Tropicalcards imgis="dom.png" headingis="Domestic"/>

            </div>

        </div>
    )
}
