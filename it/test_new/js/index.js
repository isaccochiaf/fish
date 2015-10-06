// Froogaloop
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/froogaloop.js
// https://github.com/vimeo/player-api/blob/master/javascript/froogaloop.js
// http://a.vimeocdn.com/js/froogaloop2.min.js

var iframe = document.getElementById('video');

// $f == Froogaloop
var player = $f(iframe);

// bind events
var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
  player.api("play");
});

var pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
  player.api("pause");
});