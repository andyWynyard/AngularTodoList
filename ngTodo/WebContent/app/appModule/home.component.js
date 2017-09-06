angular.module('appModule')
.component('home', {
	templateUrl : 'app/appModule/home.component.html',
	controller : function($location) {
		var vm = this;
		
		vm.contactMe = function() {
			$location.path('/contact');
		}
		
	},
	controllerAs : 'vm'
})