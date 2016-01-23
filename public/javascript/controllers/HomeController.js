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

window.onscroll = function() {changeNav(); console.log("isthis running?")}; //Running func to changenav when you scroll down

changeNav = function(){
	if(document.body.scrollTop > 524 || document.documentElement.scrollTop > 524){
		document.getElementById("nav").id = "fixSmallNav";
	} else {
		document.getElementById("fixSmallNav").id = "nav";
	}
}


console.log(document.body);
