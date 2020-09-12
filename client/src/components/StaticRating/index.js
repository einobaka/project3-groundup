import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import empty from '../../img/empty.png';
import half from '../../img//half.png';
import full from '../../img//full.png';
import "./style.css"
 
class StaticRating extends Component {

  firstExample = {
    size: 2,
    value: this.props.rating,
    edit: false,
    emptyIcon: <img class="cup" src={empty} />,
    halfIcon: <img class="cup" src={half} />,
    filledIcon: <img class="cup" src={full} />,
  };
  
  render() {
    return (
      <div className="Ratings">
     
      <ReactStars {...this.firstExample} />
      
    </div>
    )
  }
}


export default StaticRating