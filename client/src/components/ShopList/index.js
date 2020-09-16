import React from "react";
import "./style.css";
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import MapBox from '../Mapbox'

function ListItems(props) {

  const mapicon = 'https://res.cloudinary.com/dwah9rpyx/image/upload/v1600283638/map_gynxcf.png'

  const popover = (
    <Popover id="popover-map">
      <Popover.Title as="h3">Where the coffee at?!</Popover.Title>
      <Popover.Content>
        <MapBox />
      </Popover.Content>
    </Popover>
  );

  const MapPopover = () => (
    <OverlayTrigger trigger='click' placement="right" overlay={popover}>
      <Button variant="primary-outline" ><img src={mapicon} class='mapicon' alt='findit!'></img></Button>
    </OverlayTrigger>
  );

  return (
    <li key={props.name} className="list-group-item">
      <div class='row justify-content-center'>
        <div class='col-lg-2 col-sm-2'><img alt="shoplogo" src={props.logo} className="img-fluid" class='logo' /></div>
        <div class='col-lg-6 col-sm-6'>
          <div class='shopname row-lg-5 row-sm-5'>{props.name}</div>
          <div class='address row-lg-5 row-sm-5'> {props.address} ADDRESSSSSSSSSSSSSSSSSSSSSSSSSSSS </div>
        </div>
        <div class='map col-lg-2 col-sm-2'><MapPopover /></div>
      </div>
    </li>
  );
}

export default ListItems;