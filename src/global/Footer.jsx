import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/logo.svg';

function Footer(){
    return(
        <>
            <footer className="container-fluid">
        <div className="footer-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-1-1">
                            <a href=""><img src={img1} alt=""/></a>
                            <h1 className="jost font-16 color-767676"> 
                                Buy all solid sheesham wood furniture online in Bangalore at best price only on Jodhpuri furniture store.
                            </h1>
                            <a href="" className="jost font-16 color-767676"> info@jodhpurifurniture.com</a>
                            <br/>
                            <a href="" className="jost font-16 color-767676">+91 99299 46846</a>
                            <div className="social-media">
                                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                                
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer1-2">
                            <h2 className="font-20 fw-600 jost color-22222">Top Categories</h2>
                            <ul className="p-0">
                                <li><a href="listing.html">Sofas</a></li>
                                <li><a href="">Living</a></li>
                                <li><a href="">Bedroom</a></li>
                                <li><a href="">Dining & Kitchen</a></li>
                                <li><a href="">Storage</a></li>
                                <li><a href=""> Study</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="footer1-3">
                            <h2 className="font-20 fw-600 jost color-22222">Customer Services</h2>
                            <ul className="p-0">
                                <li><a href="">Sell On Jodhpuri</a></li>
                                <li><a href="">Security & Privacy</a></li>
                                <li><a href="">Return & Refund</a></li>
                                <li><a href="">Payment Policy</a></li>
                                <li><a href="">Track Order</a></li>
                                <li><a href="">Type Of Wood</a></li>
                                <li><a href="">Customer Stories</a></li>
                                <li><a href="">Grievance Contact</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer1-4">
                            <h2 className="font-20 fw-600 jost color-22222">Our Company</h2>
                            <ul className="p-0">
                                <li><Link to='/about'>About Us</Link> </li>
                                <li><a href="">Media</a></li>
                                <li><a href="">Custom Furniture</a></li>
                                <li><a href="">Coupon Partners</a></li>
                                <li><a href="">Furniture Exporters</a></li>
                                <li><a href="">Terms Of Use</a></li>
                                <li><a href="">Contact Us</a></li>                                
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="border"></div>
                <div className="loctaion d-flex">
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            Jodhpuri Furniture, No.65, LRDE Layout, Marathahalli, Bengaluru, 560037
                        </p>
                    </div>
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            Jodhpuri Furniture, No.65, LRDE Layout, Marathahalli, Bengaluru, 560037
                        </p>
                    </div>
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            Jodhpuri Furniture, No.65, LRDE Layout, Marathahalli, Bengaluru, 560037
                        </p>
                    </div>
                    
                    
                </div>
                <div className="loctaion d-flex">
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            Jodhpuri Furniture, No.65, LRDE Layout, Marathahalli, Bengaluru, 560037
                        </p>
                    </div>
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            Jodhpuri Furniture, No.65, LRDE Layout, Marathahalli, Bengaluru, 560037
                        </p>
                    </div>
                </div>
                <div className="border2"></div>
            </div>
        </div>
     </footer>
        </>
    )
}
export default Footer;