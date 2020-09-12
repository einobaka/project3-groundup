const search = require("../../client/src/pages/Search");

// Rendering to the search page
app.get('/search', function (req, res) {
    res.send(req.user);
})

module.exports = search;