import React, { useState, useEffect } from 'react'
import CheckProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe =  useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () =>{
            const response = await axios ({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async(event) => {
        // Do all the stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) =>{
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    
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

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText = {(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}

                        </form>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Payment
