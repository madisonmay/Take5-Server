var photos = {};

$(document).ready(function () {
    $('#accept').click(function() {
        console.log("Mission accepted;")
        window.location = '/';
    });
    $('#decline').click(function() {
        console.log("Mission accepted;")
        window.location = '/fetch';
    });
});
