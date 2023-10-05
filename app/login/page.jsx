'use client'



import Footer from '@/components/Footer'

import React from 'react'
import Link from 'next/link'
import BannerHeader from "@/components/BannerHeader/index"
function Login() {
  return (
    <>
      {/* <Header />
      <MainNav /> */}
      <BannerHeader Heading="Log in" Back="Home" front="My Account" />
      <div className="w-full py-[3.5rem] flex justify-center items-center h-full">
        <div style={{
          background: "#F3F6FD",
          borderRadius: "8px",
        }}
          className="w-full sm:w-[400px] md:w-[500px] px-[2rem] py-[2rem]"
        >
          <h2 style={{ textAlign: "center" }} className="font-[500] text-[18px] text-[#00000087]">Login to your account</h2>
          <p style={{ textAlign: "center" }} className="text-[24px] font-[600]">Logged in to stay in touch</p>

          <form style={{ display: "flex", flexDirection: "column" }} className="mt-6">
            <div style={{ marginBottom: "15px" }} className='flex flex-col '>
              <label className="text-[16px]" htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                id="emailAddress"
                name="email"
                placeholder="Enter Email"
                className="py-2 px-3 mt-1 bg-transparent"
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
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="py-2 px-3 mt-1 bg-transparent"
                style={{
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
              />
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe" className='bg-transparent'
                  style={{ margin: "0", marginRight: "5px" }}
                />
                <label htmlFor="rememberMe" className="text-[16px]">Remember me!</label>
              </div>
              <a href="/forgot-password" style={{ color: "#2E2E2E", textDecoration: "none" }}>Forgot Password?</a>
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
              Login
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
              <img src="/images/fb-btn.svg" alt="Google Icon" className="w-6 h-6 mr-2" />

              Login with Facebook
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
              Login with Google
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="text-[#00000075] mt-8">Don{"'"}t have an account? <Link href="/signup" style={{ color: "#000000", textDecoration: "none" }}>Sign up</Link></p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;
