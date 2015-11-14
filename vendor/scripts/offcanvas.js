var $ = require('jquery');

(function (document, window, undefined) {
  'use strict';

  var toggleSidemenu = function () {
    $('.offcanvas, .close-canvas').toggleClass('active');
    toggleIcon($('.offcanvas').hasClass('active'));
  }

  // Toggle icon for side menu button
  var toggleIcon = function (active) {
    if (active) {
      $('#slider').removeClass('fa-angle-double-right');
      $('#slider').addClass('fa-angle-double-left');
    }
    else {
      $('#slider').removeClass('fa-angle-double-left');
      $('#slider').addClass('fa-angle-double-right');
    }
  }

  // Toggle side menu on click
  $(document).ready(function() {
    $('.toggle-sidemenu, .close-canvas').click(function() {
      toggleSidemenu();
    });
  });

})(document, window);
