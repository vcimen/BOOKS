var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
require("./app/routes")(app);
// app.set("port", 3000);
app.listen(port, function () {
  console.log("Server up: http://localhost:3000");
});
