'use strict';

/**
 * @ngdoc function
 * @name tokenDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tokenDemoApp
 */
angular.module('tokenDemoApp', ['ui.router'])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
