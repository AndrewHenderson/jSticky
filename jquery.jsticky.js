/* jSticky Plugin
 * =============
 * Author: Andrew Henderson (@AndrewHenderson)
 * Date: 9/7/2012
 * Update: 02/14/2013
 * Website: http://github.com/andrewhenderson/jsticky/
 * Description: A jQuery plugin that keeps select DOM
 * element(s) in view while scrolling the page.
 */

;(function($) {

  $.fn.sticky = function(options) {

    var defaults = {
        topSpacing: 0, // No spacing by default
        zIndex: '', // No default z-index
        stopper: '.sticky-stopper' // Default stopper class, also accepts number value
      },
      settings = $.extend({}, defaults, options); // Accepts custom stopper id or class

    // Checks if custom z-index was defined
    function checkIndex() {

      if (typeof settings.zIndex == 'number') {
        return true;
      } else {
        return false;
      }
    }
    var hasIndex = checkIndex(); // True or false

    // Checks if a stopper exists in the DOM or number defined
    function checkStopper() {

      if ( 0 < $(settings.stopper).length || typeof settings.stopper === 'number' ) {
        return true;
      } else {
        return false;
      }
    }
    var hasStopper = checkStopper(); // True or false

    return this.each(function() {

      var $this          = $(this),
          thisHeight     = $this.outerHeight(),
          thisWidth      = $this.outerWidth(),
          topSpacing     = settings.topSpacing,
          zIndex         = settings.zIndex,
          pushPoint      = $this.offset().top - topSpacing, // Point at which the sticky element starts pushing
          placeholder    = $('<div></div>').width(thisWidth).height(thisHeight).addClass('sticky-placeholder'), // Cache a clone sticky element
          stopper        = settings.stopper,
          $window        = $(window);

      function stickyScroll() {

        var windowTop  = $window.scrollTop(); // Check window's scroll position
        
        if ( hasStopper && typeof stopper === 'string' ) {
          var stopperTop = $(stopper).offset().top,
              stopPoint  = (stopperTop - thisHeight) - topSpacing;
        } else if (hasStopper && typeof stopper === 'number') {
          var stopPoint = stopper;
        }

        if (pushPoint < windowTop) {
          // Create a placeholder for sticky element to occupy vertical real estate
          $this.after(placeholder).css({
            position: 'fixed',
            top: topSpacing
          });
          
          if (hasIndex) {
            $this.css({ zIndex: zIndex });
          }

          if (hasStopper) {
            if (stopPoint < windowTop) {
              var diff = (stopPoint - windowTop) + topSpacing;
              $this.css({ top: diff });
            }
          }
        } else {
          $this.css({
            position: 'static',
            top: null,
            left: null
          });

          placeholder.remove();
        }
      };

      $window.bind("scroll", stickyScroll);
    });
  };
})(jQuery);