import React, { Component } from "react";
import API from "../../utils/API";
// import SearchContainer from "../components/SearchContainer";
// import SearchForm from "../components/SearchForm";
import ListItems from "../DrinkList";
import SearchBar from '../SearchBar'

class SearchResult extends Component {
  state = {
    // search: "",
    searchResults: [],
    filterdResults: [],
    error: ""
  };

  searchEntry = entry => {
    console.log(entry)
    API.getDrinkData()
      .then(res => {
        console.log(res.data);
        // data is coming in, just need to filter it to filteredResults state, right now there is nothing rendering because filteredResults is empty
      })
      .catch(err => console.log(err));
  }

  render() {
    return (

      <ul className="list-group search-results" >
        <SearchBar searchEntry={this.searchEntry} />
        {
          this.state.filterdResults.map(result => (
            <ListItems
              name={result.name}
              category={result.category}
              name={result.name}
              size={result.size}
              price={result.price}
              rating={result.rating}
              logo={result.logo}
            />
          ))
        }
      </ul>
    );
  }
}
export default SearchResult;