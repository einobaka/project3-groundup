import React, { Component } from 'react';
import './style.css';
import StaticRating from '../StaticRating'
import API from '../../utils/API';

class LatestDrink extends Component {

    state = {
        image: "",
        price: "",
        rating: 5,
        drink: "",
        user: "",
        timestamp: ""
    };

    componentDidMount() {
        API.getDrinkData().then(res => {
            for (let i = res.data.length - 1; i < res.data.length; i--) {
                const drink = res.data[i];
                if (drink.image) {
                    console.log(drink)
                    this.setState({
                        image: drink.image,
                        price: drink.price,
                        rating: drink.rating,
                        drink: drink.name
                    })
                } else {
                    return
                }
            }
        })
    }



    render() {
        return (
            <div>
                <h2 class="ml-5">Latest Drink</h2>
                <div class="card mx-5 shadow-lg">
                    <div class="img-container">
                        <img id="drink-image" src={this.state.image} class="card-img-top" alt=""></img>
                        <div class="img-overlay text-center"><span id="latest-price">${this.state.price}</span></div>
                    </div>
                    <div id="drink-body" class="card-body text-center pb-0">
                        <div class="stars">
                            <StaticRating
                                rating={this.state.rating}
                            />
                        </div>
                        <h3 class="mt-3">{this.state.drink}</h3>
                        <h6>Submitted by Scoot</h6>
                    </div>
                </div>
            </div>
        )
    };
}

export default LatestDrink;