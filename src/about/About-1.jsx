import React from "react";
import img1 from '../images/about-1.png';

function About_1(){
    return(
        <>
        <section className="about-us-1 container-fluid">
        <div className="container2">
            <h1 className="font-36 jost fw-600 color-22222">About Us</h1>
            <h2 className="font-16 jost fw-normal color-2">Create the bedroom of your dreams with the perfect bed</h2>
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-content">
                        <h1 className="color-6 fw-normal font-16 jost mb-2">WELCOME TO OUR COMPANY</h1>
                        <h2 className="font-32 jost fw-500 color-2">
                            Jodhpurifurniture.com is a one stop
                            <br/>
                            shop for all your furniture and
                            <br/>
                            household needs.
                        </h2>
                        <p className="jost fw-normal color-2 font-16">
                            We aim at providing a hassle free and enjoyable shopping experience to shoppers across the
                            country. Founded by Aayush Agarwal in 2015, Jodhpuri endeavors to build an online furniture
                            destination in India by giving customers more of what they want – low prices, vast
                            selection, fast and reliable delivery and a trusted and convenient experience. We strive to
                            achieve the highest level of “Customer Satisfaction” possible.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={img1} alt=""/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default About_1;