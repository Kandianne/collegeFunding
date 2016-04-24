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
	Config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$locationProvider'];
	function Config($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider) {
		$stateProvider.state('Home',{
			url: '/home',
			templateUrl: 'templates/home.html'
		}).state('About',{
			url: '/about',
			templateUrl: 'templates/about.html'
		}).state('GetStarted',{
			url: '/getStarted',
			templateUrl: 'templates/getStarted.html'
		}).state('Resources',{
			url: '/resources',
			templateUrl: 'templates/resources.html'
		}).state('Stories',{
			url: '/stories',
			templateUrl: 'templates/stories.html'
		}).state('Videos',{
			url: '/videos',
			templateUrl: 'templates/videos.html'
		}).state('Contact',{
			url: '/contact',
			templateUrl: 'templates/contact.html'
		}).state('Workshop',{
			url: '/workshop',
			templateUrl: 'views/workshop.html'
		})

		// $locationProvider.html5Mode({
  // 		enabled: true,
  // 		requireBase: false
		// });

		$urlRouterProvider.otherwise('/home');
	}
})();


