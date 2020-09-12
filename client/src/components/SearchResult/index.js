import React, { Component } from "react";
import API from "../../utils/API";
// import SearchContainer from "../components/SearchContainer";
// import SearchForm from "../components/SearchForm";
import ListItems from "../List";
// import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    name: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getDrinkData()
      .then(res => {
        this.setState({ results: res.data })
        console.log(this.state.results)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDrinksList(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
        <ul className="list-group search-results">
        {
          this.state.results.map(result => (
            <ListItems 
            name={result.name}
            />
          ))
        }
        </ul>
    );
  }
}

export default Search;
