import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import BannerHeader from "@/components/BannerHeader/index"
import Footer from "@/components/Footer/index"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Listings = () => {

    const router = useRouter();

    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isPropertyOpen, setIsPropertyOpen] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const toggleCollapse = () => {
        setIsPriceOpen(!isPriceOpen);
        console.log("PRICE", isPriceOpen)
    };
    const togglePropertyCollapse = () => {
        setIsPropertyOpen(!isPropertyOpen);
    };
    const toggleThemeCollapse = () => {
        setIsThemeOpen(!isThemeOpen);
    };
    const priceController = () => {
        setIsPriceOpen(!isPriceOpen);
    }
    return (
        <>
            <BannerHeader Heading={"Holiday"} Back={"Home"} front={"Listing"} />
            <div className='px-[40px]  max-w-[1500px] gap-10 mx-auto flex flex-col md:flex-row justify-between items-start py-[80px]'>

                {/* Filters */}
                <div className='flex gap-y-8 max-w-[100%] w-full  md:max-w-[30%] w-full flex-col justify-center items-start'>
                    {/* Price */}
                    <div className="border rounded-[10px] w-full   border-solid border-[1px] bg-[#FBFFFF] max-w-full w-full border-[#00000017] p-4">
                        <div className="flex pb-4 justify-between border-b-solid border-b-[#0000000F] border-b-[1px] items-center cursor-pointer" onClick={priceController}>
                            <h2 className="text-lg font-semibold">Filter by Price</h2>
                            <span className={`transform transition-transform ${isPriceOpen ? 'rotate-180' : 'rotate-0'}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isPriceOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                                    />
                                </svg>
                            </span>
                        </div>
                        {isPriceOpen && <div className="mt-4 gap-y-4 flex flex-col justify-center items-start ">
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E]">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Rs 10,000 & Below                            </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E]">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Rs 10,001 to Rs 25,000                            </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Rs 25,001 to Rs 50,000                    </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Rs 50,001 to Rs 1,00,000                                           </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Rs 1,00,001 to Rs 2,00,000                                        </label>
                        </div>}
                    </div>
                    {/* end of Price */}

                    {/* Property */}
                    <div className="border rounded-[10px] w-full   border-solid border-[1px] bg-[#FBFFFF] max-w-full w-full border-[#00000017] p-4">
                        <div className="flex pb-4 justify-between border-b-solid border-b-[#0000000F] border-b-[1px] items-center cursor-pointer" onClick={togglePropertyCollapse}>
                            <h2 className="text-lg font-semibold">Filter by Property</h2>
                            <span className={`transform transition-transform ${isPropertyOpen ? 'rotate-180' : 'rotate-0'}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isPropertyOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                                    />
                                </svg>
                            </span>
                        </div>
                        {isPropertyOpen && <div className="mt-4 gap-y-4 flex flex-col justify-center items-start ">
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E]">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                4 Start
                            </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E]">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                5 Start
                            </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Luxury                    </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Boutique                                           </label>
                            <label className="custom-checkbox text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Hotels                                        </label>
                        </div>}
                    </div>
                    {/* end of Property */}
                    {/* Theme */}
                    <div className="border rounded-[10px] w-full   border-solid border-[1px] bg-[#FBFFFF] max-w-full w-full border-[#00000017] p-4">
                        <div className="flex pb-4 justify-between border-b-solid border-b-[#0000000F] border-b-[1px] items-center cursor-pointer" onClick={toggleThemeCollapse}>
                            <h2 className="text-lg font-semibold">Filter by Theme</h2>
                            <span className={`transform transition-transform ${isThemeOpen ? 'rotate-180' : 'rotate-0'}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isThemeOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                                    />
                                </svg>
                            </span>
                        </div>
                        {isThemeOpen && <div className="mt-4 gap-y-4 flex flex-col justify-center items-start ">
                            <label className="custom-checkbox  text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Hills & Mountains                        </label>
                            <label className="custom-checkbox  text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Beaches                        </label>
                            <label className="custom-checkbox  text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Backwaters                                             </label>
                            <label className="custom-checkbox  text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Wildlife & Safari                                                                     </label>
                            <label className="custom-checkbox  text-[16px] text-[#2E2E2E] ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Adventures                                                              </label>


                            <button
                                class="select-none mt-10 w-full rounded-lg bg-[#00BCD4] py-4 px-6 text-center align-middle  text-xs font-bold uppercase text-white  active:opacity-[0.85] "
                                type="button"
                                data-ripple-light="true"
                            >
                                Apply Now
                            </button>
                        </div>}
                    </div>
                    {/* end of Theme */}

                </div>
                {/* end of Filters */}

                {/* Cards */}
                <div className='max-w-[100%] gap-y-10 md:max-w-[70%] w-full flex flex-col justify-center items-center'>
                    <div className='grid w-full  grid-cols-1  xl:grid-cols-2 gap-8'>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
                                return <div key={index}> <div class="relative  border-[1px] z-[-99] p-4 border-[#0000000F] gap-x-2  h-full flex max-w-full xl:max-w-[451px] w-full flex rounded-[5px] bg-white bg-clip-border text-gray-700  shadow-md">
                                    <div class="relative  max-w-full w-full min-h-[181px]     overflow-hidden rounded-[5px] bg-blue-gray-500 bg-clip-border text-white ">
                                        <Image className="object-cover" fill
                                            src="/maldive.svg"
                                            alt="img-blur-shadow"
                                        />
                                        <div className='bg-[#FE880078] rounded-[66px] py-.5 px-3 absolute bottom-[5px] left-[5px]'>Maldives</div>
                                    </div>
                                    <div className='flex flex-col justify-between items-between'>
                                        <div class="py-3 w-full">
                                            <h5 class="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Evolve Back Corag                    </h5>
                                            <p class="block font-medium text-[13px] font-light leading-relaxed text-[#0000004D] antialiased">
                                                2 N & 3 D I Adults                    </p>
                                            <p class="block font-medium text-[13px] font-light leading-relaxed text-[#000000] antialiased">
                                                Daily breakfast, lunch & dinner , Daily unlimited premium alcoholic & non-alcoholic beverages                   </p>

                                        </div>
                                        <div class=" w-full flex flex-col xl:flex-row justify-between">
                                            <p className='text-[#00BCD4]'><s className='text-[#000]'>$ 99999</s> $ 99999</p>
                                            <button
                                                onClick={() => { router.push('/payment') }}
                                                class="select-none cursor-pointer w-full rounded-lg bg-[#00BCD4] py-2 max-w-[252px] xl:max-w-[87px] w-full px-2 text-center align-middle  text-xs font-bold uppercase text-white  active:opacity-[0.85] "
                                                type="button"
                                                data-ripple-light="true"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            })
                        }
                    </div>

                    {/* Pagination */}

                    <nav aria-label="Page navigation  example">
                        <ul class="flex items-center -space-x-px h-10 text-base">
                            <li>
                                <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-[#000000] bg-white border border-[#FE8800] rounded-l-lg hover:bg-[#FE8800]  border-[#FE8800] dark:text-gray-400 hover:bg-[#FE8800] dark:hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-[#000000] bg-white border border-[#FE8800] hover:bg-[#FE8800]  border-[#FE8800] dark:text-gray-400 hover:bg-[#FE8800] dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-[#000000] bg-white border border-[#FE8800] hover:bg-[#FE8800]  border-[#FE8800] dark:text-gray-400 hover:bg-[#FE8800] dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" class=" flex items-center justify-center px-4 h-10 leading-tight  border border-[#FE8800] bg-[#FE8800] hover:bg-[#FE8800] border-[#FE8800] bg-[#FE8800] dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-[#000000] bg-[white] border border-[#FE8800] hover:bg-[#FE8800]  border-[#FE8800] dark:text-gray-400 hover:bg-[#FE8800] dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-[#000000] bg-white border border-[#FE8800] hover:bg-[#FE8800]  border-[#FE8800] dark:text-gray-400 hover:bg-[#FE8800] dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-[#000000] bg-white border border-[#FE8800] rounded-r-lg hover:bg-[#FE8800]  border-[#FE8800] dark:text-gray-400 hover:bg-[#FE8800] dark:hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* end of Pagination */}
                </div>
                {/* end of Cards */}
            </div>
            <Footer />

        </>
    )
}

export default Listings