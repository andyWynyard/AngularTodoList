angular.module('appModule').component('navigation', {
	templateUrl : 'app/appModule/navigation.component.html',
	controller : function(authService) {
		var vm = this;


		vm.loggedIn = function() {
			var user = authService.getToken();
			if (!user.id) {
				return false;
			} else {
				return true;
			}
		}
	},
	controllerAs : 'vm'
})