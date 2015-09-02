(function() {
  'use strict';

  angular
    .module('site')
    .controller('PhotoController', PhotoController);

  /** @ngInject */
  function PhotoController($scope, $state, login, jwt) {
    console.log(jwt);

    $scope.logout = function(){
      login.logout();
      $state.go('home');
    }
  }
})();
