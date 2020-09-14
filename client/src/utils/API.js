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

  // // Drink name
  // getDrinkName: function(name) {
  //   // console.log(name)
  //   return axios.get('/api/drink', name);
  // },
  
  addShop: function(data) {
    // console.log(data)
    return axios.post('/api/shop', data);
  },

  getShopData: function(data) {
    return axios.get('/api/shop', data);
  }

  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

};
