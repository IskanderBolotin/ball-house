$(document).ready(function() {
    $("body").on("mouseenter", "[data-catpoint]", function() {
        $(this).addClass("__active");
        let max_deep = 0;
        let menu_width = $(this).find(".catalogPoint__dm").outerWidth();
        let pos_left = $(this).find(".catalogPoint__dm").offset().left;
        $(this).find("[data-drop-list]").each(function() {
            if (+$(this).attr("data-drop-list") > max_deep) {
                max_deep = +$(this).attr("data-drop-list");
            }
        })
        let max_width = max_deep * menu_width;
        let all_width = pos_left + max_width;
        if (all_width > $("body").outerWidth()) {
            $(this).find(".catalogPoint__dm").addClass("catalogPoint__dm-left");
        }
        else {
            $(this).find(".catalogPoint__dm").removeClass("catalogPoint__dm-left");
        }
    });
    $("body").on("mouseleave", "[data-catpoint]", function() {
        $(this).removeClass("__active");
    });
    $("body").on("mouseenter", "[data-drop-point]", function() {
        $(this).closest("[data-drop-list]").find("[data-drop-rel]").removeClass("__active");
        $(this).closest("[data-drop-list]").find("[data-drop-point]").removeClass("__active");
        $(this).addClass("__active");
        $(this).closest("[data-drop-rel]").addClass("__active");
    });
    $("body").on("mouseleave", "[data-drop-rel]", function() {
        $(this).find("[data-drop-rel]").removeClass("__active");
        $(this).find("[data-drop-point]").removeClass("__active");
        $(this).removeClass("__active");
    });
    $("body").on("focus", "[data-search-input]", function() {
        $(this).parents("[data-search-component]").addClass("__active");
    });
    $("body").on("blur", "[data-search-input]", function() {
        if ($(this).parents("[data-search-component]").find("[data-search-input]").val() == "") {
            $(this).parents("[data-search-component]").removeClass("__active");
        }
    });
    $("body").on("click", "[data-search-clear]", function() {
        $(this).parents("[data-search-component]").find("[data-search-input]").val("");
        $(this).parents("[data-search-component]").find("[data-search-input]").trigger("blur");
    });
    $("body").on("click", "[data-catalog-btn]", function() {
        if ($(this).hasClass("__active")) {
            $(this).removeClass("__active");
            $(this).parents("[data-catalog-component]").removeClass("__active");
        }
        else {
            $(this).addClass("__active");
            $(this).parents("[data-catalog-component]").addClass("__active");
        }
    });
    
    
    
});