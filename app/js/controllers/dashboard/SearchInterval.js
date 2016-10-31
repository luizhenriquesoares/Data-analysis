'use stricts';

angular.module('app.controllers')
    .controller('SearchIntervalCtrl', ['$scope', 'VotosSecao', 'GetSecao', 'notify', 'IntervaloSecao',
        function($scope, VotosSecao, GetSecao, notify, IntervaloSecao) {
            // options chart bar
            $scope.config = {
                title: 'Qtd Votos:',
                tooltips: true,
                labels: true,
                mouseover: function() {},
                mouseout: function() {},
                click: function() {},
                legend: {
                    display: true,
                    position: 'right'
                }
            };
            var tmp;
            $scope.setSecao = function(zona) {
                if (tmp === '') {
                    tmp = zona;
                } else {
                    if (zona !== undefined && tmp !== zona) {
                        $scope.secao = GetSecao.get({
                            zona: zona
                        })
                        $scope.secao.$promise.then(function(data) {
                            tmp = zona;
                            $scope.getSecao = function(getSecao) {

                            }
                        });
                    }
                }
            };
            $scope.setZona = function(secaoInicial, secaoFinal, zona) {
                console.log(zona + ' ' + secaoInicial + ' ' + secaoFinal);
                $scope.search = IntervaloSecao.get({
                    secaoInicial: secaoInicial,
                    secaoFinal: secaoFinal,
                    zona: zona
                });
                $scope.search.$promise.then(function(result) {
                    var qtd_votos_1 = 0;
                    var qtd_votos_2 = 0;
                    var qtd_votos_3 = 0;
                    var qtd_votos_4 = 0;
                    var qtd_votos_5 = 0;
                    var qtd_votos_6 = 0;
                    var qtd_votos_7 = 0;
                    var qtd_votos_8 = 0;
                    var qtd_votos_9 = 0;

                    for (var i = 0; i < result.length; i++) {
                        if (result[i].NUMERO_VOTAVEL == 77) {
                            if (qtd_votos_1) {
                                qtd_votos_1 = qtd_votos_1 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_1 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 40) {
                            if (qtd_votos_2) {
                                qtd_votos_2 = qtd_votos_2 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_2 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 65) {
                            if (qtd_votos_3) {
                                qtd_votos_3 = qtd_votos_3 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_3 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 13) {
                            if (qtd_votos_4) {
                                qtd_votos_4 = qtd_votos_4 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_4 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 15) {
                            if (qtd_votos_5) {
                                qtd_votos_5 = qtd_votos_5 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_5 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 43) {
                            if (qtd_votos_6) {
                                qtd_votos_6 = qtd_votos_6 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_6 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 23) {
                            if (qtd_votos_7) {
                                qtd_votos_7 = qtd_votos_7 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_7 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 50) {
                            if (qtd_votos_8) {
                                qtd_votos_8 = qtd_votos_8 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_8 = result[i].QTD_VOTOS;
                            }
                        } else if (result[i].NUMERO_VOTAVEL == 45) {
                            if (qtd_votos_9) {
                                qtd_votos_9 = qtd_votos_9 + result[i].QTD_VOTOS;
                            } else {
                                qtd_votos_9 = result[i].QTD_VOTOS;
                            }
                        }
                    }
                    $scope.dataBar = {
                        series: ['Professor Lupércio', 'Antônio Campos', 'Luciana Santos', 'Tereisa Leitão',
                            'Ricardo Costa', 'Guga', 'João Luiz', 'Jesualdo', 'Izabel Urquiza'
                        ],
                        data: [{
                            x: 'Secão',
                            y: [qtd_votos_1, qtd_votos_2, qtd_votos_3, qtd_votos_4, qtd_votos_5, qtd_votos_6, qtd_votos_7, qtd_votos_8, qtd_votos_9],
                        }]
                    };
                    notify('Resultado gerado com sucesso!');
                });
            };
        }
    ]);
