"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header';
import Link from 'next/link';
export default function MainNav({ Heading, Back, front }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };



    return (
        <div className='h-[20vh] lg:h-[50vh] bg-[url(/banner.svg)] flex flex-col justify-center item-between bg-no-repeat bg-cover bg-bottom'>
            <Header />
            <div className='bg-[#305576]  lg:bg-transparent  flex-col justify-center items-center w-full absolute top-0 border-b border-dashed lg:border-none lg:top-[62px] '>
                <div className='flex justify-between w-full'>
                    {/* left */}
                    <div className='lg:ml-[90px] ml-[15px]'>
                        <img src="logo.svg" alt="" />
                    </div>
                    {/* right */}
                    <div className='hidden lg:flex lg:mr-[90px] mr-[5px] justify-center items-center gap-x-4 '>
                        {/* links */}
                        <div className='flex justify-center items-center text-white gap-x-4 text-[14px]'>
                            <Link href={'/planing'} className='cursor-pointer my-2'>Staycations</Link>
                            <Link href={'/listing'} className='cursor-pointer my-2'>Holidays</Link>
                            <Link href={'/group-booking'} className='cursor-pointer my-2'>Group Booking</Link>
                        </div>
                        {/* Buttons */}
                        <div className='flex justify-center items-center text-white gap-x-6'>
                            <img src="search.svg" alt="" className='cursor-pointer' />
                            <Link href={'/login'} className='text-[16px] cursor-pointer' >Log in</Link>
                            <Link href={"/signup"}>
                                <button className='rounded-md border border-dashed text-[16px] bg-[#00BCD4] h-[50px] w-[117px]'>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                    {/* mobile hamburger */}
                    <div className='lg:hidden flex justify-center items-center mr-[10px]'>
                        <div
                            className='h-[30px] w-[30px] border border-white/30 rounded-md cursor-pointer flex justify-center items-center bg-transparent'
                            onClick={toggleMobileMenu}
                        >
                            <img src="hamburger.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='hidden lg:flex flex-col mt-8 justify-center items-center'>
                    <h1 className='text-[40px] font-bold oswald text-[#FFFFFF]'>{Heading}</h1>
                    <h3 className='text-[16px] font-normal oswald text-[#FFFFFF]'>{Back} {">"} {front}</h3>
                </div>
            </div>

            <div className='flex lg:hidden flex-col mt-8 justify-end items-center'>
                <h1 className='text-[40px] font-bold oswald text-[#FFFFFF]'>{Heading}</h1>
                <h3 className='text-[16px] font-normal oswald text-[#FFFFFF]'>{Back} {">"} {front}</h3>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className='lg:hidden absolute top-[62px] w-full bg-[#305576] text-white'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        onClick={closeMobileMenu}
                    >
                        <div className='flex flex-col items-center py-4'>
                            <Link href={'/planing'} className='cursor-pointer my-2'>Staycations</Link>
                            <Link href={'/listing'} className='cursor-pointer my-2'>Holidays</Link>
                            <Link href={'/group-booking'} className='cursor-pointer my-2'>Group Booking</Link>
                        </div>
                        <div className='flex flex-col items-center pb-4'>
                            <img src="search.svg" alt="" className='cursor-pointer' />
                            <Link href={'/login'} className='text-[16px] cursor-pointer my-2' >Log in</Link>
                            <Link href={"/signup"}>
                                <button className='rounded-md border border-dashed text-[16px] bg-[#00BCD4] h-[50px] w-[117px]'>Sign Up</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
}