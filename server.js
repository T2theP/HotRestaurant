
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT" + PORT);
 });