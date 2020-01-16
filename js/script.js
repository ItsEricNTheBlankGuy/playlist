let songList = [["All Stars","Smash Mouth"], ["Pumped Up Kicks", "Foster the People"], ["Baby I'm Yours", "Breakbot"], ["Never Gonna You Give Up", "Rick Ashley"]];

$("button").click(function() {
  $(".songList").empty();
  songList.forEach(function(song) {
    $(".songList").append("<div class='individual'><div class='songInfo'>" + song[0] + "</div><div class='songInfo'>" + song[1] + "</div></div>");
  });

});