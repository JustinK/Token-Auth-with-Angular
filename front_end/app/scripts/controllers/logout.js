'use strict';

angular.module('tokenDemoApp')
  .controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
  });
