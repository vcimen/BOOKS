var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 5010 ;
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
require("./app/routes")(app);
// app.set("port", 3000);
app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));

