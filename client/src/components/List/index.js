import React from "react";
// import "./style.css";

function ListItems(props) {
  return (
        <li key={props.name} className="list-group-item">
          <p> {props.name} </p>
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </li>
  );
}

export default ListItems;
