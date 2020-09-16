import React from "react";
import './style.css';

function SearchBarInShop(props) {

  return (
    
    <form >
      <div class="form-group">
        <input class="form-control" id="search-bar" type="text" placeholder='Filter by shop name...' onChange={props.handleInputChange}
            value={props.search}></input>
      </div>
    </form>

  );
}

export default SearchBarInShop;