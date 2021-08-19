$(document).ready(function(){
    let movingList = $("[data-move-box]").find("[data-move-start]").find("[data-move-item]:eq(1), [data-move-item]:eq(2), [data-move-item]:eq(3)");
    $("[data-move-box]").find("[data-move-end]").append(movingList);
    $(".bannerSlider-slider").slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    });
});