import React, { Component } from "react";
import API from "../../utils/API";
import ListItems from "../DrinkList";
import SearchBarInDrinks from '../SearchBarInDrinks'

class DBdrinks extends Component {
  state = {
    originalResults: [],
    displayResults: [],
  };
  componentDidMount() {
  // searchEntry = entry => { // entry is the word from the search bar
    // console.log(entry)
    API.getDrinkData().then(results => {
      // console.log(results);
        const searchResult = results.data.map((res, i) => ({
          name: res.name,
          price: res.price,
          category: res.category,
          size: res.size,
          rating: res.rating,
          logo: res.logo,
          review: res.review,
          image: res.image,
          key: i
        }))
        this.setState({ originalResults: searchResult,displayResults: searchResult });
      })
    }

  filterResults = (query, results) => {
    return results.filter(drinks => {
      const drinkName = drinks.name.toLowerCase();
      return drinkName.includes(query);
    });
  };

  handleInputChange = e => {
    const query = e.target.value;

    this.setState(prevState => ({
      displayResults:
      query.length > 0
          ? this.filterResults(query, prevState.originalResults)
          : prevState.originalResults
    }));
  };

  render() {
    return (

      <ul className="list-group search-results" >
        <SearchBarInDrinks search={this.state.search} 
        handleInputChange = {this.handleInputChange}/>
        {
          this.state.displayResults.map(drinks => (
            <ListItems
              name={drinks.name}
              category={drinks.category}
              name={drinks.name}
              size={drinks.size}
              price={drinks.price}
              rating={drinks.rating}
              logo={drinks.logo}
              review={drinks.review}
              image={drinks.image}
              key={drinks.key}
            />
          ))
        }
      </ul>
    );
  }
}
export default DBdrinks;