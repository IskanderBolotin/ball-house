$(document).ready(function(){
    let arrow = '<svg viewBox="0 0 6 10"><path d="M6 8.8L4.9 10 0 5l4.9-5L6 1.2 2.3 5z"></path></svg>'
    $(".newsBox-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: "<button class='sliderArrow sliderArrow-prev'><span class='sliderArrow__inner'>" + arrow + "</span></button>",
        nextArrow: "<button class='sliderArrow sliderArrow-next'><span class='sliderArrow__inner'>" + arrow + "</span></button>",
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $("body").on("click", "[data-modal-open]", function() {
        let this_id = $(this).attr("data-modal-open");
        if ((!$(this)[0].hasAttribute("data-add-to-basket")) || ($(this)[0].hasAttribute("data-add-to-basket") && $(window).outerWidth() <= 576)) {
            $("[data-modal]").each(function() {
                if ($(this).attr("data-modal") == this_id) {
                    $(this).addClass("__active");
                }
                else {
                    $(this).removeClass("__active");
                }
            });
        }
    });
    $("body").on("click", "[data-modal-cls]", function() {
        $(this).parents("[data-modal]").removeClass("__active");
    });
    $("body").on("mousedown", "[data-modal]", function(e) {
        if (!e.target.closest("[data-modal-inner]")) {
            $(this).removeClass("__active");
        }нн
    });
    $("body").on("click", "[data-scroll-top]", function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);
    });
    $("body").on("click", "[data-toggle-btn]", function(e) {
        if (!$(this).hasClass("__active")) {
            $(this).addClass("__active");
            $(this).parents("[data-toggle-rel]").find("[data-toggle-el]").addClass("__active");
        }
        else {
            $(this).removeClass("__active");
            $(this).parents("[data-toggle-rel]").find("[data-toggle-el]").removeClass("__active");
        }
    });
    $("body").on("click", "[data-filter-btn]", function(e) {
        if (!$(this).hasClass("__active")) {
            $(this).addClass("__active");
            $(this).parents("[data-filter-component]").addClass("__active");
            $(this).parents("[data-filter-component]").find("[data-filter-dd]").slideDown();
        }
        else {
            $(this).removeClass("__active");
            $(this).parents("[data-filter-component]").removeClass("__active");
            $(this).parents("[data-filter-component]").find("[data-filter-dd]").slideUp(function() {
                $(this).removeAttr("style");
            })
        }
    });
    
    $(".customSelect").select2({
        minimumResultsForSearch: -1,
        width: "100%",
    });
});