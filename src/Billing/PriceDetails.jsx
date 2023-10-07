import React from 'react'

function PriceDetails(){
    return(
        <>
                    <div className="billing-box">
                        <h1 className="jost font-14 fw-normal color-22222">Have a Coupon Code ?</h1>
                        <div className="input-coupon">
                            <input type="text" placeholder="Apply Coupon"/>
                            <button className="coupon-apply">
                                <span className="jost fw-500">APPLY</span>
                            </button>
                        </div>
                        <div className="border-apply"></div>
                        <div className="d-flex justify-content-between mb-3">
                            <h3 className="jost fw-600 font-18 mb-0">Price Details</h3>
                            <h3 className="jost fw-600 font-16 mb-0">Item(1)</h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h3 className="jost fw-normal font-15">Cart Value</h3>
                            <h3 className="jost fw-normal font-15">₹69,999</h3>
                        </div>
                        <div className="border-apply2"></div>
                        <div className="d-flex justify-content-between discount-price">
                            <h3 className="jost fw-normal font-15 mb-0">Retail Discount</h3>
                            <h3 className="jost fw-500 font-15 mb-0">(-) ₹24,824</h3>
                        </div>
                        <div className="border-apply2"></div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3 className="jost fw-600 color-22222 font-18 mb-0">Total Payable Amount</h3>
                                <span className="color-767676 jost fw-500 font-13">(Incl. of all taxes)</span>
                            </div>
                            <h3 className="jost fw-500 font-15 mb-0">₹56,469</h3>
                        </div>
                        <button className="checkout font-16 jost fw-500">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
        </>
    )
}
export default PriceDetails;