(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$location', '$scope'];

	function HomeController($location, $scope) {
		var vm = this;


		$scope.isCurrentPath = function (path) {
			return $location.path() == path;
		};
	}
})();

changeNav = function(){
	console.log(document.body.scrollTop);
	console.log(document.documentElement.scrollTop);
	if(document.body.scrollTop > 524 || document.documentElement.scrollTop > 524){
		if(document.getElementById("nav"))
		document.getElementById("nav").id = "fixSmallNav";
	} else {
		if(document.getElementById("fixSmallNav"))
		document.getElementById("fixSmallNav").id = "nav";
	}

}

window.onscroll = function() {changeNav(); console.log("isthis running?")}; //Running func to changenav when you scroll down


