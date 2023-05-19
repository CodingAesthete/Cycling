$(document).ready(function() {
  $('nav ul li a').click(function(e) {
    e.preventDefault();

    var targetSection = $($(this).attr('href'));
    var targetOffset = targetSection.offset().top - 180;

    $('html, body').stop().animate({
      scrollTop: targetOffset
    }, 800, 'easeOutCirc',);
  });

  function setSelectedSection() {
    var pageTop = $(window).scrollTop() + 240;

    $('section').each(function(index) {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (pageTop >= sectionTop && pageTop < sectionBottom) {
        $('nav ul li a').removeClass('selected');
        $('nav ul li a').eq(index).addClass('selected');
        return false; // Exit the loop once the selected section is found
      }
    });
  }

  $(window).scroll(function() {
    setSelectedSection();
  });

  $(window).on('resize load', function() {
    clearTimeout(doneResizing);

    doneResizing = setTimeout(function() {
      setSelectedSection();
    }, 500);
  });

  setSelectedSection();
});
