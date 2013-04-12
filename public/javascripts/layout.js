$(document).ready(function() {
    console.log('Layout.js')
    $('.nav-item').mouseover(function() {
        $(this).animate({"color": "#45a546"}, 500);
    });

    $('.nav-item').mouseout(function() {
        $(this).animate({"color": "#BBBBBB"}, 500);
    });

    $('#settings_link').click(function() {
        window.location = '/settings';
    })

    $('#add_link').click(function() {
        window.location = '/add';
    })

    $('#break_link').click(function() {
        window.location = '/fetch';
    })
})
