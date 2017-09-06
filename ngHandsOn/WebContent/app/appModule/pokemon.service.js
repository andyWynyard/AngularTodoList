angular.module('appModule').factory('pokemonService', function($http) {
	var service = {};

	var BASE_URL = 'http://52.25.225.137:8080/pokemon/data/poke';

	service.index = function() {
		return $http({
			method : 'GET',
			url : BASE_URL //+ '?sorted=true'
		})
	}

	service.create = function(pokemon) {
		return $http({
			method : 'POST',
			url : BASE_URL,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : pokemon
		})
	};
	
	service.show = function(id) {
		return $http({
			method : 'GET',
			url : `${BASE_URL}/${id}`
		})
	}

	return service;

})