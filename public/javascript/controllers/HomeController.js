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