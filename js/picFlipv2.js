$(document).ready(function() {
    $("img").click(function() {
        var a = $(this).attr('src');
        var b = $(this).attr('data-swap');
        $(this).attr('src',b);
        $(this).attr('data-swap',a);
    });
});