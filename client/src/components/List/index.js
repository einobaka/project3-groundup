import React from "react";
// import "./style.css";

function ListItems(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <p> {result} </p>
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
