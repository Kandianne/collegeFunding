
(function() {
	// 'use strict';
	angular.module('app')
	.controller('SuccessController', SuccessController);

	function SuccessController() {
		var vm = this;

		vm.returnScholarships = function(){
			vm.colleges = ['Allegheny College', 'Assumption College', 'Azusa Pacific University'];
			vm.offers = ['39,565', '21,500', '22,558'];;
			vm.projections = ['158,260', ' 86,000', ' 90,232'] 
		
			console.log(vm.colleges);
			console.log(vm.offers);
			console.log(vm.projections);
		};

		vm.returnScholarships();
		
	}
})();