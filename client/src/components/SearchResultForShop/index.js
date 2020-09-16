import React, { Component } from "react";
import API from "../../utils/API";
import ListItems from "../ShopList";
import SearchBarInShop from '../SearchBarInShop'

class DBshops extends Component {
  state = {
    originalResults: [],
    displayResults: [],
    
  };




  componentDidMount() {
    API.getShopData().then(results => {
        const searchResult = results.data.map((res, i) => ({
          name: res.name,
          logo: res.logo,
          address: res.address,
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
        <SearchBarInShop search={this.state.search} 
        handleInputChange = {this.handleInputChange}/>
        {
          this.state.displayResults.map(shop => (
            <ListItems
              name={shop.name}
              logo={shop.logo}
              address={shop.address}
              key={shop.key}
            />
          ))
        }
      </ul>
    );
  }
}
export default DBshops;