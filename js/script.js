let songList = ["All Stars", "Pumped Up Kicks", "Baby I'm Yours", "Never Gonna Give Up", "It's Raining Tacos", "Fireflies"];
$("button").click(function() {
  songList.forEach(function(song) {
    $("ol").append("<li><div>" + song + "</div></li>");
  });

});