import React from 'react';

export default function Tropicalcards({ imgis, headingis }) {

    return (
        <div>
            <div className='cursor-pointer hover:opacity-90 relative flex flex-col justify-center items-center'>
                {/* gradient mask for image by jamshaid*/}
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70'></div>
                <img src={imgis} alt="" className='w-full h-[490px] object-cover ' />
                {/* content */}
                <div className='absolute flex flex-col gap-y-6 justify-center items-center'>
                    <div className='  text-[#FE8800]'>
                        <p className=' font-semibold font-Lovelight text-[38px] lg:text-[80px]'>{headingis}</p>
                    </div>

                    <div className='cursor-pointer flex justify-center items-center border-2 border-dashed p-2 h-[50px] w-[183px] gap-x-2 rounded-md bg-[#00BCD4]'>
                        <button className='text-white text-[16px]'>
                            Explore Now
                        </button>
                        <img src="rightarrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}







