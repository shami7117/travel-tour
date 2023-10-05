'use client'


import Footer from '@/components/Footer';

import React, { useState } from 'react';
import { Eye } from 'react-feather';
import BannerHeader from "@/components/BannerHeader/index"
import Link from 'next/link';
import { Input } from 'antd';

function Index() {
    const [activeTab, setActiveTab] = useState('profile');

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };



    return (
        <>
            {/* <Header />
      <MainNav />
      <Banner title="Booking" breadcrumb1="Home" breadcrumb2="My Account" /> */}
            <BannerHeader Heading="My Profile" Back="Home" front="My Account" />

            <div className="w-full py-[3.5rem] px-[2rem] space-y-8 md:space-y-0 max-w-[1500px] mx-auto flex-col md:flex-row flex md:justify-center md:space-x-8 items-start h-full">
                <div
                    style={{
                        background: "#F3F6FD",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 25px 0px #00000024",
                    }}
                    className="w-full max-w-full md:max-w-[393px] pb-5  flex flex-col items-center overflow-hidden"
                >
                    {/* User Info Section */}
                    <div className="flex flex-col justify-center  items-center mb-6 px-[2rem] py-[2rem]">
                        <div className="rounded-full overflow-hidden w-[110px] h-[110px] ">
                            {/* User Image */}
                            <img
                                src="/images/user.svg" // Replace with the actual image source
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="ml-4  flex flex-col items-center mt-3">
                            {/* User Name, Phone, and Email */}
                            <h3 className="text-[24px] font-[500]">James Williams</h3>
                            <p className="text-gray-500">Phone: +123 456 7890</p>
                            <p className="text-gray-500">Email: john@example.com</p>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col w-full">
                        {/* Booking Button */}
                        <Link href={'/user'}
                            className={`flex items-center w-full py-3 px-4 ${activeTab === 'booking' && 'bg-[#FE8800] text-white'}`}
                            onClick={() => toggleTab('booking')}
                        >
                            <img
                                src="/images/booking.svg" // Replace with the actual image source
                                alt="Booking"
                                className="w-6 h-6 mr-2"
                            />
                            Booking
                        </Link>

                        {/* My Profile Button */}
                        <Link href={'/profile'}
                            className={`flex items-center w-full py-3 px-4 ${activeTab === 'profile' && 'bg-[#FE8800] text-white'}`}
                            onClick={() => toggleTab('profile')}
                        >
                            <img
                                src="/images/profile.svg" // Replace with the actual image source
                                alt="My Profile"
                                className="w-6 h-6 mr-2"
                            />
                            My Profile
                        </Link>
                    </div>
                </div>

                {/* Content Section (Booking Table) */}
                <div
                    style={{
                        background: "#F3F6FD",
                        borderRadius: "8px",
                    }}
                    className="w-full max-w-full md:max-w-[816px] px-[1rem] py-[1rem] md:px-[2rem] md:py-[2rem]"
                >
                    <div className="px-6">
                        <h2 className="font-[500] oswald text-[24px]">My Profile</h2>
                    </div>

                    <form className="my-3 border-b border-[#DFDFDF] px-6 pb-6" >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="text-[16px] font-normal text-[#777777]"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder='James'
                                    // value={formData.firstName}
                                    // onChange={handleChange}
                                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="text-[16px] font-normal text-[#777777]"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder='Gun'

                                    // value={formData.lastName}
                                    // onChange={handleChange}
                                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-[16px] font-normal text-[#777777]"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='James@gmail.com'

                                    // value={formData.email}
                                    // onChange={handleChange}
                                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="text-[16px] font-normal text-[#777777]"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder='+10-72208-2'

                                    // value={formData.phone}
                                    // onChange={handleChange}
                                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="UserName"
                                    className="text-[16px] font-normal text-[#777777]"
                                >
                                    UserName
                                </label>
                                <input
                                    type="text"
                                    id="UserName"
                                    name="UserName"
                                    placeholder='JamesGUN'

                                    // value={formData.phone}
                                    // onChange={handleChange}
                                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                />
                            </div>
                            <div>
                                <label className="text-[16px] font-normal text-[#777777]">
                                    Password
                                </label>
                                <Input.Password
                                    type="password"
                                    id="currentPassword"
                                    placeholder='Password'

                                    // value={admin.password}
                                    name="currentPassword"
                                    className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                />
                            </div>

                        </div>

                    </form>
                    <form className="my-3  px-6 pb-6" >
                        <div className="">
                            <h2 className="font-[500] text-[18px]">Change Password</h2>
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col sm:flex-row items-start mt-4 pb-3 w-full">
                                <div className="sm:w-[50%] w-full">
                                    <label className="text-[16px] font-normal text-[#777777]">
                                        Current Password:
                                    </label>
                                    <Input.Password
                                        type="password"
                                        placeholder='Current Password'

                                        id="currentPassword"
                                        // value={admin.password}
                                        name="currentPassword"
                                        className="w-full py-2 px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                    />
                                </div>
                                <div className="sm:w-[50%] w-full sm:ml-4">
                                    <label className="text-[16px] font-normal text-[#777777]">
                                        New Password:
                                    </label>
                                    <Input.Password
                                        id="newPassword"
                                        name="newPassword"
                                        // value={newPassword}
                                        // onChange={handlePasswordChange}
                                        className="w-full py-2 fontFamily px-3 border border-[#2668E81A] rounded transition duration-300 bg-[#ffffff ] focus:outline-none focus:border-[#2668E855] hover:border-[#2668E855]"
                                        placeholder="New Password"
                                    />
                                </div>
                            </div>
                            {/* <div className="flex items-start pb-3">
                                    <div className="md:w-[50%] w-full">
                                        <label className="text-[16px] font-normal text-[#777777]">
                                            Repeat Password:
                                        </label>
                                        <Input.Password
                                            id="repeatPassword"
                                            name="repeatPassword"
                                            // value={repeatPassword}
                                            // onChange={handlePasswordChange}
                                            className={`w-full py-2 px-3 border fontFamily ${passwordMatch
                                                ? "border-[#2668E81A]"
                                                : "border-[#FF0000]"
                                                } rounded transition duration-300 bg-[#ffffff] focus:outline-none ${passwordMatch
                                                    ? "focus:border-[#2668E855] hover:border-[#2668E855]"
                                                    : "focus:border-[#FF0000] hover:border-[#FF0000]"
                                                }`}
                                            placeholder="Repeat Password"
                                        />
                                        {!passwordMatch && (
                                            <p className="text-red-600 mt-2">
                                                Passwords do not match. Please try again.
                                            </p>
                                        )}
                                    </div>
                                </div> */}

                            <div className="w-full flex justify-center sm:justify-end">
                                <button
                                    type="submit"
                                    className=" bg-[#00BCD4] text-white py-2 px-4 rounded transition duration-300"
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
