const express = require("express");
const session = require("express-session");
const db = require("./models")

// Requiring passport as we've configured it
const passport = require("passport");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our route


// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "beans4lyfe", resave: true, saveUninitialized: true })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api/user")(app); //  Importing routes

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/groundup").then(() => {
  console.log("connected-to-database");
  db.Drink.create({
    user: "5f5c603e102f8e272c984f33",
    name: "coffee",
    price: 5,
    category: "Hot Drink",
    size: 8,
    rating: 5,
    logo: "https://picsum.photos/50",
    review: "Awesome",
    image: "https://picsum.photos/50"
  })

  // db.Shop.create({
  //   user: "5f5c383f7715b70ed81138f1",
  //   name: "Starbucks",
  //   address: "123 Test Drive",
  //   drinks: "5f5c3d18a76901144133bd77"
  // })

}).catch((err) => {
  console.log("couldn't-connect")
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
