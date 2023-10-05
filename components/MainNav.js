"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
export default function MainNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };



    return (
        <>
            <div className='bg-[#305576] lg:bg-transparent flex justify-between w-full absolute top-0 border-b border-dashed lg:border-none lg:top-[62px] '>
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
                        <Link href={"/login"} className='text-[16px] cursor-pointer' >Log in</Link>
                        <Link href={"/signup"}>
                            <button className='rounded-md border border-dashed text-[16px] bg-[#00BCD4] h-[50px] w-[117px]'>Sign Up</button>
                        </Link>                    </div>
                </div>
                {/* mobile hamburger */}
                <div className='lg:hidden z-99 flex justify-center items-center mr-[10px]'>
                    <div
                        className='h-[30px] w-[30px] border border-white/30 rounded-md cursor-pointer flex justify-center items-center bg-transparent'
                        onClick={toggleMobileMenu}
                    >
                        <img src="hamburger.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className='lg:hidden z-50 absolute top-[42px] w-full bg-[#305576] text-white'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        onClick={closeMobileMenu}
                    >
                        <div className='flex flex-col gap-y-4 z-50 items-center py-4'>
                            <Link href={'/planing'} className='cursor-pointer '>Staycations</Link>
                            <Link href={'/listing'} className='cursor-pointer '>Holidays</Link>
                            <Link href={'/group-booking'} className='cursor-pointer '>Group Booking</Link>
                            {/* <p className='cursor-pointer my-2'>About Us</p> */}
                        </div>
                        <div className='flex flex-col z-50 items-center pb-4'>
                            <img src="search.svg" alt="" className='cursor-pointer' />
                            <Link href={'/login'} className='text-[16px] cursor-pointer my-2' >Log in</Link>
                            <Link href={"/signup"}>
                                <button className='rounded-md border border-dashed text-[16px] bg-[#00BCD4] h-[50px] w-[117px]'>Sign Up</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
