'use strict';

angular.module('tokenDemoApp')

.controller('LoginCtrl', function ($scope, $http, alert, API_URL, authToken, auth, $auth) {
  $scope.submit = function() {

    auth.login($scope.email, $scope.password)
      .success(function(res){
        alert('success', 'Welcome', 'Welcome back ' + res.user.email);

      })
      .error(function(err){
          console.log(err.message);
        alert('warning', 'Something went wrong', err.message);
      });
  };

  $scope.authenticate = function(provider){
      $auth.authenticate(provider).then(function(res){
          alert('success', 'Welcome', 'Welcome back ' + res.data.user.displayName);
      }, handleError);
  }

  function handleError(err){
      alert('warning', 'Something went wrong', err.message);
  }
});
