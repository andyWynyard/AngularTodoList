angular.module('appModule').component('todoList', {
	templateUrl : 'app/appModule/todoList.component.html',
	controller : function(todoService, $routeParams, $location, $scope) {
		var vm = this;

		vm.todos = [];
		
		vm.selectDone = 0;

		vm.selected = null;

		vm.editTodo = null;
		
		$scope.$on('created', function(e, todo) {
			console.log(e);
			console.log(todo);
		})

		vm.reload = function() {
			console.log("reloaded")
			todoService.index().then(function(res) {
				vm.todos = res.data;
				if (!vm.selected && parseInt($routeParams.id)) {
					vm.todos.forEach(function(t) {
						if (t.id === parseInt($routeParams.id)) {
							vm.selected = t;
						}
					});
					if (!vm.selected) {
						$location.path('/_404')
					}
				}
			});
		}

		vm.reload();

		vm.checkNumNotDone = function() {
			if (vm.getTodoIncomplete() >= 15)
				return 'label-danger';
			if (vm.getTodoIncomplete() >= 10)
				return 'label-warning';
			if (vm.getTodoIncomplete() >= 5)
				return 'label-success';
			return 'label-info';
		}



		vm.displayTodo = function(todo) {
			console.log(todo);
			vm.selected = todo;
			console.log(vm.selected);
		}

		vm.setEditTodo = function() {
			vm.editTodo = angular.copy(vm.selected);
		}

		vm.updateTodo = function(todo) {
			var id = todo.id;
			todoService.update(id, todo)
				.then(function(res){
				
				vm.reload();
			})

		}

		vm.afterSaveShowAgain = function() {
			vm.selected = angular.copy(vm.editTodo);
		}

		vm.displayTable = function() {
			vm.selected = null;
		}

		vm.getTodoCount = function() {
			return vm.todos.length;
		}

		vm.getTodoIncomplete = function(todo) {
			var incomplete = 0;
			vm.todos.forEach(function(todo) {
				// console.log("Todo: " + todo.completed);
				if (!todo.completed) {
					// console.log("Incomplete Each: " + todo.completed);

					incomplete++;
				} else {

				}
			})
			// console.log("Incomplete: " + incomplete);
			return incomplete;

		}

		vm.addTodo = function(todo) {
			if (todo.completed == null) {
				todo.completed = false;
			}
			var id = todo.userId;
			console.log(todo);
			todoService.create(todo).then(function(res) {
				vm.reload();

			});
		}

		vm.deleteTodo = function(id) {
			console.log(id);
			todoService.destroy(id).then(function(res) {
				console.log(id);
				vm.reload();
			});
		}

		vm.checkStrikethrough = function(todo) {
			if (todo.completed) {
				return 'done';

			}
		}

		// vm.todos = todoService.index();

	},
	controllerAs : "vm"
})
