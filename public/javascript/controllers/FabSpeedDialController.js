(function() {
  	'use strict';
  	angular.module('app')
    .controller('FabSpeedDialController', FabSpeedDialController);

     function FabSpeedDialController($scope) {

      $scope.availableModes = ['md-fling', 'md-scale'];
      $scope.selectedMode = 'md-scale';

    };
})();