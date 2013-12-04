(function($){
  
  function getWindowHeight() {
    return window.innerHeight;
  }
  
  function getScrollPosition() {
    return window.pageYOffset;
  }

  function withinViewport(el) {
    var windowHeight, scroll, offset, containerHeight;
    windowHeight = getWindowHeight();
    scroll = getScrollPosition();
    offset = el.offset();
    containerHeight = el.height();
    if((scroll <= offset.top + containerHeight) && (windowHeight + scroll >= offset.top)) {
      return true;
    } else {
      return false;
    }
  }
  
  function elementScrollPercentage(el) {
    var scroll,offset,height,windowHeight,a,b,x;
    scroll = getScrollPosition();
    offset = el.offset();
    height = el.height();
    windowHeight = getWindowHeight();
    a = scroll - offset.top + windowHeight
    b = height + windowHeight;
    x = a/b;
    return x;
  }
  
  function doScrollax(e) {
    var $container;
    if(!e.selector) {
      $container = e.data.container;
    } else {
      $container = e;
    }
    if(withinViewport($container)) {
      var percent, tweakedPercent, threshold, originalTop, newTop;
      percent = elementScrollPercentage($container);
      tweakedPercent = (2*percent)-1;
      $.each($container.data('scrollax-elements'), function(index,selector) {
        $element = $container.find(selector);
        threshold = $element.attr('data-scrollax-threshold');
        originalTop = $element.attr('data-scrollax-original-top');
        newTop = ((tweakedPercent*threshold)-originalTop)*-1;
        $element.css('top',newTop+'px');
      });
    }
  }
    
  $.fn.scrollax = function(elements){
    var container = $(this);
    var containerElements = [];
    $.each(elements, function(index,value) {
      containerElements.push(index);
      container.find(index).attr('data-scrollax-threshold',value).attr('data-scrollax-original-top',container.find(index).css('top').match(/\d+/)[0]);
    });
    container.data('scrollax-elements',containerElements);
    doScrollax(container);
    $(document).bind('scroll',{container: container},doScrollax);
    return this;
  };
})(jQuery);