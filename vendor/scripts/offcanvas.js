var $ = require('jquery');

(function (document, window, undefined) {
  'use strict';

  var toggleSidemenu = function () {
    if ($('.offcanvas').hasClass('offcanvas-active')) {
      // Close sidemenu
      $('.offcanvas').removeClass('offcanvas-active');
      $('.close-canvas').removeClass('close-canvas-active');
    } else {
      // Openn sidemenu
      $('.offcanvas').addClass('offcanvas-active');
      $('.close-canvas').addClass('close-canvas-active');
    }
  }

  // Toggle Nav on Click
  $('.toggle-sidemenu, .close-canvas').click(function() {
    toggleSidemenu();
  });

})(document, window);
