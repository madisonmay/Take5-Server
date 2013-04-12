$(document).ready(function() {
    var h = $(document).height() / 2;
    var h2 = $('#timer').height();

    $('#timer').css('top', parseInt((h-h2)/1.7) + 'px');


    $(document).on('click', '.plus', function() {
        $('.plus').addClass('btn-success');
        $('.minus').removeClass('btn-danger');
        console.log("Classes removed");
    })


    $(document).on('click', '.minus', function() {
        $('.plus').removeClass('btn-success');
        $('.minus').addClass('btn-danger');
        console.log("Classes removed");
        $.post('/blacklist', {'action': 'blacklist'});
    })
})

//Refactoring is for the weak.
$(window).resize(function() {
    var h = $(document).height() / 2;
    var h2 = $('#timer').height();

    $('#timer').css('top', parseInt((h-h2)/1.7) + 'px');
})

