$('nav ul li a').click(function () {
  const thisSection = $(this).attr('href');
  const thislink = $(this);

  $('html, body').stop().animate({
    scrollTop: $(thisSection).offset().top - 180
  }, 800, 'easeOutCirc', function () {
    $('nav ul li a').removeClass("selected");
    $(thislink).addClass("selected");
  });

});

$(window).on('load', function () {
  createSound();

  const allLinks = $('nav ul li a');
  const posts = $('section');
  let pageTop;
  let postPos;
  let counter = 0;
  let prevCounter=0;

  let postTops = [];

  posts.each(function () {
    postTops.push(Math.floor($(this).offset().top));
  });

  $(window).scroll(function () {
    pageTop = $(window).scrollTop() + 240;

    if (pageTop > postTops[counter + 1]) {
      counter++;
    }
    else if (counter > 0 && pageTop < postTops[counter]) {
      counter--;
    }

    if (counter != prevCounter) {
      $(allLinks).removeAttr('class');
      $('nav ul li a').eq(counter).addClass('selected');
      prevCounter=counter;
    }
  })

})

function createSound() {
  var audio = document.getElementById("audio");
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

  audio.addEventListener('ended', function () {
    audio.currentTime = 0; // Reset the playback to the beginning
    audio.play(); // Play the audio again
  });

  audio.play();
};