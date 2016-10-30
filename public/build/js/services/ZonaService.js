angular.module('app.services').factory('VotosZonaLupercio', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/zona/lupercio', {}, {
        query: {
          isArray: true
        }
    });
}]);

angular.module('app.services').factory('VotosZonaLuciana', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/zona/luciana', {}, {
        query: {
          isArray: true
        }
    });
}]);

angular.module('app.services').factory('VotosZonaCampos', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/zona/campos', {}, {
        query: {
          isArray: true
        }
    });
}]);

angular.module('app.services').factory('GetSecao', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/:zona/', {zona: '@zona'}, {
        get: {
          isArray: true
        }
    });
}]);
