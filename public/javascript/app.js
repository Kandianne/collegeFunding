(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial', 'ngAnimate'])
	.config(Config)
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		.primaryPalette('light-green', {
      'default': '900', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
  })
		.accentPalette('light-green',{
      'default': '600', // by default use shade 400 from the pink palette for primary intentions
  });
	});
	Config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];
	function Config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'templates/home.html'
		}).state('About',{
			url: '/about',
			templateUrl: 'templates/about.html'
		}).state('GetStarted',{
			url: '/getStarted',
			templateUrl: 'templates/getStarted.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();


