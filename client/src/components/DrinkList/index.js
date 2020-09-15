import React from "react";
import "./style.css";
import StaticRating from "../StaticRating"

function ListItems(props) {
  console.log(props)
  return (
    <li key={props.name} className="list-group-item">
      <div class="everything">
        <span><img alt="logo" src={props.logo} className="img-fluid" class="logo" /></span>
        <card>
          <div class="drink-type">
            <h1 class="category">{props.name}</h1>
          </div>
          <div class="drink-price">
            {/* <p class="price"> <h5>${props.price}</h5></p> */}
          </div>
          <br></br>
          <div class="drink-details">
            <p class="name"> {props.category} | </p>
            <p class="size"> <h7>{props.size} oz</h7> </p>
            <p class="price"> <h2> ${props.price} </h2></p>
          </div>
          <div class="drink-ratings">
            <p><StaticRating rating={props.rating} /></p>
          </div>
        </card>
      </div>
    </li>
  );
}

export default ListItems;
