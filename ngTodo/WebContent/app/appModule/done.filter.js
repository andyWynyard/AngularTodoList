angular.module('appModule')
.filter('done', function() {
	return function(todos, bool) {
		var incomplete = 0;
		vm.todos.forEach(function(todo) {
			//console.log("Todo: " + todo.completed);
			if (todo.completed) {
				//console.log("Incomplete Each: " + todo.completed);
				
				incomplete++;
			} else {
				
			}
		})
		//console.log("Incomplete: " + incomplete);
		return incomplete;
	
	}
});
