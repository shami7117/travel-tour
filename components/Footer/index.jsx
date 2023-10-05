import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8">
      <div className="container mx-auto justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-2 py-4">
        {/* Column 1 */}
        <div className="mb-4 lg:mb-0    w-full md:max-w-[270px] flex flex-col ">
          <div className="text-[#FE8800] self-center sm:self-start font-[700] text-[40px] fontOswald mb-3 mt-[-15px]">Logo</div>
          <p className="text-[16px] text-center sm:text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Column 2 */}
        <div className='flex justify-between items-start w-full'>
          <div className="mb-4  text-[#ffffff] lg:mb-0 font-[400] text-[16px]">
            <div className="font-[400] text-[16px] mb-2">About Us</div>
            <ul className="list-none text-[#ffffff] pl-0 flex-col flex space-y-2">
              <li><Link href="/">News</Link></li>
              <li><Link href="/">Partners</Link></li>
              <li><Link href="/">Media</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4 lg:mb-0 font-[400] text-[16px]">
            <ul className="list-none text-[#ffffff] pl-0 flex-col flex space-y-2">
              <li><Link href="/">Blogs & Stories</Link></li>
              <li><Link href="/">Terms & Conditions</Link></li>
              <li><Link href="/">Siemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center  sm:items-start space-y-3">
          <span>Follow Us</span>
          <div className="flex space-x-2  ml-[-10px]">
            <Link href="/" className='rounded-full bg-[#0A0F1124] w-8 h-8 flex justify-center items-center'>
              <Image src="/images/fb.svg" width={10} height={10} alt="fb-icon" />
            </Link>
            <Link href="/" className='rounded-full bg-[#0A0F1124] w-8 h-8 flex justify-center items-center'>
              <Image src="/images/insta.svg" width={19} height={19} alt="insta-icon" />
            </Link>
            <Link href="/" className='rounded-full bg-[#0A0F1124] w-8 h-8 flex justify-center items-center'>
              <Image src="/images/twitter.svg" width={22} height={22} alt="twitter-icon" />
            </Link>
            <Link href="/" className='rounded-full bg-[#0A0F1124] w-8 h-8 flex justify-center items-center'>
              <Image src="/images/youtube.svg" width={22} height={22} alt="youtubbe-icon" />
            </Link>
          </div>
        </div>
        {/* Column 4: Contact Us Form */}
        <div className="mb-4 lg:mb-0 max-w-[270px] hidden md:flex md:flex-col">
          <div className="text-white font-[400] text-[16px] fontOswald mb-3">Contact Us</div>

          {/* Contact Form */}
          <form>
            {/* Name and Email Inputs */}
            <div className="mb-4 flex space-x-3 overflow-hidden ">
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-md bg-transparent w-[50%] border border-[#FFFFFF3D] p-2"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md bg-transparent w-[50%] border border-[#FFFFFF3D] p-2"
              />
            </div>

            {/* Mobile Number Input */}
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="rounded-md bg-transparent w-full border border-[#FFFFFF3D] p-2 mb-4"
            />

            {/* Message Input */}
            <textarea
              placeholder="Enter your message"
              className="rounded-md bg-transparent w-full border border-[#FFFFFF3D] p-2 h-20 resize-none mb-4"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className='rounded-lg w-full py-2  px-4 text-[16px] bg-[#00BCD4]'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}


      {/* Design & Developed by */}
      <div className="text-center text-[16px] mt-8">
        Design & Developed by <Link href='/' className="text-[#FE8800]">ZySoftec</Link>
      </div>
    </footer>
  );
};

export default Footer;
