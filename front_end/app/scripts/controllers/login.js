'use strict';

angular.module('tokenDemoApp')

.controller('LoginCtrl', function ($scope, alert, auth, $auth) {
  $scope.submit = function() {

    $auth.login({email: $scope.email, password: $scope.password})
      .then(function(res){
        alert('success', 'Welcome', 'Welcome back ' + res.data.user.email);

      }).catch(function(err){
          console.log(err.message);
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
