let app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : './index_Main.html'
	})
	.when('/index_2', {
		templateUrl : './index_2.html'
	})
	.when('/index_3', {
		templateUrl : './index_3.html'
	});
});