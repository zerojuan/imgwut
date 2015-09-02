(function() {
  'use strict';

  angular
    .module('site')
    .directive('acmeLogin', acmeLogin);

  /** @ngInject */
  function acmeLogin() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/login/login.html',
      scope: {
        creationDate: '='
      },
      controller: LoginController,
      link: linkFunc,
      controllerAs: 'vm',
      bindToController: true,
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      scope.state = 'login';
      scope.onLoginClick = function() {
        scope.state = 'login';
      };

      scope.onRegisterClick = function() {
        scope.state = 'register';
      };

      scope.onSubmit = function() {
        vm.email = scope.email;
        vm.password = scope.password;

        if (scope.state === 'login') {
          vm.loginUser();
        }else if (scope.state === 'register') {
          vm.registerUser();
        }
      };
    }

    /** @ngInject */
    function LoginController(login, $cookies, $state) {
      var vm = this;

      vm.loginUser = function() {
        console.log('Logging in...', vm.email, vm.password);
        login.login(vm.email, vm.password).$promise.then(function(data) {
          if (data.errorMessage) {
            var errorMessage = JSON.parse(data.errorMessage);
            console.log('Error message...', errorMessage.message);
            return;
          }

          //store jwt as a cookie
          $cookies.putObject('jwt', data.jwt);

          //redirect
          $state.go('photos');
        });
      };

      vm.registerUser = function() {
        console.log('Registering user..', vm.email, vm.password);
        login.register(vm.email, vm.password).$promise.then(function(data) {
          console.log('Has user registered');
          if (data.errorMessage) {
            var errorMessage = JSON.parse(data.errorMessage);
            console.log('Error Message....', errorMessage.message);
            return;
          }

          //store jwt as a cookie
          $cookies.putObject('jwt', data.jwt);

          //redirect
          $state.go('photos');
        });
      };
    }
  }

})();
