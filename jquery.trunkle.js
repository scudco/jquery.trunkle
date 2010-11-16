/*
* Trunkle http://github.com/scudco/trunkle
* by Adam Anderson http://scudco.github.com
*/

(function($) {
  $.fn.trunkle = function(settings) {
    settings = $.extend({
      moreText: "show more »",
      lessText: "« show less",
      expandedClass: "trunkle-expanded",
      collapsedClass: "trunkle-collapsed",
      contentContainer: '<div class="truncate-content"></div>',
      collapsedHeight: "100px",
      expandedHeight: $(this).css("height")
    }, settings);

    return this.each(function() {
      var truncateContainer = $(this);
      var toggleLink = $('<a href="#"></a>').text(settings.moreText);
      var showHideContainer = $('<div class="truncate-show-hide"></div>').append(toggleLink);
      var contentContainer = $(settings.contentContainer);

      var toggleContainer = function() {
        var truncated = truncateContainer.attr('data-truncate');
        var contentContainer = truncateContainer.find('.truncate-content');
        var linkText = toggleLink.text();

        if ( truncated === 'truncated' ) {
          truncateContainer
          .toggleClass(settings.collapsedClass)
          .toggleClass(settings.expandedClass);

          if ( contentContainer.css('height') === settings.collapsedHeight ) {
            contentContainer.animate({ height: settings.expandedHeight }, 500 );
          } else {
            contentContainer.animate({ height: settings.collapsedHeight }, 500 );
          }

          if ( linkText === settings.moreText ) {
            toggleLink.text(settings.lessText);
          } else if ( linkText === settings.lessText ) {
            toggleLink.text(settings.moreText);
          }
        }

        return false;
      };

      contentContainer.css({
        "height": settings.collapsedHeight,
        "overflow": "hidden"
      });
      toggleLink.click(toggleContainer);

      truncateContainer
        .wrapInner(contentContainer)
        .append(showHideContainer)
        .attr('data-truncate', 'truncated')
         .addClass(settings.collapsedClass);
    });
  };
})(jQuery);
