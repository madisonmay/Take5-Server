$(document).ready(function() {
    var h = $(document).height();
    var h2 = $('#login').height() * 2;

    $('#login').css('top', parseInt(h-h2) + 'px');
    console.log("Moved")
})

