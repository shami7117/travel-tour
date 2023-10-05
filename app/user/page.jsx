'use client'


import Footer from '@/components/Footer';

import React, { useState } from 'react';
import { Eye } from 'react-feather';
import BannerHeader from "@/components/BannerHeader/index"
import Link from 'next/link';

function Index() {
  const [activeTab, setActiveTab] = useState('booking');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const generateTableData = () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        sno: i,
        bookingId: `#jk77878${i}`,
        bookingType: 'Hotel',
        bookingAmount: `$${Math.floor(Math.random() * 1000) + 100}`,
        status: i % 2 === 0 ? 'Complete' : 'Pending',
      });
    }
    return data;
  };

  const renderTableRows = () => {
    return generateTableData().map((record) => (
      <tr key={record.sno} className="border border-[#0000002B] hover:bg-gray-100 transition duration-200">
        <td className="px-3 py-3  border-[#0000002B] text-center">{record.sno}</td>
        <td className=" border-[#0000002B] text-center">{record.bookingId}</td>
        <td className="border-[#0000002B] text-center">{record.bookingType}</td>
        <td className=" border-[#0000002B] text-center">{record.bookingAmount}</td>
        <td>
          <div style={{ background: record.status === 'Complete' ? "#7FFE0036" : "#FF000036" }}
            className="rounded-xl  flex items-center justify-center py-1 px-2 text-center ">
            {record.status}
          </div>
        </td>
        <td className="border-[#0000002B] text-center">
          <button>
            {/* Eye Icon */}
            <Eye size={18} />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      {/* <Header />
      <MainNav />
      <Banner title="Booking" breadcrumb1="Home" breadcrumb2="My Account" /> */}
      <BannerHeader Heading="Booking" Back="Home" front="My Account" />

      <div className="w-full py-[3.5rem] px-[2rem] space-y-8 md:space-y-0 max-w-[1500px] mx-auto flex-col md:flex-row flex md:justify-center md:space-x-8 items-start h-full">
        <div
          style={{
            background: "#F3F6FD",
            borderRadius: "8px",
            boxShadow: "0px 4px 25px 0px #00000024",
          }}
          className="w-full max-w-full md:max-w-[393px] pb-5 flex flex-col items-center overflow-hidden"
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
            <div className="ml-4 flex flex-col items-center mt-3">
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
            </Link >

            {/* My Profile Link href={} */}
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
            </Link >
          </div>
        </div>

        {/* Content Section (Booking Table) */}
        <div
          style={{
            background: "#F3F6FD",
            borderRadius: "8px",
          }}
          className="w-full max-w-full md:max-w-[816px] px-[2rem] py-[2rem]"
        >
          <h2 className="text-2xl oswald font-semibold mb-4">Hotel Booking</h2>
          <table className="w-full border-collapse">
            <thead className='bg-white border border-[#0000002B] '>
              <tr className='text-[#2E2E2E91] font-[500] text-[16px]'>
                <th className="px-3 py-3">SNo</th>
                <th>Booking Id</th>
                <th>Booking Type</th>
                <th>Booking Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
