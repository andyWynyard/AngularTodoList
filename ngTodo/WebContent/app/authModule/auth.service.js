angular.module('authModule')
.factory('authService',
		function($http, $filter, $cookies) {
			var service = {};

			var saveToken = function(user) {
				// TODO : Store the user's id and email in cookies
				
				// Add a cookie
				$cookies.put('userId', user.id);
				$cookies.put('userEmail', user.email);
			}

			service.getToken = function() {
				// TODO : Return an object with id and email properties,
				// the values are the values of the cookies

				// Retrieve the value assigned to a cookie
				return {
					id : $cookies.get('userId'),
					email : $cookies.get('userEmail')
				};
			}

			var removeToken = function() {
				// TODO : Remove both the id and email cookies
				
				// Remove a cookie by name
				$cookies.remove('userId');
				$cookies.remove('userEmail');
			}

			service.login = function(user) {
				return $http({
					method : 'POST',
					url : "api/auth/login",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : user
				}).then(function(res) {
					saveToken(res.data);
				});
				
				// TODO : Use the auth/login route to authenticate the user
				// On success, use saveToken to store the users id/email
				
				
			}

			service.register = function(user) {
				return $http({
					method : 'POST',
					url : "api/auth/register",
					headers : {
						'Content-Type' : 'application/json'
					},
					data : user
				}).then(function(res) {
					saveToken(res.data);
					
				})
				
				// TODO : Use the auth/register route to create and authenticate
				// the user
				// On success, use saveToken to store the users id/email
			}

			service.logout = function() {
				return $http({
					method : 'POST',
					url : "api/auth/logout",
				}).then(function(res) {
					removeToken();					
				})
				
				// TODO : Use the auth/logout route to remove the users session
				// On success, use removeToken to remove the id and email
				// cookies
			}

			return service;
		})
		
		
		
		
		