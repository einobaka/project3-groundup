import React from "react";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import empty from './empty.png';
import half from './half.png';
import full from './full.png';
import "./style.css"

class UserRating extends Component {

secondExample = {
  size: 30,
  count: 5,
  color: "brown",
  activeColor: "gold",
  value: 3.5,
  a11y: true,
  isHalf: true,
  
  emptyIcon: <img class="cup" src={empty} />,
  halfIcon: <img class="cup" src={half} />,
  filledIcon: <img class="cup" src={full} />,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
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