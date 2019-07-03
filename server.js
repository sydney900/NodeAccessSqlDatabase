var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8188;
const config = require("./config.json");

//const dbConfig = config.database.azureSqlDatabase;
const dbConfig = config.database.sqlServer;
var knex = require("knex")(dbConfig);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/clients", function(req, res) {
  knex.raw("select * from clients").then(function(clients) {
    res.status(200).json(clients);
  });
  //   knex
  //     .select()
  //     .table("Clients")
  //     .then(function(clients) {
  //       res.send(clients);
  //     });
});
app.listen(port, function() {
  console.log("listen to port:", port);
});
