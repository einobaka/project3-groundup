// import React, { Component } from "react";
// import API from "../../utils/API";
// import SearchContainer from "../components/SearchContainer";
// import SearchForm from "../SearchForm";
import React from 'react';
// import ListItems from "../DrinkList";
import StaticRating from "../StaticRating"


function SearchDrinkResults(props) {
  // console.log(props.results)
  if (!props.results) {
    return null;
  }
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.name} className="list-group-item">
          <span><img alt="logo" src={result.logo} className="img-fluid" /></span>
          <span> {result.category} | </span>
          <span> {result.name} | </span>
          <span> {result.size}oz | </span>
          <span> ${result.price}</span>
          <span> <StaticRating rating={result.rating} /></span>
        </li>
      ))}

      {/* {props.results.map(result => (
        <ListItems
          name={result.name}
          category={result.category}
          name={result.name}
          size={result.size}
          price={result.price}
          rating={result.rating}
          logo={result.logo}
        /> */}
      {/* ))} */}
    </ul>
  )
}

export default SearchDrinkResults;


// class Search extends Component {
//   state = {
//     search: "",
//     results: [],
//     error: ""
//   };

//   // componentDidMount() {
//   //   API.getDrinkData()
//   //     .then(res => {
//   //       this.setState({ results: res.data })
//   //       // console.log(this.state.results)
//   //     })
//   //     .catch(err => console.log(err));
//   // }

//   // handleInputChange = event => {
//   //   this.setState({ search: event.target.value });
//   // };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDrinksList(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data);
//         }
//         this.setState({ results: res.data, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };

//   render() {
//     return (
//       // <SearchForm
//       //   // handleFormSubmit={this.handleFormSubmit}
//       //   handleInputChange={this.handleInputChange}
//       //   name={this.state.name}
//       // />
//       <ul className="list-group search-results">
//         {
//           this.state.results.map(result => (
//             <ListItems
//               name={result.name}
//               category={result.category}
//               name={result.name}
//               size={result.size}
//               price={result.price}
//               rating={result.rating}
//               logo={result.logo}
//             />
//           ))
//         }
//       </ul>
//     );
//   }
// }

// export default Search;
