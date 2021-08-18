$(document).ready(function(){
    let movingList = $("[data-move-box]").find("[data-move-start]").find("[data-move-item]:eq(1), [data-move-item]:eq(2), [data-move-item]:eq(3)");
    $("[data-move-box]").find("[data-move-end]").append(movingList);
});