(function() {
  'use strict';

  angular
      .module('site')
      .service('login', login);

  /** @ngInject */
  function login($resource, $cookies) {
    var rootAPI = 'https://r43iy47kza.execute-api.us-east-1.amazonaws.com/dev';
    var Login = $resource(rootAPI + '/users/signin', null,
        {
          post: { method: 'POST' },
        });
    var Register = $resource(rootAPI + '/users/signup', null,
        {
          post: { method: 'POST' },
        });

    this.login = function(email, password) {
      var user = Login.post({
        body: {
          email: email,
          password: password,
        },
      }, function(data) {
        console.log(data);
      });

      return user;
    };

    this.logout = function() {
      $cookies.remove('jwt');
    };

    this.register = function(email, password) {
      var user = Register.post({
        body: {
          email: email,
          password: password,
        },
      }, function(data) {
        console.log(data);
      });

      return user;
    };
  }

})();
