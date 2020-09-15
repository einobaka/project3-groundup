import React from "react";
import './style.css';

function SearchBarInShop(props) {

  return (
    
    <form>
        <label>
          <input type="text"
            onChange={props.handleInputChange}
            value={props.search}
            class="form-control" id="search-bar" placeholder="Search for a shop...
          " />
        </label>
    </form>

  );
}

export default SearchBarInShop;