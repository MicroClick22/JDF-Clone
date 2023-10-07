import React from "react";
import img1 from '../images/about-2.png'

function OneShopStop(){
    return(
        <>
        <section className="container-fluid about-us-4">
        <div className="container2">
            <h1 className="jost font-32 color-2 fw-500 text-center m-lg-auto">Jodhpurifurniture.com is a one stop shop for
                all your furniture and household needs.</h1>
            <p className="jost font-16 color-2 text-center m-lg-auto">
                Jodhpuri Handicrafts is an exporter from Jodhpur (India) which is the hub for handicraft and furniture
                industry and mainly deals in Sheesham and Mango wood furniture items. Our dedicated team of skilled
                craftsmen use the latest technology to provide a complete range of innovative bedroom, dining rooms,
                living rooms, kitchen and storage furniture to provide clients all over the world with finest quality
                furniture. Jodhpuri Handicrafts has its own unique reputation in the world of wooden, industrial and
                reclaimed furniture and handicraft items. We operate in the industry with the mission of providing
                uncompromising quality products.
            </p>
        </div>
    </section>
             <section className="container-fluid about-us-5">
        <div className="container2">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="font-24 jost fw-500 color-2">Our cutting edge E-commerce platform, highly experienced
                        buying team, agile warehouse systems and customer care center provides customer with:</h1>
                    <ul className="p-0">
                        <li className="list-unstyled font-20 color-2 fw-500 jost">Broader selection of products</li>
                        <li className="list-unstyled font-20 color-2 fw-500 jost">
                            Superior buying experience
                            </li>
                        <li className="list-unstyled font-20 color-2 fw-500 jost">
                            On-time delivery of products
                            </li>
                        <li className="list-unstyled font-20 color-2 fw-500 jost">
                            Quick resolution of any concerns</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img src={img1} alt="" className="pt-3"/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default OneShopStop;