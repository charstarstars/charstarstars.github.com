function makeLightbox(){$(".galleryItem").each(function(){$(this).click(function(){displayItem($(this))})})}function displayItem(a){var b=$("<div></div>");var c=a.find(".fullImage").clone();var d=a.find(".description").clone();var e=$("#backdrop");var f;c.removeClass("hidden");e.removeClass("hidden");e.append(b);b.append(d);d.removeClass("hidden");d.addClass("expanded");b.addClass("galleryItem");b.addClass("expanded");b.append(c);b.css("height",c.height());f=c.width()+$(".description.expanded").width()+20;b.css("width",f);b.css("margin-top",-b.height()/2);b.css("margin-left",-f/2);b.css("opacity","1");b.click(function(a){a.stopPropagation()})}$(document).ready(function(){function a(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function d(a){for(var b=0,c=arguments.length;b<c;b++){var d=arguments[b],e=$(d);if(e.scrollTop()>0){return d}else{e.scrollTop(1);var f=e.scrollTop()>0;e.scrollTop(0);if(f){return d}}}return[]}var b=a(location.pathname);var c=d("html","body");$("a[href*=#]").each(function(){var d=a(this.pathname)||b;if(b==d&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var e=$(this.hash),f=this.hash;if(f){var g=e.offset().top;$(this).click(function(a){a.preventDefault();$(c).animate({scrollTop:g},400,function(){location.hash=f})})}}});makeLightbox();$("#backdrop").click(function(a){$(this).empty();$(this).addClass("hidden")})})