import React from 'react'
import Header from './Header'
import MainNav from './MainNav'
import Sliderr from './Slider'
import Toppicks from './Toppicks'
import Worldsection from './World'
import Footer from "@/components/Footer/index"
import Groupbooking from './Groupbooking'
import Trendingnow from './Trendingnow'
import Quickescapes from './Quickescapes'
import Tropicalpackages from './Tropicalpackages'
import Experimentalstages from './Experimentalstages'
import Essence from './Essence'


export default function LandingSlider() {
    return (
        <>
            <Sliderr />
            {/* upper header */}
            <Header />
            {/* Main navbar */}
            <MainNav />
            {/* Top picks section */}
            <Toppicks />
            {/* WOrld Section */}
            <Worldsection />
            <Groupbooking />
            <Trendingnow />
            <Quickescapes />
            <Tropicalpackages />
            <Experimentalstages />
            <Essence />

            <Footer />

        </>
    )
}
