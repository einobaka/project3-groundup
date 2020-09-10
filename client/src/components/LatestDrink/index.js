import React, { Component } from 'react';
import './style.css';
import image from '../../img/drink.jpg';
import stars from '../../img/stars/4_half.png'

class LatestDrink extends Component {

    state = {
        image: image,
        price: "5.37",
        stars: stars,
        drink: "Pumpkin Spice Cold Brew",
        user: "Scoot",
        timestamp: "7:43am MT on September 8th, 2020"
    };

    render() {
        return (
            <div class="card mx-5">
                <div class="img-container">
                    <img id="drink-image" src={this.state.image} class="card-img-top" alt="Latest Drink"></img>
                    <div class="img-overlay text-center"><span id="latest-price">${this.state.price}</span></div>
                </div>
                <div class="card-body text-center pb-0">
                    <img class="stars mb-3" src={this.state.stars}></img>
                    <h3>{this.state.drink}</h3>
                    <h4>- {this.state.user}</h4>
                    <p class="text-left pt-4">{this.state.timestamp}</p>
                </div>
            </div>
        )
    };
}

export default LatestDrink;