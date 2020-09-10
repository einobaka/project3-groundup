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
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
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
    
    name: "coffee",
    price: 5,
    category: "Hot Drink",
    size: 8,
    rating: 5,
    image: "#",
    review: "Awesome"
  })
}).catch((err) => {
  console.log("couldn't-connect")
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
