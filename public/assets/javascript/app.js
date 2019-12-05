/* eslint-disable prettier/prettier */
$(document).ready(function() {
  $.ajax({
    url: "/api/movies",
    method: "GET"
  }).then(response => {
      console.log(response)
  });
})