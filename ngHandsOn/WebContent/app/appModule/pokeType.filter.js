angular.module('appModule')
.filter('pokeType', function() {
	return function(pokemons, pokeType) {
		var result = [];
		console.log(pokemons);
		console.log(pokeType);
		if (pokeType == "all" || !pokeType) {
			return pokemons;
		}
		pokemons.forEach(function(poke) {
			poke.types.forEach(function(type) {
				if (pokeType == type.name) {
					result.push(poke);
				}
			})
			
		})
		return result;
	}
});
