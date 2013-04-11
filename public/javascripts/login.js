$(document).ready(function() {
    center_element('#login');
})

$(window).resize(function() {
    center_element('#login');
});

function center_element(selector){
    var h = $(document).height() / 2;
    var h2 = $(selector).height();

    $(selector).css('top', parseInt(h-h2) + 'px');
}
