import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import SearchDrinkResults from "../SearchDrinkResults";
// import './style.css';

class SearchBar extends Component {
    state = {
        search: "",
        name: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getDrinkData()
            .then(res => {
                // console.log(res.data)
                this.setState({ name: res.data })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // console.log(event.target.value)
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getDrinkData(this.state.search)
            // console.log(this.state.search);
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data);
                }
                this.setState({ results: res.data, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    name={this.state.name}
                />
                <SearchDrinkResults results={this.state.results} />
            </div>


        );
    }
}

export default SearchBar;

// const SearchBar = () => {
//     return (
//         <div class="col pt-2">
//             <div class="form-group">
//                 <input type="text" class="form-control mt-1" id="search-bar" placeholder="Search for a drink or shop..." ></input>

//             </div>
//         </div>
//     )
// }

// export default SearchBar;