import React from "react";
import Slider from "react-slick";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 95 }}
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
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 95, left: 1370 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-right text-center font-16 ms-2"></i>
        </div>
    );
}

function DealsOfDay() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <section className="section-9 container-fluid">
                <div className="container">
                    <h1 className="jost fw-500 font-24 color-22222 text-center">Deals Of The Day</h1>
                    <h2 className="fw-normal jost font-16 color-767676 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat viverra sed elit dignissim nibh in a. In mauris eget bibendum gravida</h2>

                    <div className="row">
                        <Slider {...settings}>
                            <div>
                                <div className="sec9-box">
                                    <div className="bg-sec9-1 p-16">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                    </div>
                                    <h3 className="font-16 jost color-22222 fw-normal">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-16 fw-600 color-22222">₹58,822</span> <strike className="font-14 color-767676">₹69,997</strike>
                                </div>
                            </div>
                            <div>
                                <div className="sec9-box">
                                    <div className="bg-sec9-2 p-16">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                    </div>
                                    <h3 className="font-16 jost color-22222 fw-normal">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-16 fw-600 color-22222">₹58,822</span> <strike className="font-14 color-767676">₹69,997</strike>
                                </div>
                            </div>
                            <div>
                                <div className="sec9-box">
                                    <div className="bg-sec9-3 p-16">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                    </div>
                                    <h3 className="font-16 jost color-22222 fw-normal">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-16 fw-600 color-22222">₹58,822</span> <strike className="font-14 color-767676">₹69,997</strike>
                                </div>
                            </div>
                            <div>
                                <div className="sec9-box">
                                    <div className="bg-sec9-4 p-16">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                    </div>
                                    <h3 className="font-16 jost color-22222 fw-normal">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-16 fw-600 color-22222">₹58,822</span> <strike className="font-14 color-767676">₹69,997</strike>
                                </div>
                            </div>
                            <div>
                                <div className="sec9-box">
                                    <div className="bg-sec9-2 p-16">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                    </div>
                                    <h3 className="font-16 jost color-22222 fw-normal">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-16 fw-600 color-22222">₹58,822</span> <strike className="font-14 color-767676">₹69,997</strike>
                                </div>
                            </div>
                            <div>
                                <div className="sec9-box">
                                    <div className="bg-sec9-2 p-16">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                    </div>
                                    <h3 className="font-16 jost color-22222 fw-normal">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-16 fw-600 color-22222">₹58,822</span> <strike className="font-14 color-767676">₹69,997</strike>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    )
}
export default DealsOfDay;