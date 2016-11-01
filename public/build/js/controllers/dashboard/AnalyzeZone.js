'use stricts';

angular.module('app.controllers')
    .controller('AnalyzeZoneCtrl', ['$scope', 'VotosZonaLupercio', 'VotosZonaLuciana',
        'VotosZonaCampos', 'VotosZonaIzabel', 'VotosZonaTeresa',
        function($scope, VotosZonaLupercio, VotosZonaLuciana, VotosZonaCampos, VotosZonaIzabel, VotosZonaTeresa) {
            const zona10 = '10';
            const zona100 = '100';
            const zona113 = '113';
            const zona117 = '117';



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

                                Highcharts.chart('container', {
                                    title: {
                                        text: '',
                                        x: -20 //center
                                    },
                                    subtitle: {
                                        text: '',
                                        x: -20
                                    },
                                    xAxis: {
                                        categories: ['Zona 10', 'Zona 100', 'Zona 113', 'Zona 117']
                                    },
                                    yAxis: {
                                        title: {
                                            text: 'QTD Votos:'
                                        },
                                        plotLines: [{
                                            value: 0,
                                            width: 1,
                                            color: ''
                                        }]
                                    },
                                    tooltip: {
                                        valueSuffix: ''
                                    },
                                    legend: {
                                        layout: 'vertical',
                                        align: 'right',
                                        verticalAlign: 'middle',
                                        borderWidth: 0
                                    },
                                    series: [{
                                        name: 'Professor Lupércio',
                                        data: [totalVotosLupercioZona10, totalVotosLupercioZona100, totalVotosLupercioZona113, totalVotosLupercioZona117]
                                    }, {
                                        name: 'Antônio Campos',
                                        data: [totalVotosCampos10, totalVotosCampos100, totalVotosCampos113, totalVotosCampos117]
                                    }, {
                                        name: 'Luciana Santos',
                                        data: [totalVotosLuciana10, totalVotosLuciana100, totalVotosLuciana113, totalVotosLuciana117]
                                    }, {
                                        name: 'Izabel Urquiza',
                                        data: [totalVotosIzabel10, totalVotosIzabel100, totalVotosIzabel113, totalVotosIzabel117]
                                    }, {
                                        name: 'Izabel Urquiza',
                                        data: [totalVotosTeresa10, totalVotosTeresa100, totalVotosTeresa113, totalVotosTeresa117]

                                    }]
                                });
                            });
                        });
                    });
                });
            });

        }
    ]);
