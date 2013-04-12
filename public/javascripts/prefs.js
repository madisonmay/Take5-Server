$(document).ready(function(){
    $('.selections').chosen();
    center_element('#outer');

	console.log('go');
	$('#prefs').submit(function () {
  		var categories = $('#categories').val()
		$.post("/prefs", { "categories": categories },
			function(err){
		        if (err){
		 	      	console.log('error',err);
		        }
		        else{
		           	console.log('Preferences Saved');
				}
		    });
		return false;
	});
});

$(window).resize(function() {
    center_element('#outer');
});

function center_element(selector){
    var h = $(document).height() / 2;
    var h2 = $(selector).height() ;

    var w = $(document).width() / 2;
    var w2 = $(selector).width() / 2;

    $(selector).css('top', parseInt(h-h2*5/7) + 'px');
    $(selector).css('left', parseInt(w-w2) + 'px');
}



