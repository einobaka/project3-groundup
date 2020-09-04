import React from 'react';
import './style.css';

const SearchBar = () => {
    return (
        <div class="col">
            <div class="form-group">
                <input type="text" class="form-control mt-1" id="search-bar" placeholder="Search for a drink or shop..." ></input>
            </div>
        </div>
    )
}

export default SearchBar;