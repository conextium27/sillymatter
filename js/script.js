var app = angular.module('myApp', []);

app.controller('pokeController', function($scope, $http) {
    $scope.dexNum = 0;
    $scope.getPokemon = function() {
          
        
        $http({
            method: 'jsonp',
            url: 'http://pokeapi.co/api/v1/pokemon/' + $scope.dexNum + '?callback=JSON_CALLBACK'
        }).success(function(data, status, headers, config) {
            
            //console.log(data);
            $scope.pokemon = data;
            $scope.pokemon.name = data.name;

            $scope.pokemon.sprite = 'http://pokeapi.co/media/img/' + $scope.dexNum + '.png';

            
        }).error(function(data, status, headers, config) {
            console.log(status);
            console.log(headers);
        });
        
    };
});