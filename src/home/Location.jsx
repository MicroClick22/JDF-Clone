import React from "react";
import Slider from "react-slick";

function Location(){
    const settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return(
        <>
        <section className="section-10 container-fluid">
        <div className="container">
            <h1 className="jost color-22222 font-24 fw-500 text-center">#Jodhpuri Furniture</h1>
            <h2 className="jost font-16 color-767676 text-center">Offline Furniture Experience Store</h2>

            <div className="row">
            <Slider {...settings}>
          <div>
          <div className="sec10-box">
                        <div className="bg-sec10-1">

                        </div>
                        <h3 className="jost font-24 fw-500 color-22222">
                            Marathalli
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                            <br/>
                            ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                        </p>
                        <button className="btn-1 jost font-15 fw-500">
                            Get Directions<i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
          </div>
          <div>
          <div className="sec10-box">
                        <div className="bg-sec10-2">

                        </div>
                        <h3 className="jost font-24 fw-500 color-22222">
                            Kormangala
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-35, Inner ring road, Koramangala , Bangalore - 560037 ( Near Sony World Signal , After Ejipura signal on 100 feet inner ring road towards sony signal ) 
                        </p>
                        <button className="btn-1 jost font-15 fw-500">
                            Get Directions<i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
          </div>
          <div>
          <div className="sec10-box">
                            <div className="bg-sec10-3">
    
                            </div>
                            <h3 className="jost font-24 fw-500 color-22222">
                                Marathalli
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="https://g.page/jodhpuri-furniture-bangalore?share">
                            <button className="btn-1 jost font-15 fw-500">
                                Get Directions<i className="fa-solid fa-angle-right"></i>
                            </button>
                        </a>
                        </div>
          </div>
          <div>
          <div className="sec10-box">
                        <div className="bg-sec10-1">

                        </div>
                        <h3 className="jost font-24 fw-500 color-22222">
                            Marathalli
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                            <br/>
                            ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                        </p>
                        <button className="btn-1 jost font-15 fw-500">
                            Get Directions<i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
          </div>
          <div>
          <div className="sec10-box">
                            <div className="bg-sec10-3">
    
                            </div>
                            <h3 className="jost font-24 fw-500 color-22222">
                                Marathalli
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="https://g.page/jodhpuri-furniture-bangalore?share">
                            <button className="btn-1 jost font-15 fw-500">
                                Get Directions<i className="fa-solid fa-angle-right"></i>
                            </button>
                        </a>
                        </div>
          </div>
          <div>
          <div className="sec10-box">
                            <div className="bg-sec10-3">
    
                            </div>
                            <h3 className="jost font-24 fw-500 color-22222">
                                Marathalli
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="https://g.page/jodhpuri-furniture-bangalore?share">
                            <button className="btn-1 jost font-15 fw-500">
                                Get Directions<i className="fa-solid fa-angle-right"></i>
                            </button>
                        </a>
                        </div>
          </div>
        </Slider>


                
                
                
            </div>
            <div className="border"></div>
        </div>

    </section>

        </>
    )
}
export default Location;