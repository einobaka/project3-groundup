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
      .then(res => this.setState({ name: res.data }))
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
      <div>
        {/* <SearchContainer style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Drinks!</h1> */}
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            name={this.state.name}
          /> */}
          {/* <ListItems results={this.state.results} /> */}
          {/* <p>lor</p> */}
        {/* </SearchContainer> */}
      </div>
    );
  }
}

export default Search;
