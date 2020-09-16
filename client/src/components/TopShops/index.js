import React, { Component } from 'react';
import './style.css';
import logoOne from '../../img/dutch.png';
import logoTwo from '../../img/starbucks.png';
import logoThree from '../../img/dunkin.png';
import logoFour from '../../img/shoplogo4.png';
import logoFive from '../../img/shoplogo5.png';
import imageOne from '../../img/weloveyou.jpg';

class TopShops extends Component {

    state = {
        one: {
            name: "Dutch Bros",
            logo: logoOne,
            image: imageOne,
        },

        two: {
            name: "Starbucks",
            logo: logoTwo,
        },
        three: {
            name: "Dunkin Donuts",
            logo: logoThree,
        },
        four: {
            name: "Costa Coffee",
            logo: logoFour,
        },
        five: {
            name: "Peets Coffee and Tea",
            logo: logoFive,
        },

    };

    render() {
        return (
            <div>
                <h2 class="ml-5">Top Shops</h2>
                <div class="card mx-5 shadow-lg">
                    <div class="img-container">
                        <img id="one-image" src={this.state.one.image} class="card-img-top" alt="Top Shop"></img>
                        <div class="img-overlay text-center"><img id="one-logo" src={this.state.one.logo}alt=''></img> </div>
                    </div>
                    <div class="card-body">
                        <div id="carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100 carousel-logo" src={this.state.two.logo} alt=''></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-logo" src={this.state.three.logo} alt=''></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-logo" src={this.state.four.logo} alt=''></img>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-logo" src={this.state.five.logo} alt=''></img>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default TopShops;