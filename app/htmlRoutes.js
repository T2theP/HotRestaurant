var path = require("path");

module.exports = function(app) {

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../TABLES FILE"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../RESERVATION FILE"));
});


app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../RESERVATION FILE"));
});

};
