$(document).ready(function() {
    var h = $(document).height() / 2;
    var h2 = $('#login').height();

    $('#login').css('top', parseInt(h-h2) + 'px');
    console.log("Moved")
})

