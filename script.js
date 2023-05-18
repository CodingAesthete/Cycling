$(window).on('load', function() {
 createSound();
})

function createSound(){
  var audio = document .getElementById("audio");
  var soundIcon = document.getElementById("sound-icon");
  soundIcon.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-volume-mute-512.png";
  $('#audio').prop('volume', 0.50);
  
    soundIcon.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        soundIcon.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-volume-high-512.png";
    } else {
        audio.pause();
        soundIcon.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-volume-mute-512.png";
      }
    });
  
  audio.addEventListener('ended', function() {
    audio.currentTime = 0; // Reset the playback to the beginning
    audio.play(); // Play the audio again
  });
  
  audio.play();
};