
(function() {
	'use strict';
	angular.module('app')
	.controller('SuccessController', SuccessController);

	function SuccessController() {
		var vm = this;

		vm.returnScholarships = function(){
			vm.success = [{
				colleges: ['Allegheny College', 'Assumption College', 'Azusa Pacific University'],
				offers: ['39,565', '21,500', '22,558'],
				projections: ['158,260', ' 86,000', ' 90,232'] 
			}];
			console.log(vm.success);
		};

		vm.returnScholarships();

	}
})();