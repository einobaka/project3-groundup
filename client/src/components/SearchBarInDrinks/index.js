import React from "react";
import './style.css';

function SearchBarInDrinks(props) {

  return (

    <form >
      <label>
        <input type="text"
          onChange={props.handleInputChange}
          value={props.search}
          class="form-control mt-1" id="search-bar" placeholder="Search for a drink..." />
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </form>

  );
}

export default SearchBarInDrinks;