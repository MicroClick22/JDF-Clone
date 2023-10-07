import React from "react";
import Slider from "react-slick";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, opacity: 0.5, placeItems: "center", top: 246 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-left text-center font-16 ms-2"></i>
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, opacity: 0.5, placeItems: "center", top: 246, left: 876.8 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-right text-center font-16 ms-2"></i>
        </div>
    );
}
function Section1() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <section className="container-fluid section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Slider {...settings}>
                                <div>
                                    <div className="bg-background1">
                                        <h1 className="font-48 fw-600 jost mb-0">Dining Table Set</h1>
                                        <h2 className="font-24 jost fw-normal">To Make Bond Over Meals</h2>
                                        <button className="btn-1 jost font-16 fw-500">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-background1">
                                        <h1 className="font-48 fw-600 jost mb-0">Dining Table Set</h1>
                                        <h2 className="font-24 jost fw-normal">To Make Bond Over Meals</h2>
                                        <button className="btn-1 jost font-16 fw-500">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-background1">
                                        <h1 className="font-48 fw-600 jost mb-0">Dining Table Set</h1>
                                        <h2 className="font-24 jost fw-normal">To Make Bond Over Meals</h2>
                                        <button className="btn-1 jost font-16 fw-500">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-background1">
                                        <h1 className="font-48 fw-600 jost mb-0">Dining Table Set</h1>
                                        <h2 className="font-24 jost fw-normal">To Make Bond Over Meals</h2>
                                        <button className="btn-1 jost font-16 fw-500">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="col-lg-4">
                            <div className="bg-background2">
                                <h1 className="jost fw-600 mb-0">Bedroom Suite</h1>
                                <h2 className="jost font-24 fw-500">Up To 55% Off</h2>
                                <button className="btn-1 jost font-16 fw-500">
                                    Buy Now
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}
export default Section1;