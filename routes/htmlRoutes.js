var db = require("../models");
var path = require("path")
module.exports = function(app){
  app.get("/movies/:id", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/chatroom/chatrooms.html"));
  });
};
