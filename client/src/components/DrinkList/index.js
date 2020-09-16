import React from "react";
import "./style.css";
import StaticRating from "../StaticRating"
import { OverlayTrigger, Tooltip, Popover, Button } from 'react-bootstrap';

function ListItems(props) {

  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Simple tooltip
  //   </Tooltip>);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.rating} Coffee Stars</Popover.Title>
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
        <span><img alt="logo" src={props.logo} className="img-fluid" class="logo" /></span>
        <card>
          <div class="drink-type">
            <h1 class="category">{props.name}</h1>
          </div>
          <br></br>
          <div class="drink-details">
            <p class="name"> {props.category} | </p>
            <p class="size"> <h7>{props.size} oz</h7> </p>
            <p class="price"> <h2> ${props.price} </h2></p>
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
