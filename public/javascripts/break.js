var photos = {};

$(document).ready(function () {

    var a_id = $('.a_id').attr('id');
    console.log(a_id);

    $('#accept').click(function() {
        console.log("Mission accepted;")
        $.post('/memory', {'activity_id': a_id});
        window.location = '/';
    });

    $('#decline').click(function() {
        console.log("Mission declined;")
        window.location = '/fetch';
    });
});
