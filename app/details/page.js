'use client'
import React from 'react'
import DetailsThumb from "@/components/DetailsGallery/index";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import BannerHeader from "@/components/BannerHeader/index"
import Footer from "@/components/Footer/index"
import { useRouter } from 'next/navigation';
const Detail = () => {
    const router = useRouter();

    const [products, setProducts] = useState([
        {
            _id: "1",
            title: "Clubfoot Shoes Mitchell Ponseti® AFO standard (grey)",
            src: [
                "/img2.svg",
                "/img3.svg",
                "/img4.svg",
                "/img5.svg",],
            reviews: "4.5 (10 Reviews)",
            cutprice: "$159.00",
            price: "$120.00 ",
            description:
                "Standard ankle foot orthotic for use with the Ponseti method Standard ankle foot orthotic for use with the Ponseti method of clubfoot correction. Our patented system features a hard sole, a soft...s",
            points: [
                "Patented, high-quality footwear system based on the Ponseti Method",
                "Straps & soft synthetic leather body",
                "increased heel visibility",
                "Easy locking and releasing of footwear, which attaches to the Ponseti Abduction Bar",
                "Dorsiflexion built into Ponseti Abduction Bar",
            ],
            count: 1,
        },
    ]);

    const [index, setIndex] = useState(0);
    const myRef = useRef(null);

    const handleTab = (index) => {
        setIndex(index);
        const images = myRef.current.children;

        for (let i = 0; i < images.length; i++) {
            if (i === index) {
                images[i].classList.add("active");
            } else {
                images[i].classList.remove("active");
            }
        }
    };

    useEffect(() => {
        const images = myRef.current?.children; // Use optional chaining to check if myRef.current is defined

        if (images) {
            for (let i = 0; i < images.length; i++) {
                if (i === index) {
                    images[i].classList.add("active");
                } else {
                    images[i].classList.remove("active");
                }
            }
        }
    }, [index]);

    const images = [
        '/singapore.svg',
        '/right2.svg',
        '/left2.svg',
        '/singapore.svg',
        '/right2.svg',
    ]
    const imagesWithIds = images.map((imagePath, index) => ({
        id: `${index + 1}`,
        path: imagePath,
    }));
    console.log(imagesWithIds)

    const activeImageIndex = index;
    return (<>
        <BannerHeader Heading={"The Serai Bandipur"} Back={"Home"} front={"The Serai Bandipur"} />
        <div className='px-[40px] max-w-[1500px] gap-10 mx-auto flex flex-col md:flex-row justify-between items-start py-[80px]'>

            {/* Left Part */}
            <div className="flex flex-col mx-auto md:mx-0 max-w-full  md:max-w-[60%] w-full justify-start items-start">
                <h1 className='text-[40px] text-[#000] font-semibold oswald'>The Serai Bandipur</h1>
                <h3 className='text-[24px] text-[#000] font-normal oswald mb-4'>Karnataka</h3>
                <div className=" p-6 md:p-0 w-full justify-center items-center flex rounded-[10px] ">
                    <Image
                        src={products[0].src[activeImageIndex]}
                        alt=""
                        width={617}
                        height={431}
                        className=" transition-all duration-300 rounded-[10px]"
                        style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "10px" }}
                    />
                </div>

                <div className='mt-5 w-full'>
                    <DetailsThumb images={products[0].src} activeIndex={activeImageIndex} tab={handleTab} myRef={myRef} />
                </div>

                <div className='bg-[#FBFFFF] bg-opacity-90 shadow-md border-[1px] border-[#00000017] rounded-[10px] p-4 mt-8'>
                    {/* About */}
                    <div className='pb-4 flex flex-col justify-start items-start border-b-solid border-b-[1px] border-b-[#0000002B]'>
                        <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>About Hotel</h3>
                        <p className='text-[16px] text-[#000] font-normal oswald mb-4'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                        </p>
                    </div>
                    {/* end of About */}


                    {/* Inclusions */}
                    <div className='py-4 flex flex-col justify-start items-start border-b-solid border-b-[1px] border-b-[#0000002B]'>
                        <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>Inclusions </h3>
                        <ul className='text-[16px] text-[#000] ml-4 font-normal oswald mb-4' style={{ listStyleType: 'disc' }}>
                            <li className='text-[#000]'>Daily Breakfast</li>
                            <li className='text-[#000]'>Inclusive of all taxes</li>
                            <li className='text-[#000]'>Free Cancellation until 20 days prior to check-in</li>
                        </ul>

                    </div>
                    {/* end of Inclusions */}


                    {/* Highlights */}
                    <div className='py-4 flex flex-col justify-start items-start border-b-solid border-b-[1px] border-b-[#0000002B]'>
                        <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>Highlights </h3>
                        <div className='text-[16px] flex-wrap flex  text-[#000] ml-4 font-normal oswald mb-4' >
                            <label class="custom-checkbox ">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                SPA
                            </label>

                            <label class="custom-checkbox ml-4">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Swimming Pool
                            </label>

                            <label class="custom-checkbox ml-4">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Fitness center                            </label>

                            <label class="custom-checkbox ml-4">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Bicycle                          </label>
                            <label class="custom-checkbox ml-4">
                                <input type="checkbox" />
                                <span class="checkbox-label"></span>
                                Games Room                          </label>
                        </div>
                    </div>
                    {/* end of Highlights */}

                    <div className='py-4 flex flex-col justify-start items-start border-b-solid border-b-[1px] border-b-[#0000002B]'>
                        <div className='flex w-full justify-between items-center'>
                            <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>Itinerary </h3>
                            <div className='flex  justify-center items-center'>


                                <div class="flex justify-center items-center">
                                    <Image width={20} height={20} src={'/share.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Share
                                    </span>
                                </div>
                                <div class="flex ml-4 justify-center items-center">
                                    <Image width={20} height={20} src={'/download.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Download
                                    </span>
                                </div>
                                <div class="flex ml-4 justify-center items-center">
                                    <Image width={20} height={20} src={'/print.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Print
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* Cards */}
                        {
                            imagesWithIds.map((img) => {
                                return <div key={img.id}
                                    class="flex  flex-col border-solid my-5 border-[1px] border-[#00000026] rounded-lg bg-[#228C990A] w-full lg:flex-row">
                                    <div className={`w-full lg:w-[50%] min-h-full ${img.id % 2 === 0 ? "order-last" : "order-first"}`}>
                                        <Image width={361} height={321}
                                            class=" min-h-full w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
                                            src={img.path}
                                            alt="" />
                                    </div>
                                    <div class="flex w-full lg:w-[50%] flex-col justify-center  items-start text-[#000000] justify-start p-6">
                                        <h5
                                            className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>
                                            Day 1: In Singapure                                </h5>
                                        <p className='text-[16px] text-[#000]  font-normal oswald mb-4'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore..
                                        </p>

                                    </div>
                                </div>
                            })
                        }

                        {/* end of Cards */}

                        <div className='py-4 flex flex-col justify-start items-start '>
                            <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>Room Amenities </h3>
                            <div className='text-[16px] text-[#000] ml-4 font-normal oswald mb-4' style={{ listStyleType: 'disc' }}>
                                <div className='flex gap-4 flex-wrap justify-start items-start'>


                                    <div class="flex justify-center items-center">
                                        <Image width={20} height={20} src={'/icon1.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Mini Bar
                                        </span>
                                    </div>
                                    <div class="flex  justify-center items-center">
                                        <Image width={20} height={20} src={'/icon2.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Bath Tub
                                        </span>
                                    </div>
                                    <div class="flex  justify-center items-center">
                                        <Image width={20} height={20} src={'/icon3.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    In-room safe
                                        </span>
                                    </div>
                                    <div class="flex  justify-center items-center">
                                        <Image width={20} height={20} src={'/icon4.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Cofee & Espresso making facilities
                                        </span>
                                    </div>
                                    <div class="flex  justify-center items-center">
                                        <Image width={20} height={20} src={'/icon5.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Hair Drive
                                        </span>
                                    </div>
                                    <div class="flex  justify-center items-center">
                                        <Image width={20} height={20} src={'/icon6.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Sea View
                                        </span>
                                    </div>
                                    <div class="flex  justify-center items-center">
                                        <Image width={20} height={20} src={'/icon7.svg'} />
                                        <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Air Condiontiong
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='py-4 flex flex-col justify-start items-start border-b-solid border-b-[1px] border-b-[#0000002B]'>
                        <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>Room Amenities </h3>
                        <div className='text-[16px] text-[#000] ml-4 font-normal oswald mb-4' style={{ listStyleType: 'disc' }}>
                            <div className='flex gap-4 flex-wrap justify-start items-start'>


                                <div class="flex justify-center items-center">
                                    <Image width={20} height={20} src={'/icon8.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Gym
                                    </span>
                                </div>

                                <div class="flex  justify-center items-center">
                                    <Image width={20} height={20} src={'/icon9.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    SPA
                                    </span>
                                </div>
                                <div class="flex  justify-center items-center">
                                    <Image width={20} height={20} src={'/icon10.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Swimming
                                    </span>
                                </div>
                                <div class="flex  justify-center items-center">
                                    <Image width={20} height={20} src={'/icon11.svg'} />
                                    <span className='text-[16px] text-[#000] ml-4 font-normal oswald '>                                    Wifi
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Terms and Conditions */}
                    <div className='py-4 flex flex-col justify-start items-start'>
                        <h3 className='text-[24px] mb-4 text-[#000] font-normal oswald mb-4'>Terms and Conditions </h3>
                        <p className='text-[16px] text-[#000] font-normal oswald mb-4'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.<br /> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                        </p>
                    </div>
                    {/* end of Terms and Conditions */}
                </div>

            </div>
            {/*  end of Left Part */}


            {/* Right part */}
            <div className="flex flex-col mx-auto md:mx-0 mt-[80px]  max-w-full  md:max-w-[40%] w-full justify-start items-start">
                {/* Form */}
                <div className='bg-[#FBFFFF] w-full bg-opacity-90 shadow-md border-solid border-[1px] border-[#00000017] rounded-[10px] p-4 mt-8'>
                    <div className='flex gap-4 w-full justify-between mt-5 items-center'>
                        {/* <DatePicker style={{
                            width: "100%",
                            height: "50px"
                        }} /> */}
                        <input type="date" className='rounded-[6px] border-[1px] opacity-60 border-solid border-[#00000042] px-3 outline-none bg-transparent py-3 w-full h-full' />
                        {/* <TimePicker style={{
                            width: "100%",
                            height: "50px"
                        }} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} /> */}
                        <input type="time" placeholder='Time' value="13:00" step="900" className='rounded-[6px] border-[1px] opacity-60 border-solid border-[#00000042] px-3 outline-none bg-transparent py-3 w-full h-full' />

                    </div>
                    <div className='flex gap-4 mt-5 justify-between items-center'>
                        <select className='rounded-[6px] border-[1px] opacity-60 border-solid border-[#00000042] px-3 outline-none bg-transparent py-3 w-full h-full'>
                            <option>Children</option>
                            <option>Adults</option>
                        </select>

                        <select className='rounded-[6px] border-[1px] opacity-60 border-solid border-[#00000042] px-3 outline-none bg-transparent py-3 w-full h-full'>
                            <option>Children</option>
                            <option>Adults</option>
                        </select>
                    </div>
                    <div className='w-full mt-5'>
                        <select className='rounded-[6px] border-[1px] opacity-60 border-solid border-[#00000042] px-3 outline-none bg-transparent py-3 w-full h-full'>
                            <option>Children</option>
                            <option>Adults</option>
                        </select>
                    </div>
                    <div className='w-full mt-5'>
                        <select className='rounded-[6px] border-[1px] opacity-60 border-solid border-[#00000042] px-3 outline-none bg-transparent py-3 w-full h-full'>
                            <option>Children</option>
                            <option>Adults</option>
                        </select>
                    </div>
                    <div className='flex gap-x-4 my-3'>
                        <h1 className='font-bold text-[18px]'>
                            Rs. 60000
                        </h1>
                        <p className='text-[16px]'>
                            Sub total 1 room for 1 night
                        </p>
                    </div>
                    <button onClick={() => { router.push('/payment') }} className='bg-[#00BCD4] text-[#fff] rounded-[5px] px-[20px] py-[10px] w-full mt-5'>Book Now</button>
                </div>
                {/* end of Form */}

                {/* Notifications */}
                <div className='bg-[#FBFFFF] w-full bg-opacity-90 shadow-md  border-[1px] border-[#00000017] rounded-[10px] p-4 mt-8'>
                    {/* card */}
                    {[1, 2, 3, 4].map(() => {
                        return <div key={index} className='flex flex-col my-4 bg-[#FFFFFF] border-[1px] border-[#00000017] rounded-[5px] p-4 justify-center items-start'>
                            <div className='flex gap-2'>
                                <Image src={'/calender.svg'} width={20} height={20} />
                                <p className='text-[18px] text-[#000] opacity-40'>Sep 23 , 2023</p>
                            </div>
                            <h1 className='font-bold text-[#000] text-[18px] mt-4'>Why Do People Travel? Reasons People Travel in 2023</h1>
                        </div>
                    })}
                    {/*end of  card */}
                </div>
                {/* end of Notifications */}
            </div>
            {/* end of Right part */}


        </div>
        <Footer />
    </>
    )
}

export default Detail;