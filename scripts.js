$(document).ready(function(){



  var mobileNav = $('nav .mobile-menu');
  var body = $('body');
  var overlay = $('.overlay');
  var squishyNav = $('nav .nav ');
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
          squishyNav.removeClass('openNav')
            squishyNav.addClass('shrinkNav')

        }

        if( squishyNav.hasClass('shrinkNav') && navHeight >=  scrollTop ){

              squishyNav.removeClass('shrinkNav');
              squishyNav.addClass('openNav');

        }




  })

});
