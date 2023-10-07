import React from 'react'

function Card1(props) {
    return (
        <>
            <div>
            <div className="sec4-box">
                <img src={props.imglink} alt='loading' />
                <h3 className="font-16 jost color-22222">{props.pName}</h3>
                <span className="jost font-16 fw-600">₹{props.dPrice}</span> <strike className="font-14">₹{props.sPrice}</strike>
            </div>
            </div>
        </>
    )
}
export default Card1;