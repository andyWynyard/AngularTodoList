angular.module('appModule')
.factory('todoService', function($http, $filter, authService, $location, $rootScope) {
	var service = {};

	// private
	// var todos = [];

	// public
	
	
	
	var checkLogin = function() {
		if(!authService.getToken()) {
			$location.path('/login');
		}
	}
	
	
	service.index = function() {
		checkLogin();
		return $http({
			method : 'GET',
			url : "api/user/" + authService.getToken().id + "/todo" //+ '?sorted=true'
		})
	};

	service.create = function(todo) {
		checkLogin();
		return $http({
			method : 'POST',
			url : "api/user/" + authService.getToken().id + "/todo",
			headers : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
		.then(function(res) {
			$rootScope.$broadcast('created', {
				todo : res.data
			})
			return res;
		})
		
	};

	service.update = function(id, todo) {
		checkLogin();
		if (todo.completed) {
			todo.completeDate = $filter('date')(Date.now(), 'MM/dd/yyyy');
			console.log("Complete Date: " + todo.completeDate + ":" + todo.completed);
		} else {
			todo.completeDate = "";
			console.log("Complete Date: " + todo.completeDate + ":" + todo.completed);
		}
		
		return $http({			
			method : 'PUT',
			url : "api/user/" + authService.getToken().id + "/todo/" + id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
		
	};

	service.destroy = function(id) {
		checkLogin();
		return $http({
			method : 'DELETE',
			url : "api/user/" + authService.getToken().id + "/todo/" + id
		})
		
	}

	return service;
})
