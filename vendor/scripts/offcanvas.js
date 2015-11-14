var $ = require('jquery');

(function (document, window, undefined) {
  'use strict';

  var toggleSidemenu = function () {
    $('.offcanvas, .close-canvas').toggleClass('active');
  }

  // Toggle Nav on Click
  $(document).ready(function() {
    $('.toggle-sidemenu, .close-canvas').click(function() {
      toggleSidemenu();
    });
  });

})(document, window);
