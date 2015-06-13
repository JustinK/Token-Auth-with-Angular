'use strict';

angular.module('tokenDemoApp')

.controller('LoginCtrl', function ($scope, alert, auth, $auth) {
  $scope.submit = function() {

    $auth.login({
        email: $scope.email,
        password: $scope.password
    }).then(function(res){
        var message = 'Welcome back ' + res.data.user.email;

        if (!res.data.user.active){
            message += '. Please remember to activate you account soon.';
        }
        alert('success', 'Welcome', message);
    }).catch(function(err){
        alert('warning', 'Something went wrong', err.message);
  });
  }

  $scope.authenticate = function(provider){
      $auth.authenticate(provider).then(function(res){
          alert('success', 'Welcome', 'Welcome back ' + res.data.user.displayName);
      }, handleError);
  }

  function handleError(err){
      alert('warning', 'Something went wrong', err.message);
  }
});
