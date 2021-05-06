var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = Process.env.PORT || 3000 ;
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
require("./app/routes")(app);
// app.set("port", 3000);
app.listen(port, function () {
  console.log("server listening to port "+port);
});
