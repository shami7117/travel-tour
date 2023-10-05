'use client'

import React from "react";
import Footer from "@/components/Footer/index";
import BannerHeader from "@/components/BannerHeader/index"

import { useState } from "react";
import { useRouter } from 'next/navigation';

function Payment() {
  const router = useRouter()
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    if (termsAccepted) {
      // Submit the form
      console.log("Form submitted!");
    } else {
      alert("Please accept the terms and conditions.");
    }
  };
  return (
    <>
      <BannerHeader Heading="Payment" Back="Home" front="My Account" />
      <div className="w-full py-[3.5rem] px-[2rem] space-y-8 max-w-[1500px] mx-auto md:space-y-0 flex-col md:flex-row flex md:justify-center md:space-x-8 items-start h-full">
        <div className="w-full md:w-[55%] ">
          <div className="rounded-lg bg-[#F3F6FD] md:h-[450px] py-5 px-8">
            <form>
              <h2 className="text-2xl font-bold mb-4">Booking Submission</h2>

              {/* First Name and Last Name */}
              <div className="flex flex-col md:flex-row w-full justify-evenly  space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                  <label className="text-[#2E2E2E] mb-3" htmlFor="firstName">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
                <div className="w-full">
                  <label className="text-[#2E2E2E]  mb-3" htmlFor="lastName">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
              </div>

              {/* Email and Mobile Number */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-3">
                <div className="w-full">
                  <label className="text-[#2E2E2E]  mb-3" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-[#2E2E2E]  mb-3"
                    htmlFor="mobileNumber"
                  >
                    Mobile Number:
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter Mobile Number"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
              </div>

              {/* Select Location, Country */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-3">
                <div className="w-full">
                  <label className="text-[#2E2E2E]  mb-3" htmlFor="location">
                    Select Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Select Location"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
                <div className="w-full">
                  <label className="text-[#2E2E2E]  mb-3" htmlFor="country">
                    Country:
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter Country"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
              </div>

              {/* City */}
              <div className="mt-3">
                <label className="text-[#2E2E2E]  mb-3" htmlFor="city">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter City"
                  className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                />
              </div>
            </form>
          </div>
          <div className="method-shadow rounded-lg ">
            <div className="py-5 px-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Payment Method</h2>

              {/* Payment Method Radio Buttons */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paymentCard"
                    name="paymentMethod"
                    value="card"
                    className="mr-2"
                  />
                  <label htmlFor="paymentCard" className="text-[#2E2E2E]">
                    Payment by Card
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paymentPayPal"
                    name="paymentMethod"
                    value="paypal"
                    className="mr-2"
                  />
                  <label htmlFor="paymentPayPal" className="text-[#2E2E2E]">
                    PayPal
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="paymentPayoneer"
                    name="paymentMethod"
                    value="payoneer"
                    className="mr-2"
                  />
                  <label htmlFor="paymentPayoneer" className="text-[#2E2E2E]">
                    Payoneer
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={handleTermsChange}
                  className="mr-2"
                />
                <span>
                  I read and accept all{" "}
                  <a href="#" style={{ color: "#00BCD4" }}>
                    terms & conditions
                  </a>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#00BCD4] text-white hover:bg-[#10A1B4] rounded-md transition duration-300 ease-in-out px-8 py-3 text-[16px] font-[500] hover:border-glow"
            >
              Submit
            </button>          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto items-center">
          <div className="pay-shadow rounded-lg w-full">
            <div className="py-5 px-8">
              {/* Heading: Evolve Back Corag */}
              <h2 className="text-[24px]  mb-4 border-b-2 border-[#00BCD4] pb-2">Evolve Back Corag</h2>

              {/* Valid from */}
              <div className="flex justify-between">
                <div className="flex flex-col text-[#2E2E2E] mb-2">
                  <span className="font-bold text-[18px]">Valid from</span>
                  <span className="text-[#00000070] text-[18px]">25 Sep, 2023</span>
                </div>


                {/* Valid till */}
                <div className="flex flex-col text-[#2E2E2E] mb-2">
                  <span className="font-bold text-[18px]">Valid from</span>
                  <span className="text-[#00000070] text-[18px]">25 Sep, 2023</span>
                </div>
              </div>


              <div className="my-4">
                <h2 className="text-[20px] pb-2">Package Details</h2>
                <div className="border-b-2 border-[#00BCD4] mb-2"></div>
                <ul className="list-disc pl-6 pt-2">
                  <li style={{ color: "#FE8800" }}>
                    <span style={{ color: "#00000070" }}>Buffet breakfast as per the Itinerary</span>
                  </li>
                  <li style={{ color: "#FE8800" }}>
                    <span style={{ color: "#00000070" }}>Visit eight villages showcasing Polynesian</span>
                  </li>
                  <li style={{ color: "#FE8800" }}>
                    <span style={{ color: "#00000070" }}>Complimentary Camel safari, Bonfire</span>
                  </li>

                  <li style={{ color: "#FE8800" }}>
                    <span style={{ color: "#00000070" }}>All toll tax, parking, fuel, and driver allowances</span>
                  </li>
                  <li style={{ color: "#FE8800" }}>
                    <span style={{ color: "#00000070" }}>Comfortable and hygienic vehicle</span>
                  </li>
                </ul>

              </div>

              {/* Heading: Price */}
              <h2 className="text-[20px] mb-4 border-b-2 border-[#00BCD4]">Price</h2>

              {/* Price details */}
              <div className="flex space-x-4 items-center text-[#2E2E2E]">
                <span className="text-gray-500 line-through">$67,000</span>
                <div>
                  <span className="text-[20px] font-bold">$66,000/</span>
                  <span className="text-[16px] font-bold">Per Person</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pay-shadow rounded-lg w-full my-8">
            <div className="py-5 px-8">
              {/* Heading: Travel Date */}
              <h2 className="text-[24px] mb-4 border-b-2 border-[#00BCD4] pb-2">Travel Date</h2>

              {/* Edit Date */}
              <div className="flex flex-col mb-4">
                <div className="text-[#2E2E2E]">
                  <span className=" text-[16px]">Edit Date</span>
                </div>
                <div>
                  {/* Add your date input component here */}
                  <input
                    type="date"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 outline-none transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
              </div>

              {/* Heading: Tourist */}
              <h2 className="text-[20px] mb-4 border-b-2 border-[#00BCD4] pb-2">Tourist</h2>

              {/* Adult */}
              <div className="flex flex-col mb-2 pb-2 border-b border-[#0000002B]">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Adult</span>
                </div>
                <div className="text-[#00000070] text-[18px]">12+</div>
              </div>

              {/* Children */}
              <div className="flex flex-col mb-2 pb-2 border-b border-[#0000002B]">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Childern</span>
                </div>
                <div className="text-[#00000070] text-[18px]">2 - 12 years</div>
              </div>
              {/* Infant */}
              <div className="flex flex-col mb-2 pb-2 border-b border-[#0000002B]">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Infant</span>
                </div>
                <div className="text-[#00000070] text-[18px]">below 2 years</div>
              </div>

              {/* Edit Person Link */}
              <div className="flex justify-end">
                <a href="#" style={{ color: "#FE8800" }}>
                  Edit Person
                </a>
              </div>
            </div>
          </div>

          <div className="pay-shadow rounded-lg w-full my-4">
            <div className="py-5 px-8">
              {/* Heading: Coupon Code */}
              <h2 className="text-[24px] mb-4 border-b-2 border-[#00BCD4] pb-2">Coupon Code</h2>

              {/* Coupon Code Input */}
              <div className="flex flex-col mb-4">

                <div>
                  {/* Add your coupon code input and Apply Coupon button */}
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    className="bg-transparent py-2 px-3 mt-1 block w-full rounded-md border-1 border-gray-300 bg-[#00BCD452] transition-border-color duration-300"
                    style={{
                      borderRadius: "4px",
                      border: "1px solid #00BCD452",
                      background: "#00BCD414",
                      outline: "none",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
              </div>

              {/* Apply Coupon Button */}
              <button
                className="bg-[#00BCD4] text-white hover:bg-[#10A1B4] rounded-md transition duration-300 ease-in-out px-8 py-3 text-[16px] font-[500] hover:border-glow"
              >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="pay-shadow rounded-lg w-full my-4">
            <div className="py-5 px-8">
              {/* Heading: Booking Amount */}
              <h2 className="text-[24px] mb-4 border-b-2 border-[#00BCD4] pb-2">Booking Amount</h2>

              {/* Booking Items */}
              <div className="flex justify-between mb-2">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Adult Price x 2</span>
                </div>
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">$40,000.00</span>
                </div>
              </div>

              <div className="flex justify-between mb-2">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Discount</span>
                </div>
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">-10%</span>
                </div>
              </div>

              <div className="flex justify-between mb-2">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Tax</span>
                </div>
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">5%</span>
                </div>
              </div>

              {/* Border Bottom */}
              <div className="border-b border-[#0000002B] mb-2"></div>

              {/* Sub Total */}
              <div className="flex justify-between mb-2">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Sub Total</span>
                </div>
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">$40,000.00</span>
                </div>
              </div>

              {/* Coupon Fee */}
              <div className="flex justify-between mb-2">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Coupon Fee</span>
                </div>
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">$678.00</span>
                </div>
              </div>

              {/* Border Bottom */}
              <div className="border-b border-[#0000002B] mb-2"></div>

              {/* Total Amount */}
              <div className="flex justify-between">
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">Total Amount</span>
                </div>
                <div className="text-[#2E2E2E]">
                  <span className="font-bold text-[18px]">$567,88.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-4">
            <button onClick={() => router.push("/checked")}
              className="bg-[#00BCD4] w-full text-white hover:bg-[#10A1B4] rounded-md transition duration-300 ease-in-out px-8 py-3 text-[16px] font-[400] hover:border-glow"
            >
              Confirm and Pay
            </button>
          </div>



        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
