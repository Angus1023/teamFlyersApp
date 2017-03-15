angular.module("flyersApp").controller('playersCtrl', function($scope, playersService) {
    $scope.players = playersService.getPlayers();
    console.log($scope.players);

})