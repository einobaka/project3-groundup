import React from "react";

function ListItems(props) {
  console.log(props)
  return (
    <li key={props.name} className="list-group-item">
      <span><img alt="logo" src={props.logo} className="img-fluid" /></span> |
      <span> {props.name} | </span>
      <span> {props.address} address | </span>
    </li>
  );
}

export default ListItems;
