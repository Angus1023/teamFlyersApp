angular.module("flyersApp").controller('aboutCtrl', function($scope, $stateParams, playersService) {
    $scope.player = playersService.getPlayerById($stateParams.id);
})