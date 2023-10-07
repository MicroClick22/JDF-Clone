import React from "react";
import img1 from '../images/upi.svg'

function Disclaimer(){
    return(
        <>
            <div class="disclaimer container-fluid">
        <div class="container d-flex justify-content-between">

            <h1 class="color-767676 fw-normal jost font-16">Copyright 2022 © Jodhpuri Furniture - All Rights Reserved.</h1>
            <img src={img1} alt=""/>
        </div>
     </div>
        </>
    )
}
export default Disclaimer;