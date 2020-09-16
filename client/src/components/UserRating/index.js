import React, { Component } from "react";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import empty from '../../img/empty.png';
import half from '../../img//half.png';
import full from '../../img//full.png';
import "./style.css"

class UserRating extends Component {

secondExample = {
  size: 30,
  count: 5,
  color: "brown",
  activeColor: "gold",
  value: 5,
  a11y: true,
  isHalf: true,
  
  emptyIcon: <img class="cup" src={empty} alt='empty' />,
  halfIcon: <img class="cup" src={half} alt='empty' />,
  filledIcon: <img class="cup" src={full} alt='empty' />,
  onChange: newValue => {
    this.props.updateStars(newValue);
  }
}

  render() {
    return (
      <div className="Ratings">
     
      <ReactStars {...this.secondExample} />
      
    </div>
    )
  }
}


export default UserRating