(function () {
  var $maps = $('.maps'),
      $iframe = $('.maps iframe');

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  $maps.click(function () {
    $iframe.css("pointer-events", "auto");
  });

  $maps.mouseleave(function() {
    $iframe.css("pointer-events", "none");
  });

})();
