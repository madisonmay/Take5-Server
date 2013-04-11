$(document).ready(function() {
    var h = $(document).height() / 2;
    var h2 = $('#timer').height();

    $('#timer').css('top', parseInt((h-h2)/1.7) + 'px');
})

//Refactoring is for the weak.
$(window).resize(function() {
    var h = $(document).height() / 2;
    var h2 = $('#timer').height();

    $('#timer').css('top', parseInt((h-h2)/1.7) + 'px');
})



