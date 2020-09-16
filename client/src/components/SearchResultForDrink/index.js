import React, { Component } from "react";
import API from "../../utils/API";
import ListItems from "../DrinkList";
import SearchBarInDrinks from '../SearchBarInDrinks'

class DBdrinks extends Component {
  state = {
    originalResults: [],
    displayResults: [],
    shopResults: [],
    shops: this.props.shops
  };
  componentDidMount() {
    API.getDrinkData().then(results => {
      const searchResult = results.data.map((res, i) => (
        {
          name: res.name,
          price: res.price,
          category: res.category,
          size: res.size,
          rating: res.rating,
          logo: res.logo,
          review: res.review,
          image: res.image,
          shop: res.shop,
          key: i
        }))
      searchResult.reverse();
      this.setState({ originalResults: searchResult, displayResults: searchResult });
    })
  }

  // getLogo() {
  //   API.getShopData().then(results => {
  //     console.log(results)
  //     const shopResults = results.data.map((res) => ({
  //       logo: res.logo
  //     }))
  //   })
  //   this.setState()
  // }

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
          handleInputChange={this.handleInputChange} />
        {
          this.state.displayResults.map(drinks => (
            <ListItems
              name={drinks.name}
              category={drinks.category}
              size={drinks.size}
              price={drinks.price}
              rating={drinks.rating}
              logo={drinks.logo}
              review={drinks.review}
              image={drinks.image}
              shop={drinks.shop}
              key={drinks.key}
            />
          ))
        }
      </ul>
    );
  }
}
export default DBdrinks;