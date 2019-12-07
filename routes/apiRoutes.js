/* eslint-disable prettier/prettier */
var db = require("../models");
var axios = require("axios");
require("dotenv").config();

module.exports = function (app) {

  app.get("/api/movies", function (req, res) {
    var queryURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + process.env.APIKEY + "&language=en-US&page=1";
    axios.get(queryURL
    ).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.log(error);
    });

  });

  app.get("/api/movies/upcoming", function (req, res) {
    var queryURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + process.env.APIKEY + "&language=en-US&page=1";
    axios.get(queryURL
    ).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  });

  app.get("/movies/:id", function (req, res) {
    var queryURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + process.env.APIKEY + "&language=en-US&page=1";
    axios.get(queryURL
    ).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.log(error);
    });

  })

};
