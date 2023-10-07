import React from "react";

function Discount(){
    return(
        <>
            <div className="discount container-fluid">
        <div className="container">
            <div className="header-1 d-flex justify-content-between">
                <h1 className="font-13 inter mb-0">
                    Special discounts on all products. Use Code <span>"SUMMERSALE20"</span> To Get Extra 20% off.
                </h1>
                <div className="contact d-flex">
                    <div className="me-3">
                        <i className="fa-solid fa-phone"></i> <a href="tel:7611077344" className="font-13 inter">+91 99299 46846</a>
                    </div>
                    |
                    <div className="ms-3">
                        <i className="fa-regular fa-circle-question"></i> <a href="mailto:devkarwa1973@outlook.com" className="font-13 inter">Help Center</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Discount;