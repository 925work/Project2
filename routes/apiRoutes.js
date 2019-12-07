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
      //create modules, movies module need x, sequelize needs to not auto incroment primary ID
      //creat post module,

      //for loop array
      //check if id exists, if so pass over, if not create one
      for (i = 0; i < response.data.length; i++) {
        db.Movies.create({
          id: response.data[i].id
        });
      }

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
  });

  app.post("/movies/:id", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

};
