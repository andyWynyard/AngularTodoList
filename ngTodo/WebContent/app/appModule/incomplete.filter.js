angular.module('appModule')
.filter('incomplete', function() {
	return function(todos, bool) {
		var result = [];
		//console.log(todos);

		if (bool == 0) {
			result = todos;
		} else {
			todos.forEach(function(todo) {
				if (!todo.completed) {
					result.push(todo);
				}
			})
		}
		//console.log(result);
		return result;
	}
});
