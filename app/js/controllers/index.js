'use stricts';

angular.module('app.controllers')
    .controller('indexCtrl', ['$scope', 'dataLupercio', 'dataLuciana', 'dataCampos',
        function($scope, dataLupercio, dataLuciana, dataCampos) {

            $scope.labels = ["Professor Lupércio", "Antônio Campos", "Luciana"];
            $scope.colors = [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];
            $scope.data = [];

            $scope.resultLupercio = dataLupercio.query();
            $scope.resultLupercio.$promise.then(function(result) {
                let totalLupercio;
                for (var i = 0; i < result.length; i++) {
                    if (!totalLupercio) {
                        totalLupercio = result[i].TOTAL_VOTOS;
                    } else {
                        totalLupercio = totalLupercio + result[i].TOTAL_VOTOS;
                    }
                }
                $scope.resultCampos = dataCampos.query();
                $scope.resultCampos.$promise.then(function(result) {
                    let totalCampos;
                    for (var i = 0; i < result.length; i++) {
                        if (!totalCampos) {
                            totalCampos = result[i].TOTAL_VOTOS;
                        } else {
                            totalCampos = totalCampos + result[i].TOTAL_VOTOS;
                        }
                    }
                    $scope.resultLuciana = dataLuciana.query();
                    $scope.resultLuciana.$promise.then(function(result) {
                        let totalLuciana;
                        for (var i = 0; i < result.length; i++) {
                            if (!totalLuciana) {
                                totalLuciana = result[i].TOTAL_VOTOS;
                            } else {
                                totalLuciana = totalLuciana + result[i].TOTAL_VOTOS;
                            }
                        }
                        $scope.data = [totalLupercio, totalCampos, totalLuciana];
                    });
                });
            });
        }
    ]);
