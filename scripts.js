$(document).ready(function(){



  var mobileNav = $('nav .mobile-menu');
  var body = $('body');
  var overlay = $('.overlay');
  var squishyNav = $('nav .nav ');
  var mainContent = $('.content');
  var navHeight = $('.nav').height();

  //----Mobile navigation --//
  $('nav .hamburger').on('click', function(){

    body.addClass('moveYourBody')
    body.removeClass('moveYourBodyOff')
    overlay.addClass('overlayDisplay')
    overlay.removeClass('overlayDisplayOff')
  })

  $('.overlay').on('click', function(){

    body.removeClass('moveYourBody')
    body.addClass('moveYourBodyOff')
    overlay.removeClass('overlayDisplay')
    overlay.addClass('overlayDisplayOff')

  })

  //----Shrinking Navigation --//
  $(window).on('scroll', function(){

    var scrollTop = $(this).scrollTop()

    if(navHeight <= scrollTop ){
      squishyNav.addClass('shrinkNav')
    }

    if( squishyNav.hasClass('shrinkNav') && navHeight >=  scrollTop ){
      squishyNav.removeClass('shrinkNav');

    }

  })


  //------- Search field -------//

  $('.fa.fa-search').on('click', function(){

    if(!squishyNav.hasClass('moveNavVertically')){

      mainContent.addClass('verticalBody')
      squishyNav.addClass('moveNavVertically');
      $('#searchText').focus();

    }
    else {
      mainContent.removeClass('verticalBody')
      squishyNav.removeClass('moveNavVertically');


    }

  })


});
