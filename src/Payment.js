import React from 'react'
import CheckProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div className="payment">

            <div className="payment_container">
                <h2>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h2>

                {/* PAYMENT SECTION -- DELIVERY ADDRESS */}
                <div className="payment_section">

                    <div className="payment_title">
                        <h3>Delivery Address: </h3>
                    </div>

                    <div className="payment_address">
                        <strong>{user ? user?.email : "Guest"}</strong>
                        <p>123 React St</p>
                        <p>Los Angeles, CA</p>
                        <p>19222</p>
                    </div>

                </div>

                {/* PAYMENT SECTION -- REVIEW ITEMS */}
                <div className="payment_section">

                    <div className="payment_title">
                        <h3>Review items and delivery address</h3>
                    </div>

                    <div className="payment_items">
                        {/* ALL THE PRODUCTS THAT YOU HAVE CHECKED OUT*/}
                        {basket.map(item => (
                            <CheckProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>  

                </div>

                {/* PAYMENT SECTION -- PAYMENT METHOD */}
                <div className="payment_section">

                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment_details">
                        {/* Stripe payment stuff */}
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Payment
