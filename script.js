$(document).ready(function() {
  $('nav ul li a').click(function(e) {
    const section = $($(this).attr('href'));
    const sectionOffset = section.offset().top - 180;

    $('html, body').stop().animate({
      scrollTop: sectionOffset
    }, 800, 'easeOutCirc');
  });

  let doneResizing;
  $(window).on('resize', function() {
    clearTimeout(doneResizing);

    doneResizing = setTimeout(function() {
      selectSection();
    }, 500);
  });

  $(window).on('load scroll', function() {
    selectSection();
  });

  function selectSection() {
    const pageTop = $(window).scrollTop() + 240;
    let selectedSection = null;

    $('section').each(function(index) {
      const sectionTop = $(this).offset().top;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (pageTop >= sectionTop && pageTop < sectionBottom) {
        selectedSection = $(this);
      }
    });

    if (selectedSection) {
      const selectedId = selectedSection.attr('id');
      $('nav ul li a').removeClass('selected');
      $('nav ul li a[href="#' + selectedId + '"]').addClass('selected');
    }
  }
});