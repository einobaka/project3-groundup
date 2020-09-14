const search = require("../../client/src/pages/Search");

// Rendering to the search page
app.get('/search', function (req, res) {
    console.log(req.body);
    console.log(req.user);
    console.log("this route has been hit");
    res.send(req.user);
})

module.exports = search;