import React from "react";
import img1 from '../images/quote.svg'

function About_2(){
    return(
        <>
            <section className="about-us-2">
        <div className="container2">
            <div className="row">
                <div className="col-lg-7">
                    <div className="about-us-2-box">

                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-us-2-box2">
                        <img src={img1} alt=""/>
                        <p className="font-32 fw-500 jost">
                            To be Earth’s most customer centric company; to build a place where people can discover
                            virtually all types of furniture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default About_2;