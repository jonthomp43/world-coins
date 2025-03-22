$(document).ready(function() {
    $("img").click(function() {
        var src = $(this).attr('src');
        src = src.includes('obv.png')? src.replace('obv.png', 'rev.png'): src.replace('rev.png', 'obv.png');
        $(this).attr('src', src);
    });
});