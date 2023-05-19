$(document).ready(function() {
  $('nav ul li a').click(function(e) {
    e.preventDefault();

    const section = $($(this).attr('href'));
    const sectionOffset = section.offset().top - 180;

    $('html, body').stop().animate({
      scrollTop: sectionOffset
    }, 800, 'easeOutCirc',);
  });

  $(window).scroll(function() {
    selectSection();
  });

  $(window).on('resize', function() {
    clearTimeout(doneResizing);

    doneResizing = setTimeout(function() {
      selectSection();
    }, 500);
  });

  selectSection();

  function selectSection() {
    const pageTop = $(window).scrollTop() + 240;

    $('section').each(function(index) {
      const sectionTop = $(this).offset().top;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (pageTop >= sectionTop && pageTop < sectionBottom) {
        $('nav ul li a').removeClass('selected');
        $('nav ul li a').eq(index).addClass('selected');
      }
    });
  }
});