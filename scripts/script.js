function makeLightbox() {
        // var galleries = $(".galleryItem");
        $(".galleryItem").each(function() {
                $(this).click(function() {
                        displayItem($(this));
                });
        });
}

function displayItem(galleryItem) {
        var frame = $("<div id='frame'></div>");
        var galleryImage = galleryItem.find(".fullImage").clone();
        var description = galleryItem.find(".description").clone();
        var backdrop = $("#backdrop");  
        var frameWidth;

        backdrop.append(frame);
        frame.append(description); 
        frame.append(galleryImage);

        description.addClass("expanded");
        frame.addClass("galleryItem");
        frame.addClass("expanded");

        description.removeClass("hidden");
        galleryImage.removeClass("hidden");
        backdrop.removeClass("hidden");

        setTimeout(function() {
                if(window.innerWidth > 768) {

                    description.css("width", 300);
                    frame.css("height", galleryImage.height());
                    frameWidth = galleryImage.width() + $(".description.expanded").width() + 20;
                    frame.css("width", frameWidth);

                } else {
                    description.css("width", galleryImage.find("img").width());
                    frame.css("height", galleryImage.height() + description.height() + 15);
                    frameWidth = galleryImage.find("img").width();
                    frame.css("width", frameWidth);

                }

                frame.css("margin-top", -frame.height()/2);
                frame.css("margin-left", -frame.width()/2);
                frame.css("opacity", "1");
                frame.click(function(event) {
                    event.stopPropagation();
                });
        }, 0);
}

function setFrameSize() {
    var frame = $("#frame");
    var galleryImage = $("#backdrop .fullImage");
    var description = $("#backdrop .description");
    var frameWidth;

        if(window.innerWidth > 768) {

            description.css("width", 300);
            frame.css("height", galleryImage.height());
            frameWidth = galleryImage.width() + $(".description.expanded").width() + 20;
            frame.css("width", frameWidth);

        } else {
            description.css("width", galleryImage.find("img").width());
            frame.css("height", galleryImage.height() + description.height() + 15);
            frameWidth = galleryImage.find("img").width();
            frame.css("width", frameWidth);

        }

        frame.css("margin-top", -frame.height()/2);
        frame.css("margin-left", -frame.width()/2);
}

$(document).ready(function() {

    $(function() {
        $('header a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 800,'easeInOutExpo');

            event.preventDefault();
        });
    });

    makeLightbox();

    $("#backdrop").click(function(event) {
        $(this).empty();
        $(this).addClass("hidden");
    });

    $("window").resize(function() {setFrameSize();});
});
