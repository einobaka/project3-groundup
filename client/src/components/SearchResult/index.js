import React, { Component } from "react";
import API from "../../utils/API";
// import SearchContainer from "../components/SearchContainer";
// import SearchForm from "../components/SearchForm";
import ListItems from "../DrinkList";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getDrinkData()
      .then(res => {
        // console.log(res);
        this.setState({ results: res.data })
        // console.log(this.state.results)
      })
      .catch(err => console.log(err));
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDrinksList(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data);
  //       }
  //       this.setState({ results: res.data, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render() {
    return (
      <ul className="list-group search-results">
      {
        this.state.results.map(result => (
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

export default Search;
