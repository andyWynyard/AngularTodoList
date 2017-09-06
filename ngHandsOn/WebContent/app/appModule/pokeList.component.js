angular.module('appModule').component('pokeList', {
	templateUrl : 'app/appModule/pokeList.component.html',
	controller : function(pokemonService) {

		var vm = this;
		
		vm.selected = null;
		
//		vm.show = function(poke) {
//			vm.selected = poke;
//		}
		
		vm.types = [
			  'all',
			  'normal',
			  'poison',
			  'water',
			  'fighting',
			  'fire',
			  'bug',
			  'flying',
			  'electric',
			  'ground',
			  'rock',
			  'psychic',
			  'ghost',
			  'dragon'
			];
		
		vm.selectedType = "all";
		
		vm.setType = function(type) {
			vm.selectedType = type;
		}
		
		vm.pokemons = [];

		vm.index = function() {
			pokemonService.index().then(function(res) {
				console.log(res.data);
				vm.pokemons = res.data;
			});
		}
		
		vm.index();
		
		vmTypes = function(id) {
			pokemonService.show(id).then(function(res) {
				vm.selected = res.data.types;
			});
		}
		

		

		vm.createPokemon = function(pokemon) {
			pokemonService.create(pokemon).then(function(res) {
				vm.index();
			});
			
		}
		
		vm.show = function(id) {
			pokemonService.show(id).then(function(res) {
				vm.selected = res.data;
			});
		}

	},
	controllerAs : 'vm'
});