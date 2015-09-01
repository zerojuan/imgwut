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
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      scope.state = 'login';
      scope.onLoginClick = function(){
        scope.state = 'login';
      }

      scope.onRegisterClick = function(){
        scope.state = 'register';
      }

      scope.onSubmit = function(){
        vm.email = scope.email;
        vm.password = scope.password;
        vm.submit();
      }
    }

    /** @ngInject */
    function LoginController(login) {
      var vm = this;

      vm.submit = function(){
        login.login(vm.email, vm.password);
        console.log('Logging in...', vm.email, vm.password);
      }
    }
  }

})();
