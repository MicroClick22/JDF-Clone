import React from 'react'
import Cart_Item from './Cart-Item'
import PriceDetails from './PriceDetails'

function Main() {
    return (
        <>
            <section className="Cart">
                <div className="container2">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="d-flex justify-content-between">
                                <h1 className="jost font-20 fw-600 color-22222">My Cart</h1>
                                <div className="d-flex">
                                    <h2 className="jost fw-600 color-22222 font-16">Delivery</h2>
                                    <div className="pincode">
                                        <input type="text" placeholder="Pincode"/>
                                        <button type="submit" className="jost font-14 fw-500 color-6">
                                            APPLY
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="saved">
                                <h1 className="jost font-15 fw-500 text-center">Congratulations! You Saved 14,500 On This Order</h1>
                            </div>

                            <div className="items">
                            <Cart_Item/>
                            <Cart_Item/>
                            <Cart_Item/>
                            <Cart_Item/>
                            </div>

                        </div>
                        <div className='col-lg-4'>
                        <PriceDetails/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;