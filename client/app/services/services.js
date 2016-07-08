angular.module('pokedex-services', [])
  .factory('pokeimg', function($http) {

  })
  .factory('PokeStats', function($http) {
    var storage = {};
    //getStats should take in a pokemon index.
    var getStats = function(pokemon) {
      var pokemonNames = ['pseudo Pokemon', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran F', 'Nidorina', 'Nidoqueen', 'Nidoran M', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetchd', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', ' Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr-mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', ' Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyle', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'];
      var index = pokemonNames.indexOf((pokemon[0].toUpperCase() + pokemon.slice(1)))
        return $http({
          method: 'GET',
          url: 'http://pokeapi.co/api/v2/pokemon/' + index + '/'
          // url: 'http://cors.io/?u=http://pokeapi.co/api/v2/pokemon/' + index + '/'
        })
        .then(function(res) {
          return res;
        });
    }
    return {
      getStats: getStats,
      storage: storage
    }

  })
  .factory('Description', function($http) {
    var getWiki = function(pokemon) {
      console.log('pokemon in Description: ', pokemon);
      return $.ajax({
          type: "GET",
          dataType: 'jsonp',
          url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + pokemon + '',

      })
      .then(function onSuccess(resp) {
        return resp.query;
      }, function onError(resp) {
        console.log(resp);
      });
    }

    return {
      getWiki: getWiki
    }
  });
 