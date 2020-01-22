let songList = [];

$(".myList").click(function() {
  songList = [["All Stars","Smash Mouth", "https://www.youtube.com/watch?v=L_jWHffIx5E"], ["Pumped Up Kicks", "Foster the People", "https://www.youtube.com/results?search_query=pumped+up+kicks"], ["Baby I'm Yours", "Breakbot", "https://www.youtube.com/watch?v=6okxuiiHx2w"], ["Never Gonna You Give Up", "Rick Ashley", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]];
  $(".songList").empty();
  songList.forEach(function(song) {
    $(".songList").append("<div class='individual'><button><a href='" + song[2] + "' target='_blank'>Play</a></button><div class='songInfo'>" + song[0] + "</div><div class='songInfo'>" + song[1] + "</div></div>");
  });
});

$(".submit").click(function() {
  var addition = [];
  var title = $("#enterSong").val();
  var author = $("#enterName").val();
  var ytlink = $("#enterMusic").val();
  var imgUrl = $("#enterImg").val();
  addition.push(title, author, ytlink, imgUrl);
  songList.push(addition);
  $(".songList").append("<div class='individual'><button><a href='" + addition[2] + "' target='_blank'>Play</a></button><div class='songInfo'>" + addition[0] + "</div><div class='songInfo'>" + addition[1] + "</div></div>");
});

$(".playAdd").click(function(){
  var PlayName = $(".playlistName").val();
  var ButtonName = $(".forButton").val();
  $(".playlistList").append("<div class='" + PlayName + "'>" + PlayName + "</div>");
  $("body").append(`
  <script>
    let ${PlayName} = [["Somebody That I Used To Know", "Gotye", "https://www.youtube.com/watch?v=8UVNT4wvIGY", "s"]]; 
    $(".${PlayName}").click(function(){
      $(".stuff").hide();
      $(".search").append("<button class='stuff " + "${ButtonName}" + "'>" + "Add" + "</button>");
      $(".songList").empty(); 
      ${PlayName}.forEach(function(song){
        $(".songList").append("<div class='individual'><button><a href='" + song[2] + "' target='_blank'>Play</a></button><div class='songInfo'>" + song[0] + "</div><div class='songInfo'>" + song[1] + "</div></div>");
      });
    });
  </script>`);
