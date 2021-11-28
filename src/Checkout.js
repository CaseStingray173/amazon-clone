import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <h3>Hello, {user ? user?.email: 'Guest'}</h3>
                <h2 className="checkout_title">Your Shopping Bag</h2>
                
                {basket.map(item =>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout
