import React from 'react'
import logo from '../images/logo.svg'
import img1 from '../images/active-cart.svg'
import img2 from '../images/map-pin.svg'
import img3 from '../images/payment.svg'

function Header2(){
    return(
        <>
            <div className="header-2 container-fluid">
        <div className="container2">
            <div className="d-flex">
                <img src={logo} alt="" className="img1"/>
                <div className="progress-bar-cart d-flex">
                    <div className="d-flex">
                        <img src={img1} alt=""/>
                        <h2 className="inter font-16 fw-normal color-6">Cart</h2>
                    </div>
                    <div className="border3"></div>
                    <div className="d-flex">
                        <img src={img2} alt=""/>
                        <h2 className="inter font-16 fw-normal color-767676">Cart</h2>
                    </div>
                    <div className="border3"></div>
                    <div className="d-flex">
                        <img src={img3} alt=""/>
                        <h2 className="inter font-16 fw-normal color-767676">Payments</h2>
                    </div>
                </div>
                <div className="ms-auto mt-2">
                    <h1 className="jost font-15 color-767676">Have Questions? We're here to help</h1>
                    <h3 className="jost font-18  text-end"><a href='tel:7611077344' className='color-22222' >Call : +91 99299 46846</a></h3>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Header2;