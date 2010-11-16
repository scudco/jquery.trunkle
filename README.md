# Trunkle

**Truncate block-level DOM elements.**

There are no enhanced DOM pat-downs in trunkle. Other truncation libraries tend
to use DOM manipulation to truncate content. This has limitations since it
cannot elegantly handle block-level DOM elements with nested block-level DOM
elements.

Trunkle aims to simplify the DOM munging approach by using jQuery to attach
appropriate classes along with one CSS rule to the content area.

## Examples

    $('article').trunkle();
    $('article').trunkle({collapsedHeight: "5em"});
    $('article').trunkle({collapsedHeight: "250px"});

### Settings

Trunkle provides a few settings you can tweak.

    $('article').trunkle({
      moreText: "MORE MORE MORE",
      lessText: "shrink this",
      expandedClass: "bigger",
      collapsedClass: "smaller",
      contentContainer: '<div class="mega-content"></div>',
      collapsedHeight: "400px"
    });


#### Defaults

  * moreText: "show more »"
  * lessText: "« show less"
  * expandedClass: "trunkle-expanded"
  * collapsedClass: "trunkle-collapsed"
  * contentContainer: '&lt;div class="truncate-content"&gt;&lt;div&gt;'
  * collapsedHeight: "100px"
