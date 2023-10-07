import React from "react";
import img1 from '../images/sec12-1.png';
import img2 from '../images/sec12-2.png';
import img3 from '../images/sec12-3.png';
import img4 from '../images/sec12-4.png';



function ClientReview(){
    return(
        <>
            <section className="section-12 container-fluid">
        <div className="container">
            <h1 className="jost font-24 fw-500 color-22222 text-center">What Our Happy Client Say</h1>
            <h2 className="jost font-16 fw-normal color-767676 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat viverra sed elit dignissim nibh in a. In mauris eget bibendum gravida</h2>
            <div className="row">
                <div className="col-lg-3">
                    <img src={img1} alt=""/>
                    <h3 className="jost fw-600 color-22222">Scott King Size Bed with Storage</h3>
                    <p className="font-15 jost color-767676">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ac nisl morbi iaculis quis. Aliquet elit pretium faucibus urna, cras senectus eget dui. 
                    </p>
                    <div className="customer-name d-flex justify-content-between">
                        <div>
                            <h4 className="jost font-16 fw-600 color-22222 mb-0">Raj Kumar Rao</h4>
                            <h5 className="jost font-14 color-767676 fw-normal">
                                Bengaluru, 560037
                            </h5>
                        </div>

                        <div className="rating font-14 fw-500 jost">
                            4.5 <i className="fa-solid fa-star"></i>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <img src={img2} alt=""/>
                    <h3 className="jost fw-600 color-22222">Scott King Size Bed with Storage</h3>
                    <p className="font-15 jost color-767676">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ac nisl morbi iaculis quis. Aliquet elit pretium faucibus urna, cras senectus eget dui. 
                    </p>
                    <div className="customer-name d-flex justify-content-between">
                        <div>
                            <h4 className="jost font-16 fw-600 color-22222 mb-0">Raj Kumar Rao</h4>
                            <h5 className="jost font-14 color-767676 fw-normal">
                                Bengaluru, 560037
                            </h5>
                        </div>

                        <div className="rating font-14 fw-500 jost">
                            4.5 <i className="fa-solid fa-star"></i>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <img src={img3} alt=""/>
                    <h3 className="jost fw-600 color-22222">Scott King Size Bed with Storage</h3>
                    <p className="font-15 jost color-767676">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ac nisl morbi iaculis quis. Aliquet elit pretium faucibus urna, cras senectus eget dui. 
                    </p>
                    <div className="customer-name d-flex justify-content-between">
                        <div>
                            <h4 className="jost font-16 fw-600 color-22222 mb-0">Raj Kumar Rao</h4>
                            <h5 className="jost font-14 color-767676 fw-normal">
                                Bengaluru, 560037
                            </h5>
                        </div>

                        <div className="rating font-14 fw-500 jost">
                            4.5 <i className="fa-solid fa-star"></i>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <img src={img4} alt=""/>
                    <h3 className="jost fw-600 color-22222">Scott King Size Bed with Storage</h3>
                    <p className="font-15 jost color-767676">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ac nisl morbi iaculis quis. Aliquet elit pretium faucibus urna, cras senectus eget dui. 
                    </p>
                    <div className="customer-name d-flex justify-content-between">
                        <div>
                            <h4 className="jost font-16 fw-600 color-22222 mb-0">Raj Kumar Rao</h4>
                            <h5 className="jost font-14 color-767676 fw-normal">
                                Bengaluru, 560037
                            </h5>
                        </div>

                        <div className="rating font-14 fw-500 jost">
                            4.5 <i className="fa-solid fa-star"></i>
                        </div>

                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button>
                    Veiw All <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
        
    </section>
        </>
    )
}
export default ClientReview;