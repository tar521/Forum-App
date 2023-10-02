const express = require('express')
const app = express()
const port = 8080
// Create database connection and call all models
const db = require("./models");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
db.sequelize.sync({ force: false }).then(function () {
  app.listen(port, function () {
    console.log("server is successfully running!");
  });
});