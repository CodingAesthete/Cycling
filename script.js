$(document).ready(function() {
  $('nav ul li a').click(function(e) {
    e.preventDefault();

    const targetSection = $($(this).attr('href'));
    const targetOffset = targetSection.offset().top - 180;

    $('html, body').stop().animate({
      scrollTop: targetOffset
    }, 800, 'easeOutCirc',);
  });

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

  function setSelectedSection() {
    const pageTop = $(window).scrollTop() + 240;

    $('section').each(function(index) {
      const sectionTop = $(this).offset().top;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (pageTop >= sectionTop && pageTop < sectionBottom) {
        $('nav ul li a').removeClass('selected');
        $('nav ul li a').eq(index).addClass('selected');
        return false;
      }
    });
  }
});