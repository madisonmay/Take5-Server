$(document).ready(function() {

    center_element('#take_5');

    $('#take_5').mouseover(function() {
        $(this).animate({"color": "#45a546"}, 500);
    });

    $('#take_5').mouseout(function() {
        $(this).animate({"color": "#BBBBBB"}, 1000);
    });

    $('#take_5').click(function() {
        window.location = 'http://localhost:3000/auth/google'
    });

});

$(window).resize(function() {
    center_element('#take_5');
});

function center_element(selector){
    var h = $(document).height() / 2;
    var h2 = $(selector).height() ;

    var w = $(document).width() / 2;
    var w2 = $(selector).width() / 2;

    $(selector).css('top', parseInt(h-h2*2) + 'px');
    // $(selector).css('left', parseInt(w-w2) + 'px');
}

