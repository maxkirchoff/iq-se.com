/*!
 * basic-bro
 * 
 * 
 * @author 
 * @version 1.0.0
 * Copyright 2020. ISC licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $(window).on('scroll', function(ev){
      if ($(window).scrollTop() > 50) {
        $('body').addClass('scrolled');
      } else {
        $('body').removeClass('scrolled');
      }
    });
  });

})(jQuery, window, document);
