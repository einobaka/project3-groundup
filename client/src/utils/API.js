import axios from "axios";


export default {
  // Sign Up
  signUpSubmit: function (data) {
    // console.log(data)
    return axios.post('/register', data);
  },
  // Login
  loginSubmit: function (data) {
    return axios.post('/login', data);
  },

  // Drink data
  getDrinkData: function(data) {
    return axios.get('/api/drink', data);
  },

  addDrink: function(data) {
    return axios.post('/api/drink', data);
  },
  
  addShop: function(data) {
    // console.log(data)
    return axios.post('/api/shop', data);
  },

  getShopData: function(data) {
    return axios.get('/api/shop', data);
  },
};
