angular.module('pokedex', [
  'ngRoute',
  'view-modules',
  'pokedex-services'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/view-modules/viewModules.html',
      controller: 'viewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}])



