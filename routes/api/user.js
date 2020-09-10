// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    // app.post("/api/login", passport.authenticate("local"), function (req, res) {
    //     console.log("route-hit");
    //     res.json(req.user);
    // })

    // Register User
    app.post('/register', function (req, res) {

        // console.log(req.body);

        var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        db.User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end()
        });

    });
    // Endpoint to login
    app.post('/login',
        passport.authenticate('local'),
        function (req, res) {
            // console.log(req.body);
            res.send(req.user);
            // add send for rendering page when logged in
        }
    );

    // Endpoint to get current user
    app.get('/user', function (req, res) {
        res.send(req.user);
    })

    // Endpoint to logout
    app.get('/logout', function (req, res) {
        req.logout();
        res.json({ "Response" : "User Logged Out"})
    });

};