angular.module('app.services').factory('dataLupercio', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/lupercio', {}, {
        query: {
          isArray: true
        }
    });
}]);

angular.module('app.services').factory('dataLuciana', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/luciana', {}, {
        query: {
          isArray: true
        }
    });
}]);

angular.module('app.services').factory('dataCampos', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/campos', {}, {
        query: {
          isArray: true
        }
    });
}]);
