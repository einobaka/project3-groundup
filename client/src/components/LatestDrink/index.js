import React from 'react';
import './style.css';
import image from '../../img/drink.jpg'
import stars from '../../img/stars/5.png'

const LatestDrink = () => {
    return (
        <div class="card mx-5">
            <div class="img-container">
                <img id="drink-image" src={image} class="card-img-top" alt="Latest Drink"></img>
                <div class="img-overlay text-center"><span id="latest-price">$5.37</span></div>
            </div>
            <div class="card-body text-center">
                <img class="stars" src={stars}></img>
            </div>
        </div>
    )
}

export default LatestDrink;