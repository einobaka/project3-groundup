import React from "react";
import './style.css';

function SearchBarInDrinks(props) {

  return (

    <form >
      <div class="form-group">
        <input class="form-control" id="search-bar" type="text" placeholder='Filter by drink name...' onChange={props.handleInputChange}
          value={props.search}></input>
      </div>
    </form>

  );
}

export default SearchBarInDrinks;