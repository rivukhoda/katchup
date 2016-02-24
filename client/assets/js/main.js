
(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly.
			$window.load(function() {

				var x = parseInt($('.wrapper').first().css('padding-top')) - 15;

				$('#nav a, .scrolly').scrolly({
					speed: 1000,
					offset: x
				});

			});

	});

})(jQuery);


var keywords;
var app = angular.module('Main', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.videoinput = "";

    $scope.saved = null;
    $http.get('./assets/json/saved.json')
       .success(function(data) {
           $scope.saved=data;
       })
       .error(function(data,status,error,config){
           $scope.saved = [{heading:"Error", description:"Could not load json data"}];
       });

  	 $scope.keywords = "";
    // $http.get('./assets/json/keywords.json')
    //    .success(function(data) {
    //        $scope.keywords=data;
    //    })
    //    .error(function(data,status,error,config){
    //        $scope.keywords = [{heading:"Error", description:"Could not load json data"}];
    //    });
        var word = "hogwash";
        var path = "Michio_Kaku.mp4";
      
$scope.formkey = "";
$scope.ajaxsearch = function(){
	// var key = document.getElementById('keys').value();

	$http.get('http://0.0.0.0:5000/search', {
        params:  {keyword: $scope.formkey, name: "Michio_Kaku.mp4"}
    }
)
.then(function(response) {
    // Request completed successfully
    console.log(response);
    $scope.keywords = response;
}, function(x) {
	alert("error");
    // Request error
});
};


})

function validateForm() {
    var x = document.forms["myForm"]["videoname"].value;
    if (x == null || x == "") {
        // alert("Name must be filled out");
        return false;
    }
    else if(x == "COMP 202" || x == "COMP 202 McGill" || x == "Dreams") {
    	return true;
    }
    else{
    	// alert("Nothing found");
    	return false;
    }
}

var myvideo = document.getElementById('myvideo'),
    playbutton = document.getElementById('playme');
    


function clickme(data_id){
	myvideo.pause();
	myvideo.currentTime = data_id - 5;
	myvideo.play();
};

// function ajaxsearch(){
// 	event.preventDefault();
//     var key = document.getElementById('keys').value();
//  	$.ajax({
//  		type:"GET",
//  		url:"http://0.0.0.0:5000/search",
//  		data:{
//  			name: "Michio_Kaku.mp4",
//  			keyword:"the"
//  		}
//  	}).done(function(data){
//  		alert("running");
//  	});

// }
	

$.get( "127.0.0.1:5000/", function( data ) {

  alert( "Load was performed." );
});
