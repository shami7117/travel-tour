'use client'


import Footer from '@/components/Footer'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'react-feather'; // Importing eye icons from Feather Icons
import BannerHeader from "@/components/BannerHeader/index"

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordMatch = password === confirmPassword;

  return (
    <>
      {/* <Header />
      <MainNav />
      <Banner title="Sign Up" breadcrumb1="Home" breadcrumb2="My Account" /> */}
      <BannerHeader Heading="Sign Up" Back="Home" front="My Account" />

      <div className="w-full py-[3.5rem] flex justify-center items-center h-full">
        <div style={{
          background: "#F3F6FD",
          borderRadius: "8px",
        }}
          className="w-full sm:w-[400px] md:w-[500px] px-[2rem] py-[2rem]"
        >
          <h2 style={{ textAlign: "center" }} className="font-[500] text-[18px] text-[#00000087]">Join Us</h2>
          <p style={{ textAlign: "center" }} className="text-[24px] font-[600]">Register your account</p>

          <form style={{ display: "flex", flexDirection: "column" }} className="mt-6">
            <div style={{ marginBottom: "15px" }} className='flex flex-col '>
              <label className="text-[16px]" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                className="py-2 px-3 mt-1  bg-transparent"
                style={{
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }} className='flex flex-col '>
              <label className="text-[16px]" htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                id="emailAddress"
                name="email"
                placeholder="Enter Email"
                className="py-2 px-3 mt-1  bg-transparent"
                style={{
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }} className='flex flex-col '>
              <label className="text-[16px]" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                className="py-2 px-3 mt-1  bg-transparent"
                style={{
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }} className='flex flex-col '>
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className="py-2 w-full px-3 bg-transparent mt-1"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }} className='flex flex-col '>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`py-2 px-3 w-full bg-transparent mt-1 ${isPasswordMatch ? '' : 'border-red-500'}`}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
              {!isPasswordMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match</p>}
            </div>

            <button
              type="submit"
              style={{
                background: "#00BCD4",
                color: "#fff",
                borderRadius: "4px",
                padding: "10px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              className="my-3"
            >
              Sign Up
            </button>
          </form>

          <div style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            color: "#ccc",
          }}>
            <hr style={{ flex: 1, marginLeft: "10px", marginRight: "10px", border: "0.5px solid #ccc" }} />
            <span style={{ fontSize: "14px" }}>OR</span>
            <hr style={{ flex: 1, marginLeft: "10px", marginRight: "10px", border: "0.5px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "15px" }} className='flex flex-col space-y-4'>
            <button
              style={{
                background: "#E8EFFF",
                borderRadius: "4px",
                padding: "10px",
                marginRight: "10px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              className="w-full text-[#000000] flex justify-center items-center"
            >
              <img src="/images/fb-btn.svg" alt="Facebook Icon" className="w-6 h-6 mr-2" />
              Sign Up with Facebook
            </button>
            <button
              style={{
                background: "#FFEBEA",
                borderRadius: "4px",
                padding: "10px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              className="w-full text-[#000000] flex justify-center items-center"
            >
              <img src="/images/google-btn.svg" alt="Google Icon" className="w-6 h-6 mr-2" />
              Sign Up with Google
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="text-[#00000075] mt-8">Already have an account? <Link href="/login" style={{ color: "#000000", textDecoration: "none" }}>Log in</Link></p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup;
