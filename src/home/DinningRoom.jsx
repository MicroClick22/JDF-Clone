import React from "react";
import Slider from "react-slick";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 95}}
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

function DinningRoom() {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <section className="container-fluid section-7 px-0">
                <div className="container">
                    <h1 className="jost font-24 fw-500 color-22222" >Dining Room Furniture</h1>
                    <h2 className="font-16 jost color-767676">
                        Explore dining table sets and find the one that's just right for you
                    </h2>

                    <div className="row">
                        <Slider {...settings}>
                            <div>
                                <div className="sec7-box">
                                    <div className="sec7-bg1">

                                    </div>
                                    <h3 className="font-16 jost color-22222">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-15 color-767676">Starting from ₹28,000</span>

                                </div>
                            </div>
                            <div>
                                <div className="sec7-box">
                                    <div className="sec7-bg2">

                                    </div>
                                    <h3 className="font-16 jost color-22222">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-15 color-767676">Starting from ₹28,000</span>

                                </div>
                            </div>
                            <div>
                                <div className="sec7-box">
                                    <div className="sec7-bg3">

                                    </div>
                                    <h3 className="font-16 jost color-22222">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-15 color-767676">Starting from ₹28,000</span>

                                </div>
                            </div>
                            <div>
                                <div className="sec7-box">
                                    <div className="sec7-bg4">

                                    </div>
                                    <h3 className="font-16 jost color-22222">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-15 color-767676">Starting from ₹28,000</span>
                                </div>
                            </div>
                            <div>
                                <div className="sec7-box">
                                    <div className="sec7-bg1">

                                    </div>
                                    <h3 className="font-16 jost color-22222">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-15 color-767676">Starting from ₹28,000</span>

                                </div>
                            </div>
                            <div>
                                <div className="sec7-box">
                                    <div className="sec7-bg4">

                                    </div>
                                    <h3 className="font-16 jost color-22222">Scott King Size Bed with Drawer Storage</h3>
                                    <span className="jost font-15 color-767676">Starting from ₹28,000</span>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    )
}
export default DinningRoom;