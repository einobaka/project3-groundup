import React, { Component } from 'react';
import './style.css';
import image from '../../img/drink.jpg';
import stars from '../../img/stars/4_half.png';
import Drink from '../latest';
import API from '../../utils/API';

class LatestDrink extends Component {

    // state = {
    //     // image: image,
    //     // price: "",
    //     // stars: stars,
    //     // drink: "",
    //     // user: "",
    //     // timestamp: ""
    // };
    // state =  {
    //     latestDrink: []
    // }

    // {names.filter(name => name.includes('J')).map(filteredName => (
    //     <li>
    //       {filteredName}
    //     </li>
    //   ))}

    // componentDidMount() {
    //     API.getDrinkData().then(res => {
    //         // console.log(res.data)
    //       const result =  res.filter((res=> res.includes(latestDrink)).map(filteredResult => (
    //             {
    //             // image: image,
    //             // price: res.price,
    //             // stars: res.rating,
    //             // drink: res.name,
    //             // user: "Scoot",
    //             // timestamp: "7:43am MT on September 8th, 2020"
    //             {filteredResult.latestDrink}
    //        })
    //         this.setState({
    //             latestDrink:searchResult
               
    //         });
           
    //        )
    //     }
    //     )
        


    render() {
        return (
            <div>
                {/* <Drink/> */}
                 <h2 class="ml-5">Latest Drink</h2>
                <div class="card mx-5 shadow-lg">
                    <div class="img-container">
                        <img id="drink-image"  class="card-img-top" alt=""></img>
                        <div class="img-overlay text-center"><span id="latest-price"><Drink/></span></div>
                    </div>
                      <div class="card-body text-center pb-0">
                        {/* <img class="stars mb-3" src={this.state.stars}></img> */}
                        {/* <h3>{this.state.drink}</h3>
                        <h4>- {this.state.user}</h4> 
                        {/* <p class="text-left pt-4">{this.state.timestamp}</p> */}
                   
                   </div> 
                 </div>  
            </div>
        )
    };
}

export default LatestDrink;