'use stricts';

angular.module('app.controllers')
    .controller('AnalyzeZoneCtrl', ['$scope', 'VotosZonaLupercio', 'VotosZonaLuciana',
        'VotosZonaCampos', 'VotosZonaIzabel', 'VotosZonaTeresa',
        function($scope, VotosZonaLupercio, VotosZonaLuciana, VotosZonaCampos, VotosZonaIzabel, VotosZonaTeresa) {
            const zona10 = '10';
            const zona100 = '100';
            const zona113 = '113';
            const zona117 = '117';

            // options chart Line
            $scope.config = {
                title: 'Qtd Votos:',
                tooltips: true,
                labels: false,
                mouseover: function() {},
                mouseout: function() {},
                click: function() {},
                legend: {
                    display: true,
                    position: 'right'
                }
            };

            $scope.resultLupercio1 = VotosZonaLupercio.query();
            $scope.resultLupercio1.$promise.then(function(result) {
                var totalLupercio;
                var totalVotosLupercioZona10 = 0;
                var totalVotosLupercioZona100 = 0;
                var totalVotosLupercioZona113 = 0;
                var totalVotosLupercioZona117 = 0;
                for (var i = 0; i < result.length; i++) {
                    if (zona10 == result[i].NUMERO_ZONA) {
                        totalVotosLupercioZona10 = totalVotosLupercioZona10 + result[i].TOTAL_VOTOS;
                    } else if (zona100 == result[i].NUMERO_ZONA) {
                        totalVotosLupercioZona100 = totalVotosLupercioZona100 + result[i].TOTAL_VOTOS;
                    } else if (zona113 == result[i].NUMERO_ZONA) {
                        totalVotosLupercioZona113 = totalVotosLupercioZona113 + result[i].TOTAL_VOTOS;
                    } else if (zona117 == result[i].NUMERO_ZONA) {
                        totalVotosLupercioZona117 = totalVotosLupercioZona117 + result[i].TOTAL_VOTOS;
                    }
                    if (!totalLupercio) {
                        totalLupercio = result[i].TOTAL_VOTOS;
                    } else {
                        totalLupercio = totalLupercio + result[i].TOTAL_VOTOS;
                    }
                }
                $scope.resultCampos1 = VotosZonaCampos.query();
                $scope.resultCampos1.$promise.then(function(result) {
                    let totalCampos;
                    var totalVotosCampos10 = 0;
                    var totalVotosCampos100 = 0;
                    var totalVotosCampos113 = 0;
                    var totalVotosCampos117 = 0;
                    for (var i = 0; i < result.length; i++) {
                        if (zona10 == result[i].NUMERO_ZONA) {
                            totalVotosCampos10 = totalVotosCampos10 + result[i].TOTAL_VOTOS;
                        } else if (zona100 == result[i].NUMERO_ZONA) {
                            totalVotosCampos100 = totalVotosCampos100 + result[i].TOTAL_VOTOS;
                        } else if (zona113 == result[i].NUMERO_ZONA) {
                            totalVotosCampos113 = totalVotosCampos113 + result[i].TOTAL_VOTOS;
                        } else if (zona117 == result[i].NUMERO_ZONA) {
                            totalVotosCampos117 = totalVotosCampos117 + result[i].TOTAL_VOTOS;
                        }
                        if (!totalCampos) {
                            totalCampos = result[i].TOTAL_VOTOS;
                        } else {
                            totalCampos = totalCampos + result[i].TOTAL_VOTOS;
                        }
                    }
                    $scope.resultLuciana1 = VotosZonaLuciana.query();
                    $scope.resultLuciana1.$promise.then(function(result) {
                        let totalLuciana;
                        var totalVotosLuciana10 = 0;
                        var totalVotosLuciana100 = 0;
                        var totalVotosLuciana113 = 0;
                        var totalVotosLuciana117 = 0;
                        for (var i = 0; i < result.length; i++) {
                            if (zona10 == result[i].NUMERO_ZONA) {
                                totalVotosLuciana10 = totalVotosLuciana10 + result[i].TOTAL_VOTOS;
                            } else if (zona100 == result[i].NUMERO_ZONA) {
                                totalVotosLuciana100 = totalVotosLuciana100 + result[i].TOTAL_VOTOS;
                            } else if (zona113 == result[i].NUMERO_ZONA) {
                                totalVotosLuciana113 = totalVotosLuciana113 + result[i].TOTAL_VOTOS;
                            } else if (zona117 == result[i].NUMERO_ZONA) {
                                totalVotosLuciana117 = totalVotosLuciana117 + result[i].TOTAL_VOTOS;
                            }
                            if (!totalLuciana) {
                                totalLuciana = result[i].TOTAL_VOTOS;
                            } else {
                                totalLuciana = totalLuciana + result[i].TOTAL_VOTOS;
                            }
                        }
                        $scope.resultIzabel1 = VotosZonaIzabel.query();
                        $scope.resultIzabel1.$promise.then(function(result) {
                            let totalIzabel;
                            var totalVotosIzabel10 = 0;
                            var totalVotosIzabel100 = 0;
                            var totalVotosIzabel113 = 0;
                            var totalVotosIzabel117 = 0;
                            for (var i = 0; i < result.length; i++) {
                                if (zona10 == result[i].NUMERO_ZONA) {
                                    totalVotosIzabel10 = totalVotosIzabel10 + result[i].TOTAL_VOTOS;
                                } else if (zona100 == result[i].NUMERO_ZONA) {
                                    totalVotosIzabel100 = totalVotosIzabel100 + result[i].TOTAL_VOTOS;
                                } else if (zona113 == result[i].NUMERO_ZONA) {
                                    totalVotosIzabel113 = totalVotosIzabel113 + result[i].TOTAL_VOTOS;
                                } else if (zona117 == result[i].NUMERO_ZONA) {
                                    totalVotosIzabel117 = totalVotosIzabel117 + result[i].TOTAL_VOTOS;
                                }
                                if (!totalIzabel) {
                                    totalIzabel = result[i].TOTAL_VOTOS;
                                } else {
                                    totalIzabel = totalIzabel + result[i].TOTAL_VOTOS;
                                }
                            }

                            $scope.resultTeresa1 = VotosZonaTeresa.query();
                            $scope.resultTeresa1.$promise.then(function(result) {
                                let totalTeresa;
                                var totalVotosTeresa10 = 0;
                                var totalVotosTeresa100 = 0;
                                var totalVotosTeresa113 = 0;
                                var totalVotosTeresa117 = 0;
                                for (var i = 0; i < result.length; i++) {
                                    if (zona10 == result[i].NUMERO_ZONA) {
                                        totalVotosTeresa10 = totalVotosTeresa10 + result[i].TOTAL_VOTOS;
                                    } else if (zona100 == result[i].NUMERO_ZONA) {
                                        totalVotosTeresa100 = totalVotosTeresa100 + result[i].TOTAL_VOTOS;
                                    } else if (zona113 == result[i].NUMERO_ZONA) {
                                        totalVotosTeresa113 = totalVotosTeresa113 + result[i].TOTAL_VOTOS;
                                    } else if (zona117 == result[i].NUMERO_ZONA) {
                                        totalVotosTeresa117 = totalVotosTeresa117 + result[i].TOTAL_VOTOS;
                                    }
                                    if (!totalTeresa) {
                                        totalTeresa = result[i].TOTAL_VOTOS;
                                    } else {
                                        totalTeresa = totalTeresa + result[i].TOTAL_VOTOS;
                                    }
                                }
                                $scope.dataLine = {
                                    series: ['', '', '', '', ''],
                                    data: [{
                                        x: "Zona 10",
                                        y: [totalVotosLupercioZona10, totalVotosCampos10, totalVotosLuciana10, totalVotosIzabel10, totalVotosTeresa10],
                                        tooltip: "this is tooltip"
                                    }, {
                                        x: "Zona 100",
                                        y: [totalVotosLupercioZona100, totalVotosCampos100, totalVotosLuciana100, totalVotosIzabel100, totalVotosTeresa100]
                                    }, {
                                        x: "Zona 113",
                                        y: [totalVotosLupercioZona113, totalVotosCampos113, totalVotosLuciana113, totalVotosIzabel113, totalVotosTeresa113]
                                    }, {
                                        x: "Zona 117",
                                        y: [totalVotosLupercioZona117, totalVotosCampos117, totalVotosLuciana117, totalVotosIzabel117, totalVotosTeresa117]
                                    }]
                                };
                            });
                        });
                    });
                });
            });
        }
    ]);
