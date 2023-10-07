import React from "react";
import Header from "./global/Header";
import Discount from "./global/Discount";
import Footer from "./global/Footer";
import Disclaimer from "./global/Disclaimer" 
import About_1 from "./about/About-1";
import About_2 from "./about/About-2";
import Achivements from "./about/Achivements";
import OneShopStop from "./about/OneStopShop";
import Testimonial from "./global/Testimonial";
import NewsLetter from "./global/NewsLetter";

function About(){
    return(
        <>
        <Discount/>
            <Header/>
            <About_1/>
            <About_2/>
            <Achivements/>
            <OneShopStop/>
            <Testimonial/>
            <NewsLetter/>
            <Footer/>
            <Disclaimer/>
        </>
    )
}
export default About;