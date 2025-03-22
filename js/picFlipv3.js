$(document).ready(function() {
    $("img").click(function() {
        var src = $(this).attr('src');
        var newsrc;
        if (src.includes('obv')) { //obverse is showing
            newsrc = src.replace('obv', 'rev');
        }
        else { //reverse is showing
            newsrc = src.replace('rev', 'obv');
        }
        $(this).attr('src', newsrc);
    });
});