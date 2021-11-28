import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckProduct({ id, image, title, price, rating}) {
    const[{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price">
                    <strong>${price}</strong>
                </p>

                <div className="Product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <span aria-label="star" role="img">⭐</span> 
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckProduct
