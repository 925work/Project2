/* eslint-disable prettier/prettier */
$(document).ready(function() {
  $.ajax({
    url: "/api/movies",
    method: "GET"
  }).then(response => {
      console.log(response);
      $("#theaterTitle1").html(response.results[0].title);

      $("#theaterCover1").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[0].poster_path);

      $("#theaterRating1").html(response.results[0].vote_average);

      $("#theaterTitle2").html(response.results[1].title);

      $("#theaterCover2").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[1].poster_path);

      $("#theaterRating2").html(response.results[1].vote_average);

      $("#theaterTitle3").html(response.results[2].title);

      $("#theaterCover3").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[2].poster_path);

      $("#theaterRating3").html(response.results[2].vote_average);

      $("#theaterTitle4").html(response.results[3].title);

      $("#theaterCover4").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[3].poster_path);

      $("#theaterRating4").html(response.results[3].vote_average);

      $("#theaterTitle5").html(response.results[4].title);

      $("#theaterCover5").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[4].poster_path);

      $("#theaterRating5").html(response.results[4].vote_average);

      $("#theaterTitle6").html(response.results[5].title);

      $("#theaterCover6").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[5].poster_path);

      $("#theaterRating6").html(response.results[5].vote_average);

      $("#theaterTitle7").html(response.results[6].title);

      $("#theaterCover7").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[6].poster_path);

      $("#theaterRating7").html(response.results[6].vote_average);

      $("#theaterTitle8").html(response.results[7].title);

      $("#theaterCover8").attr("src","http://image.tmdb.org/t/p/w185/"+response.results[7].poster_path);

      $("#theaterRating8").html(response.results[7].vote_average);
  });
});

var post 

$(".sendButton").on("click", function(){
  event.preventDefault();
  post = $(".moviePost");
  // send to ajaz your post.val()
  //thne clear next
  $.ajax({
    type: "POST",
    url: url,
    data: post,
    success: success,
    dataType: dataType
  });
  post.val("")
})