angular.module('view-modules', [])
  .controller('viewController', function($scope, $location, PokeStats, Description) {
    var pokemonNames = ['pseudo Pokemon', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran F', 'Nidorina', 'Nidoqueen', 'Nidoran M', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'Farfetchd', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', ' Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr-mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', ' Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyle', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'];
    $scope.storage = {}; //stat storage
    $scope.moveStorage = {}; //moves storage
    $scope.description = ''; //description  storage

    var data = '';

    $scope.getAllStats = function(pokemon) {
      // all pokemon and their stats.
      PokeStats.getStats(pokemon)
        .then(function(res) {
          for (var key in res.data) {
            if ($scope.storage[res.data.name] === undefined) {
              $scope.storage[res.data.name] = {};
            } else {
              $scope.storage[res.data.name].base_experience = res.data.base_experience;
              $scope.storage[res.data.name].height = res.data.height;
              $scope.storage[res.data.name].id = res.data.id;
              $scope.storage[res.data.name].weight = res.data.weight;
              $scope.storage[res.data.name].types = res.data.types.map(function(objType) {
                return objType.type.name;
              });
              $scope.storage[res.data.name].stats = res.data.stats.map(function(stat) {
                return stat.stat.name + ': ' + stat.base_stat;
              });
            }
          }
          //moves: 
          if ($scope.moveStorage[res.data.name] === undefined) {
            $scope.moveStorage[res.data.name] = res.data.moves.map(function(moveObj) {
              return moveObj.move.name;
            });
          }
        })
        .then(function() {
          $scope.ID = $scope.storage[data].id;
          $scope.height = $scope.storage[data].height;
          $scope.weight = $scope.storage[data].weight;
          $scope.base_experience = $scope.storage[data].base_experience;
          $scope.types = $scope.storage[data].types;
          $scope.hp = $scope.storage[data].stats[5];
          $scope.attack = $scope.storage[data].stats[4];
          $scope.defense = $scope.storage[data].stats[3];
          $scope.speed = $scope.storage[data].stats[0];
          $scope.arrayOfMoves = $scope.moveStorage[data].join(', ');
          // console.log('$scope.storage[data]: ', $scope.storage[data])
          console.log('$scope.arrayOfMoves: ',  $scope.arrayOfMoves);
        });
    }

    $scope.getWiki = function(pokemon) {
      var pokemon = pokemon;
      Description.getWiki(pokemon) 
        .then(function(res) {
          var key = Object.keys(res.pages)[0]
          $scope.description = res.pages[key].extract;    
          console.log('$scope.description: ', $scope.description);      
          $scope.$digest();
        });
    }
    
    
    $scope.buttonClick = function(pokemon){
      data = pokemon;
      $scope.getWiki(data);
      $scope.getAllStats(data);
      //clear input field:
      $scope.pokemon = '';

      //handles picture change:
      var index = pokemonNames.indexOf((data[0].toUpperCase() + data.slice(1)))
      console.log('index: ', index);
      if (index < 10) {
        $('.img').attr('src', 'asset/' + '00' + index + data + '.png');      
      } 
      if (index > 10 && index < 100) {
        $('.img').attr('src', 'asset/' + '0' + index + data + '.png');      
      } 
      if (index >= 100) {
        $('.img').attr('src', 'asset/' + index + data + '.png');
      }
    };

  });

