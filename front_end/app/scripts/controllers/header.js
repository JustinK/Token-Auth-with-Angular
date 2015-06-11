'use strict';

angular.module('tokenDemoApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
