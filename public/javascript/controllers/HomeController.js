(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController($location, $scope) {
		var vm = this;

		vm.showMobileButtons = false;

		$scope.isCurrentPath = function (path) {
			return $location.path() == path;
		};

		// $scope.animateToggle1 = false;
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
	
	if(document.body.scrollWidth < 1280 && document.body.scrollTop > 500){
		if(document.getElementById("mobileNav") && document.getElementById("toggledMobileNav"))
		document.getElementById("mobileNav").id = "fixedMobileNav";
		document.getElementById("toggledMobileNav").id = "fixedToggleNav";
	} else if(document.body.scrollTop < 530 && document.body.scrollWidth > 1280){
		if(document.getElementById("fixSmallNav"))
		document.getElementById("fixSmallNav").id = "nav";
	// } else if(document.body.scrollTop > 530 && document.body.scrollWidth > 1280){
	} else if(document.body.scrollWidth > 1280){
		if(document.getElementById("nav"))
		document.getElementById("nav").id = "fixSmallNav";
	} else if (document.body.scrollWidth < 1280 && document.body.scrollTop < 500) {
		if(document.getElementById("fixedMobileNav") && document.getElementById("fixedToggleNav"))
		document.getElementById("fixedMobileNav").id = "mobileNav";
		document.getElementById("fixedToggleNav").id = "toggledMobileNav";
	} else {
		if(document.getElementById("fixSmallNav"))
		document.getElementById("fixedMobileNav").id = "mobileNav";
	}
}

// console.log(document.body);

window.onscroll = function() {changeNav()}; 


//===========================OPT IN BOX============================================

var icpForm3500 = document.getElementById('icpsignup3500');

if (document.location.protocol === "https:")
	icpForm3500.action = "https://app.icontact.com/icp/signup.php";

function verifyRequired3500() {
	if (icpForm3500["fields_fname"].value == "") {
		icpForm3500["fields_fname"].focus();
		alert("The First Name field is required.");
		return false;
	}
	if (icpForm3500["fields_fname"].value && icpForm3500["fields_fname"].value !== "") {
		icpForm3500["fields_fname"].value = icpForm3500["fields_fname"].value.trim();
	}
	if (icpForm3500["fields_email"].value == "") {
		icpForm3500["fields_email"].focus();
		alert("The Email field is required.");
		return false;
	}
	if (icpForm3500["fields_email"].value && icpForm3500["fields_email"].value !== "") {
		icpForm3500["fields_email"].value = icpForm3500["fields_email"].value.trim();
	}
	return true;
}

function validDate3500(value) {

	if (value == "") {
		return true;
	}
	var dateSections = value.split('/');
	if (dateSections.length != 3) {
		return false;
	}
	var month = dateSections[0];
	if (month && (month.length > 2 || month < 1 || month > 12)) {
		return false;
	}
	var day = dateSections[1];
	if (day && (day.length > 2 || day < 1 || day > 31)) {
		return false;
	}
	var year = dateSections[2];
	if (!year || (year && year.length != 4)) {
		return false;
	}
	var dateValue = new Date(value);
	if (month != (dateValue.getMonth()+1) || day != dateValue.getDate() || year != dateValue.getFullYear()) {
		return false;
	}
	return true;
}
