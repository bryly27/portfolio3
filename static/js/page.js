var spy = new ScrollSpy('.navbar', {
  nav: '.navbar-nav > li > a',
  className: 'active',
});

$("#about").click(function() {

    $('html, body').animate({
        scrollTop: $(".about").offset().top-50
    }, 1000);
    return false;
});

$("#work").click(function() {

    $('html, body').animate({
        scrollTop: $(".work").offset().top-50
    }, 1000);
    return false;
});