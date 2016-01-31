(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['$location', '$scope'];

	function HomeController($location, $scope) {
		var vm = this;

		vm.showMobileButtons = false;

		$scope.isCurrentPath = function (path) {
			return $location.path() == path;
		};

		$scope.animateToggle1 = false;
		// $scope.animateToggle2 = false;
		// $scope.animateToggle3 = false;
		// $scope.animateToggle4 = false;
		// $scope.animateToggle5 = false;
		// $scope.animateToggle6 = false;
		// $scope.animateToggle7 = false;

	}

})();



//===========================MAKING STICKY NAV============================================
changeNav = function(){
	// console.log(document.body.scrollTop, "over 524 should be sticky");
	// if(document.body.scrollTop > 524 && document.body.scrollWidth > 1279  || document.documentElement.scrollTop > 524){
	
	if(document.body.scrollWidth < 1280){
		if(document.getElementById("mobileNav"))
		document.getElementById("mobileNav").id = "fixedMobileNav";
	} else if(document.body.scrollTop > 524){
		if(document.getElementById("nav"))
		document.getElementById("nav").id = "fixSmallNav";
	} else {
		// if(document.getElementById("fixSmallNav"))
		document.getElementById("fixSmallNav").id = "nav";
		document.getElementById("fixedMobileNav").id = "mobileNav";
	}

}

console.log(document.body);

window.onscroll = function() {changeNav()}; 


