import React from "react";
import img1 from '../images/sofa.png';
import img2 from '../images/beds.png';
import img3 from '../images/dinning.png';

function WideRange(){
    return(
        <>
            <section className="container-fluid section-2">
        <div className="container">
            <h1 className="jost font-24 fw-500">Explore Our Wide Range</h1>
            <p className="jost fw-normal font-16">
                Visit our shop to see amazing creations from our designers.
            </p>
            <div className="row m-b31">
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img1} alt=""/>
                    </div>
                    <span>Sofa Sets</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img2} alt=""/>
                    </div>
                    <span>Beds</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img3} alt=""/>
                    </div>
                    <span>Dinning Sets</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img1} alt=""/>
                    </div>
                    <span>TV Units</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img1} alt=""/>
                    </div>
                    <span>Book Shelves</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img1} alt=""/>
                    </div>
                    <span>Study Tables</span>
                </div>
            </div>

            <div className="row m-b31">
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img1} alt=""/>
                    </div>
                    <span>Shoe Racks</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img2} alt=""/>
                    </div>
                    <span>Wardrobes</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img3} alt=""/>
                    </div>
                    <span>Sofa Cum Beds</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img1} alt=""/>
                    </div>
                    <span>Chest Of Drawers</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img2} alt=""/>
                    </div>
                    <span>Cabinets & Sideboards</span>
                </div>
                <div className="col-lg-2">
                    <div className="cat-box">
                        <img src={img3} alt=""/>
                    </div>
                    <span>Book Shelves</span>
                </div>
            </div>
            <div className="border"></div>
        </div>
    </section>
        </>
    )
}
export default WideRange;