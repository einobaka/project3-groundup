import React, { PureComponent } from "react";
import ReactStars from "react-rating-stars-component";
import empty from '../../img/empty.png';
import half from '../../img//half.png';
import full from '../../img//full.png';
import "./style.css"
 
class StaticRating extends PureComponent {

  firstExample = {
    size: 2,
    value: this.props.rating,
    edit: false,
    emptyIcon: <img class="cup" src={empty} alt='' />,
    halfIcon: <img class="cup" src={half} alt=''/>,
    filledIcon: <img class="cup" src={full} alt=''/>,
  };
  
  render() {
    return (
      <div class="Ratings">
      <ReactStars {...this.firstExample} />
    </div>
    )
  }
}


export default StaticRating