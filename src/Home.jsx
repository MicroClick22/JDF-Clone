import React from "react";
import Header from "./global/Header";
import Discount from "./global/Discount";
import Section1 from "./home/Section1";
import WideRange from "./home/WideRange";
import Essentials from "./global/Essentials";
import BestSelling from "./global/BestSelling";
import RoomForMore from "./home/RoomForMore";
import BedroomFurniture from "./home/BedroomFurniture";
import DinningRoom from "./home/DinningRoom";
import Section8 from "./home/Section8";
import DealsOfDay from "./home/DealsOfDay";
import Location from "./home/Location";
import Quality from "./home/Quality";
import ClientReview from "./global/ClientReview";
import MetaContent from "./global/MetaContent";
import Testimonial from "./global/Testimonial";
import NewsLetter from "./global/NewsLetter";
import Footer from "./global/Footer";
import Disclaimer from "./global/Disclaimer";
import LivingRoom from "./home/LivingRoom";

function Home() {
    return (
        <>
            <Discount />
            <Header />
            <Section1 />
            <WideRange />
            <Essentials />
            <BestSelling />
            <RoomForMore />
            <BedroomFurniture />
            <DinningRoom />
            <LivingRoom />
            <Section8 />
            <DealsOfDay />
            <Location />
            <Quality />
            <ClientReview />
            <MetaContent />
            <Testimonial />
            <NewsLetter />
            <Footer />
            <Disclaimer />
        </>
    )
}
export default Home;