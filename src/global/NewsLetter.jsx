import React from "react";

function NewsLetter(){
    return(
        <>
            <section className="section-15 container-fluid px-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="sec15-box">
                        <h2 className="jost fw-600 font-18">Join our newsletter for 55% off</h2>
                        <h1 className="jost fw-700 color-22222 font-32">Get our emails for info on new items,
                            <br/> sales and more.</h1>
                        <h3 className="font-18 fw-500 jost color-767676">We'll email you a voucher worth £10 off your first order over £50.</h3>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="sec15-box2">
                        
                            <form action="">
                                <div className="floating-label">      
                                    <input className="floating-input" type="text" placeholder=" "/>
                                    <span className="highlight"></span>
                                    <label className="color-767676 font-16">Enter your email address</label>
                                  </div>
                            </form>
                            <h4 className="font-13 jost fw-500 color-767676">
                                By subscribing you agree to our <b>Terms & Conditions and Privacy & Cookies Policy</b>.
                            </h4>
                        
                    </div>
                </div>
            </div>
        </div>
     </section>
        </>
    )
}
export default NewsLetter;