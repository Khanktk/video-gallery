(function($) {
    $.fn.grtyoutube = function(options) {
        return this.each(function() {
            var getvideoid = $(this).attr("youtubeid");
            var settings = $.extend({
                videoID: getvideoid,
                autoPlay: true,
                theme: "dark"
            }, options);

            settings.autoPlay = settings.autoPlay ? 1 : 0;
            settings.theme = settings.theme === "dark" ? "grtyoutube-dark-theme" : "grtyoutube-light-theme";

            if (getvideoid) {
                $(this).on("click", function() {
                    $("body").append(
                        '<div class="grtyoutube-popup ' + settings.theme + '">' +
                        '<div class="grtyoutube-popup-content">' +
                        '<span class="grtyoutube-popup-close"></span>' +
                        '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' + settings.videoID + '?rel=0&wmode=transparent&autoplay=' + settings.autoPlay + '&iv_load_policy=3" allowfullscreen frameborder="0"></iframe>' +
                        '</div>' +
                        '</div>'
                    );
                });
            }

            $("body").on("click", ".grtyoutube-popup-close, .grtyoutube-popup", function() {
                $(".grtyoutube-popup").remove();
            });

            $(document).keyup(function(event) {
                if (event.keyCode === 27) { // 27 is the keycode for Esc
                    $(".grtyoutube-popup").remove();
                }
            });
        });
    }
}(jQuery));
