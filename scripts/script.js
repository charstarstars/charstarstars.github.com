function makeLightbox() {
    // var galleries = $(".galleryItem");
    $(".galleryItem").each(function() {
        $(this).click(function() {
            displayItem($(this));
        });
    });
}

function displayItem(galleryItem) {
    var frame = $("<div></div>");
    var galleryImage = galleryItem.find("img").clone();
    var description = galleryItem.find(".description").clone();
    var backdrop = $("#backdrop");
    var frameWidth;
    
    backdrop.removeClass("hidden");
    backdrop.append(frame);
    frame.append(description); 

    description.removeClass("hidden");
    description.addClass("expanded");

    frame.addClass("galleryItem");
    frame.addClass("expanded");
    frame.append(galleryImage);
    frame.css("height", galleryImage.height());
    frameWidth = galleryImage.width() + $(".description.expanded").width() + parseInt(frame.css('padding'));
    frame.css("width", frameWidth);
    frame.css("margin-top", -parseInt(frame.css("height"),10)/2);
    frame.css("margin-left", -parseInt(frameWidth,10)/2);
    frame.css("opacity", "1");
}

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
  makeLightbox();

  $("#backdrop").click(function(event) {
    $(this).empty();
    $(this).addClass("hidden");
  });
});
