$(document).ready(function(){

    $('.selections').chosen();
    center_element('#outer');

	$('#add').submit(function () {
		console.log('Ready');
        console.log(req.body.categories);
		var description = $('#description').val();
		var categories = $('#categories').val();
        console.log("Categories: ", categories);
		var catArray = categories.split(',')
		var activityCategories = []
		console.log(catArray)
		for (var i = 0; i < catArray.length; i++) {
			activityCategories[i]=catArray[i].replace(' ','');
		};
		$.post("/add", { "description": description, "categories": activityCategories },
			function(err){
				console.log(err);
				console.log('hi');
		        if (err){
		 	      	console.log('error',err);
		        }
		        else{
		           	console.log('success');
		           	$('#description').val('');
					$('#categories').val('');
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


