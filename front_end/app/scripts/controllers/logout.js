'use strict';

angular.module('tokenDemoApp')
  .controller('LogoutCtrl', function ($scope, authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
