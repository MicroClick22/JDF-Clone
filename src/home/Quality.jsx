import React from "react";
import img1 from '../images/shipping.svg';
import img2 from '../images/product.svg';
import img3 from '../images/help.svg';
import img4 from '../images/secured.svg';




function Quality(){
    return(
        <>
            <section className="section-11 container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="sec11-box d-flex">
                        <div className="me-3">
                            <img src={img1} alt=""/>
                        </div>
                        <div>
                            <h1 className="jost font-18 fw-500 color-22222">Free Shipping</h1>
                            <h2 className="jost fw-normal font-15 color-767676">Apply for all orders over ₹10,000</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="sec11-box d-flex">
                        <div className="me-3">
                            <img src={img2} alt=""/>
                        </div>
                        <div>
                            <h1 className="jost font-18 fw-500 color-22222">Product Returns</h1>
                            <h2 className="jost fw-normal font-15 color-767676">You have 30 days to Return</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="sec11-box d-flex">
                        <div className="me-3">
                            <img src={img3} alt=""/>
                        </div>
                        <div>
                            <h1 className="jost font-18 fw-500 color-22222">Support 24/7</h1>
                            <h2 className="jost fw-normal font-15 color-767676">Contact us 24 houres a day</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="sec11-box d-flex">
                        <div className="me-3">
                            <img src={img4} alt=""/>
                        </div>
                        <div>
                            <h1 className="jost font-18 fw-500 color-22222">Secured Payment</h1>
                            <h2 className="jost fw-normal font-15 color-767676">All your payment information is safe</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Quality;