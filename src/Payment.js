import React from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div classnName="payment">

            <div className="payment_container">

                {/* PAYMENT SECTION -- DELIVERY ADDRESS */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
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
                    
                </div>

                {/* PAYMENT SECTION -- PAYMENT METHOD */}
                <div className="payment_section">
                    
                </div>

            </div>
            
        </div>
    )
}

export default Payment
