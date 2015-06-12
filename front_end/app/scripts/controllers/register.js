'use strict';

angular.module('tokenDemoApp')
  .controller('RegisterCtrl', function ($scope, alert, $auth) {
    $scope.submit = function() {

      $auth.signup({
          email: $scope.email,
          password: $scope.password
      }).then(function(res){
           alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email);
      }).catch(function(err){
           alert('warning', 'oops!', 'Could not register');
      });
        // auth.register(
        //     $scope.email,
        //     $scope.password
        // ).success(function(res){
        //      alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email);
        // }).error(function(err){
        //      alert('warning', 'oops!', 'Could not register');
        // });
    };
  });
