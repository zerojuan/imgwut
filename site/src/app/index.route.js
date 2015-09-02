(function() {
  'use strict';

  angular
    .module('site')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    var loginResolver = function($cookies, $q, $timeout, $state) {
      console.log('Am I resolving');
      var jwt = $cookies.get('jwt');

      var deferred = $q.defer();

      $timeout( function() {
        console.log('Wtf');
        if(!jwt){
          $state.go('home');
          deferred.reject();
        }else{
          deferred.resolve(jwt);
        }
      });

      return deferred.promise;
    }
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          jwt: function($cookies, $q, $timeout, $state){
            console.log('Am I resolving');
            var jwt = $cookies.get('jwt');

            var deferred = $q.defer();

            $timeout( function() {
              if(jwt){
                console.log('Am I logged in?');
                $state.go('photos');
                deferred.reject();
              }else{
                deferred.resolve(jwt);
              }
            });

            return deferred.promise;
          }
        }
      })
      .state('photos', {
        url: '/photo',
        templateUrl: 'app/photos/index.html',
        controller: 'PhotoController',
        controllerAs: 'photos',
        resolve: {
          jwt: loginResolver
        },
      });

    $urlRouterProvider.otherwise('/');
  }

})();
