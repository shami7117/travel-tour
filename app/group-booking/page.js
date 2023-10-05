import Image from "next/image";
import img1 from "../../public/images/planning.png"
import img from "../../public/images/enjoy.png"
import img3 from "../../public/images/img4.jpg"
import img4 from "../../public/images/trees.png"
import BannerHeader from "@/components/BannerHeader/index"
import r1 from "../../public/images/review1.png"
import r2 from "../../public/images/review2.png"
import r3 from "../../public/images/review3.png"
import Footer from "@/components/Footer/index"

import Review from "@/components/Review";
// import PriceFilter from "./components/Filter";

export default function Home() {
    return (
        <>

            <BannerHeader Heading={"Group Booking"} Back={"Home"} front={"Group Booking"} />
            <div className="max-w-[1500px] mx-auto overflow-x-hidden relative">
                <div className="flex flex-col gap-5  md:gap-0 md:flex-row justify-center  md:justify-around items-center mt-[100px]  bg-[url('/images/bg-arrow.png')] bg-no-repeat">
                    <div className="z-[-99]">
                        <Image src={img1} />
                    </div>

                    <div className="text-center">
                        <h1 className="text-[40px] font-[500]">Group Booking</h1>
                        <p className="text-center w-[400px]">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                        </p>
                    </div>

                    <div >
                        <Image src={img} />
                    </div>
                </div>

                <div className="mt-[100px] flex  md:flex-col gap-0 md:gap-[10px] justify-center w-[100%] flex-wrap p-10">
                    <h1 className="text-[40px] font-[500] text-center">Serviced offered</h1>
                    <div className="flex flex-col justify-center  md:flex-row md:justify-around mt-[20px] md:space-y-0 space-y-4">
                        <div>
                            <ul className="list-none list-inside text-[#000000] space-y-2  md:space-y-4">
                                <li className="flex  items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Worldwide Coach Hires & Chauffeur Drives
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Conferences and team meetings
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Domestic International Journeys for Teams
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Dedicated Tour Managers
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-none text-[#000000] list-inside space-y-4">
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Private Air Charter
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Limitless Corporate Travel Support
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Conferences and team meetings
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Corporate Responsibility & Risk Management
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="list-none text-[#000000] list-inside space-y-4">
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Airport & Visa Assistance
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Smart Airfare Solutions
                                </li>
                                <li className="flex items-center text-[#000000]">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                    Emergency Travel Alert Service & Crisis Management
                                </li>

                            </ul>
                        </div>



                    </div>

                    <div className="flex mt-[100px] w-full flex-row justify-center set">
                        <Image className="w-full min-h-[250px]" src={img3} />
                    </div>



                    <div className="flex justify-end items-center min-h-screen w-auto md:w-[90%] md:absolute md:transform md:translate-y-[-130px]">
                        <div className="w-auto md:w-[40%] md:h-[600px] bg-opacity-90  backdrop-blur-xl backdrop-filter bg-black-100 rounded-lg shadow-lg p-6 space-y-4 text-white">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label htmlFor="name">Corporate Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border rounded-md bg-transparent py-2 text-black px-3"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="email">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border bg-transparent rounded-md py-2 text-black px-3"
                                        placeholder="Name Here"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="w-full border bg-transparent rounded-md text-black py-2 px-3"
                                        placeholder="91 XXXX XXX"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full border bg-transparent rounded-md py-2 text-black px-3"
                                        placeholder="Your Email"
                                    />
                                </div>

                            </div>
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                                <div className="col-span-1 ">
                                    <label htmlFor="subject">Grouped Size</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="w-full border bg-transparent rounded-md py-2 px-1 md:px-3   text-[#a9a9a6]"
                                    >
                                        <option value="general">12</option>
                                        <option value="support">14</option>
                                        <option value="billing">16</option>
                                    </select>
                                </div>

                                <div className="col-span-1">
                                    <label htmlFor="department">Preffered Location</label>
                                    <select
                                        id="department"
                                        name="department"
                                        className="w-full bg-transparent border rounded-md py-2 px-1 md:px-3   text-[#a9a9a6]"
                                    >
                                        <option value="sales">France</option>
                                        <option value="marketing">England</option>
                                        <option value="technical">Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-transparent border rounded-md py-2 px-3 text-black h-32"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500  text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>




                    <div className="ml-0 md:ml-[70px] mt-[50px] md:mt-[150px]">
                        <div className=" flex flex-col md:flex-row  md:justify-between mt-[40px] md:mt-[70px] p-5">
                            <div className="md:w-[60%] bg-[url('/images/bg-arrow.png')]">
                                <h1 className="text-[40px] w-auto  md:w-[380px] font-[900]">Our Customer Love What We DO</h1>
                                <p className="w-auto md:w-[400px] md:mt-0 mt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="md:w-[40%] w-auto md:mt-0 mt-[15px]">
                                <Image src={img4} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-3 mt-[10px] md:transform md:translate-y-[-240px] ">

                    <Review img={r1} rating={3} />
                    <Review img={r2} rating={4} />
                    <Review img={r3} rating={4} />

                </div>



            </div>
            <Footer />

        </>
    );
}
