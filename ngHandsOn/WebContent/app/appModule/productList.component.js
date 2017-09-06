//angular.module('appModule').component('productList', {
	templateUrl : 'app/appModule/productList.component.html',
	controller : function(productService) {
		// 1
		var vm = this;

		// 2
		vm.list = [];

		/* this function IS available in the template */

		vm.list = productService.index();

		vm.films = function() {
			return vm.list.length;
		}

		vm.log = function(msg) {
			console.log(msg);
		}

		vm.addProduct = function(prod) {
			// vm.list.push(prod);
			productService.create(prod);
			vm.list = productService.index();
		};

	},
	// 3
	controllerAs : 'vm'
});
