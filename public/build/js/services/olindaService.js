angular.module('app.services').factory('OlindaService', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda', {}, {
        query: {
          isArray: true
        }
    });
}]);
