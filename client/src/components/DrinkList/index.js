import React from "react";
import "./style.css";
import StaticRating from "../StaticRating"
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

function ListItems(props) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title ><img class="drink-image" src={props.image}></img></Popover.Title>
      <Popover.Content>
        {props.review}
        
      </Popover.Content>
    </Popover>
  );

  const RatingPopover = () => (
    <OverlayTrigger placement="right" overlay={popover}>
      <Button variant="primary-outline"><p><StaticRating rating={props.rating} /></p></Button>
    </OverlayTrigger>
  );

  return (

    <li key={props.name} className="list-group-item">
      <div class="everything">
        <span><img alt="logo" src={props.logo} className="img-fluid" class="logo" onError={(e)=>{e.target.onerror = null; e.target.src=""}} /></span>
        
        <card >
          <div class="drink-type">
            <h1 class="category">{props.name}</h1>
          </div>
          <br></br>
          <div class="drink-details">
            <p class="name"> {props.category} </p>
            <p class="size"> {props.size} oz </p>
            <p class="price"> ${props.price} </p>
          </div>
          <div class="drink-ratings">
            <RatingPopover />
          </div>
        </card>
      </div>
    </li>
  );
}

export default ListItems;
