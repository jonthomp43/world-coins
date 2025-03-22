$(document).ready(function() {
    $("img").click(function() {
        if($(this).attr('src' )=== $(this).attr('data-src'))
        {
            var a = $(this).attr('data-swap');
            $(this).attr('src',a);
        }     
        else
        {
            var b = $(this).attr('data-src');
            $(this).attr('src',b);
        }
    });
});