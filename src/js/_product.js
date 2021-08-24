$(document).ready(function(){
    let arrow = '<svg viewBox="0 0 6 10"><path d="M6 8.8L4.9 10 0 5l4.9-5L6 1.2 2.3 5z"></path></svg>'
    $(".productSlider-slider").slick({
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
                breakpoint: 1251,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 661,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $("body").on("click", "[data-add-to-basket]", function() {
        
    });
});