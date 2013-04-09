$(document).ready(function(){
	console.log("Ready")
	$('#add').submit(function () {
		console.log('ready');
		var description = $('#description').val();
		var categories = $('#categories').val();
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
		           	console.log('hi');
		           	$('#description').val('');
					$('#categories').val('');
				}
		    });
		return false;
	});
});