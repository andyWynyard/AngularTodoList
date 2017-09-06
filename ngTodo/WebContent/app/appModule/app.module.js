angular.module('appModule', [ 'ngRoute', 'ngCookies', 'authModule', 'particlesApp', 'ui.bootstrap'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		template : '<register></register>'
	})
	.when('/register', {
		template : '<register></register>'
	})
	.when('/login', {
		template : '<login></login>'
	})
	.when('/about', {
		template : '<about>ABOUT STUFF</about>'
	})
	.when('/contact', {
		template : '<contact>CONTACT STUFF</contact>'
	})
	.when('/_404', {
		template : '<not-found></not-found>'
	})
	.when('/todo', {
		template : '<todo-list></todo-list>'
	})
	.when('/todo/:id', {
		template : '<todo-list></todo-list>'
	})
	.otherwise({
		template : '<not-found></not-found>'
	})
});
//
//
//$routeProvider
//.when('/', {
//	template : '<home></home>'
//})
//.when('/about', {
//	template : '<about></about>'
//})
//.when('/contact', {
//	template : '<contact></contact>'
//})
//.when('/_404', {
//	template : '<not-found></not-found>'
//})
//.when('/todo', {
//	template : '<todo-list></todo-list>'
//})
//.when('/todo/:id', {
//	template : '<todo-list></todo-list>'
//})
//.otherwise({
//	template : '<not-found></not-found>'
//})
//});
