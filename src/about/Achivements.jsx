import React from "react";
import img1 from '../images/play-btn.svg';

function Achivements(){
    return(
        <>
            <section className="container-fluid about-us-3">
        <div className="container2">
            <div className="row">
                <div className="col-lg-5">
                    <div className="about-us-3-box">
                        <h1 className="font-32 jost color-2 fw-500 mb-2">Jodhpuri Furniture Archivements</h1>
                        <p className="font-16 jost color-2 fw-normal">
                            Jodhpuri endeavors to build an online furniture destination in India by giving customers
                            more of what they want – low prices, vast selection, fast and reliable delivery and a
                            trusted and convenient experience.
                        </p>
                    </div>
                </div>
                <div className="col-lg-1">

                </div>
                <div className="col-lg-2">
                    <div className="d-grid ">
                        <div className="count-img">

                        </div>
                        <h2 className="font-32 fw-500 jost color-2 text-center">15 K+</h2>
                        <h3 className="font-16 jost color-2 fw-normal text-center">In Stock Products</h3>

                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="d-grid ">
                        <div className="count-img">

                        </div>
                        <h2 className="font-32 fw-500 jost color-2 text-center">1 Lack+</h2>
                        <h3 className="font-16 jost color-2 fw-normal text-center">Satisfied
                            Customers </h3>

                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="d-grid ">
                        <div className="count-img">

                        </div>
                        <h2 className="font-32 fw-500 jost color-2 text-center">30+</h2>
                        <h3 className="font-16 jost color-2 fw-normal text-center">Delivery Centers
                        </h3>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="video-about d-grid ">
                        <img src={img1} alt="" className=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Achivements;