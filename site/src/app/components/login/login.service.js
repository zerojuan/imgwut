(function() {
  'use strict';

  angular
      .module('site')
      .service('login', login);

  /** @ngInject */
  function login($resource) {
    var rootAPI = 'https://x19lgttbxg.execute-api.us-east-1.amazonaws.com/dev';
    var Login = $resource(rootAPI+'/users/signin', null,
        {
          post: {method: 'POST'}
        });

    this.login = function(email, password){
      var user = Login.post({
        body: {
          email: email,
          password: password
        }
      }, function(data){
        console.log(data);
      });
    }
  }

})();
