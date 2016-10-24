'use stricts';

angular.module('app.controllers')
    .controller('indexCtrl', ['$scope', 'OlindaService', function($scope, OlindaService) {
        $scope.data = [];
        OlindaService.query({}, function(data) {
            $scope.data = data;
        }, function(err) {
            console.log(err);
        });
    }]);
