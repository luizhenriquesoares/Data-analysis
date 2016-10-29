angular.module('app.services').factory('VotosSecao', ['$resource', 'appConfig', function($resource, appConfig){
    return $resource(appConfig.baseUrl + '/api/olinda/:zona/:secao', {zona: '@zona', secao: '@secao'}, {
        get: {
          isArray: true
        }
    });
}]);
