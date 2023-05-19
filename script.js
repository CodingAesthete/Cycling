$(document).ready(function() {
  $('nav ul li a').click(function(e) {
    e.preventDefault();

    const section = $($(this).attr('href'));
    const sectionOffset = section.offset().top - 180;

    $('html, body').stop().animate({
      scrollTop: sectionOffset
    }, 800, 'easeOutCirc');
  });

  var resizeTimeout;
  $(window).on('resize', function() {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
      selectSection();
    }, 500);
  });

  $(window).on('load scroll', function() {
    selectSection();
  });

  selectSection();

  function selectSection() {
    var pageTop = $(window).scrollTop() + 240;
    var selectedSection = null;

    $('section').each(function(index) {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (pageTop >= sectionTop && pageTop < sectionBottom) {
        selectedSection = $(this);
        return false;
      }
    });

    if (selectedSection) {
      var selectedLinkId = selectedSection.attr('id');
      $('nav ul li a').removeClass('selected');
      $('nav ul li a[href="#' + selectedLinkId + '"]').addClass('selected');
    }
  }
});