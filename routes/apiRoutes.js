var db = require("../models");
var axios = require("axios");
require("dotenv").config();

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/movies", function (req, res) {
    var queryURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + process.env.APIKEY + "&language=en-US&page=1"
    console.log('query string',queryURL)
    axios.get(queryURL
    ).then(function (response) {
      console.log(response.data)
      res.send(response.data)
    }).catch(function (error) {
      console.log(error);
    })
   
  })

};
