/*
* Trunkle http://github.com/scudco/jquery.trunkle
* by Adam Anderson http://scudco.github.com
*/

(function($) {
  $.fn.trunkle = function(settings) {
    settings = $.extend({
      moreText: "show more »",
      lessText: "« show less",
      expandedClass: "trunkle-expanded",
      collapsedClass: "trunkle-collapsed",
      contentClass: 'trunkle-content',
      collapsedHeight: "100px"
    }, settings);

    return this.each(function() {
      var expandedHeight = $(this).css("height");
      var collapsedHeightInt = parseInt(settings.collapsedHeight,10);
      var expandedHeightInt = parseInt(expandedHeight,10);
      if ( collapsedHeightInt >= expandedHeightInt ) {
        return;
      }

      var truncateContainer = $(this);
      var toggleLink = $('<a href="#"></a>').text(settings.moreText);
      var showHideContainer = $('<div class="truncate-show-hide"></div>').append(toggleLink);
      var content = $('<div class="' + settings.contentClass + '"></div>');

      var toggleContainer = function() {
        var truncated = truncateContainer.attr('data-truncate');
        var content = truncateContainer.find('.' + settings.contentClass);
        var linkText = toggleLink.text();

        if ( truncated === 'truncated' ) {
          truncateContainer
          .toggleClass(settings.collapsedClass)
          .toggleClass(settings.expandedClass);

          if ( content.css('height') === settings.collapsedHeight ) {
            content.animate({ height: expandedHeight }, 500 );
          } else {
            content.animate({ height: settings.collapsedHeight }, 500 );
          }

          if ( linkText === settings.moreText ) {
            toggleLink.text(settings.lessText);
          } else if ( linkText === settings.lessText ) {
            toggleLink.text(settings.moreText);
          }
        }

        return false;
      };

      content.css({
        "height": settings.collapsedHeight,
        "overflow": "hidden"
      });
      toggleLink.click(toggleContainer);

      truncateContainer
        .wrapInner(content)
        .append(showHideContainer)
        .attr('data-truncate', 'truncated')
         .addClass(settings.collapsedClass);
    });
  };
})(jQuery);
