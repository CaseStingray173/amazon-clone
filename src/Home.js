import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" alt="prime banner" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        
                <div className="home_row">
                    <Product 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                        price={29.99} 
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                        price={238.99} 
                        rating={4}
                        image="https://appliancist.com/wp-content/uploads/2016/07/kenwood-stand-mixer-kmix-kmx51.jpg" 
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id="3254354345"
                        title="Fitbit Luxe Fitness and Wellness Tracker with Stress Management, Sleep Tracking and 24/7 Heart Rate, One Size S L Bands Included, Lunar White/Soft Gold Stainless Steel, 1 Count" 
                        price={198.99} 
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61zX3Mzqw-L._AC_SL1500_.jpg" 
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                        price={98.99} 
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Gen)" 
                        price={598.99} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX450_.jpg" 
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                        price={1009.99} 
                        rating={5}
                        image="https://media.gamestop.com/i/gamestop/11137443/Samsung-Odyssey-G9-49-in-5120x1440-240Hz-Curved-Gaming-Monitor?$pdp$$&fmt=webp" 
                    />
                    <Product 
                        id="321231495"
                        title="2021 Xbox Series X Halo Infinite Limited Edition Gaming Console Bundle: New Halo Infinite Series X 1TB Console System – Bonus: The Witcher 3 Game, and Dikit 8K HDMI Cable – System Bundle, Games, Halo" 
                        price={1599.99} 
                        rating={5}
                        image="https://m.media-amazon.com/images/I/610nkYW2J8L._AC_SL1197_.jpg" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
