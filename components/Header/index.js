import React from 'react'

export default function Header() {
    return (
        <>
            <div className='hidden lg:inline absolute top-[17px]  w-full border-white/25 pb-[18px] border-b-2 border-dashed '>
                <div className='mx-[100px] flex justify-between '>
                    {/* left */}
                    <div className='flex justify-center items-center gap-x-6'>
                        <div className='flex gap-x-2'>
                            <img src="phone.svg" alt="" />
                            <p className='text-white  text-[14px]'>Phone: +913 578 5555</p>
                        </div>
                        <div className='flex justify-center items-center gap-x-2 '>
                            <img src="email.svg" alt="" />
                            <p className='text-white text-[14px]'>Email: User78@email.com</p>
                        </div>

                    </div>
                    {/* right */}
                    <div className='flex justify-center items-center gap-x-4'>
                        <div>
                            <p className='text-[14px] text-white'>Follow Us:</p>
                        </div>
                        {/* icons */}
                        <div className='flex gap-x-2'>
                            <img src="face.svg" alt="" className='cursor-pointer' />
                            <img src="insta.svg" alt="" className='cursor-pointer' />
                            <img src="twitter.svg" alt="" className='cursor-pointer' />
                            <img src="you.svg" alt="" className='cursor-pointer' />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}