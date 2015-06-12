'use strict';
angular
    .module('tokenDemoApp')
    .config(function($urlRouterProvider, $stateProvider, $httpProvider, $authProvider, API_URL){

        $authProvider.loginUrl = API_URL + 'login';
        $authProvider.signupUrl = API_URL + 'register';

        $authProvider.google({
            clientId: '434194741233-tuc7fvpvrm229tgrurjbp1q7ru87qmos.apps.googleusercontent.com',
            url: API_URL + 'auth/google'
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main',{
            url: '/',
            templateUrl: '/views/main.html'
        })
        .state('register',{
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'RegisterCtrl'
        })
        .state('login',{
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'LoginCtrl'
        })
        .state('jobs',{
            url: '/jobs',
            templateUrl: '/views/jobs.html',
            controller: 'JobsCtrl'
        })
        .state('logout',{
            url: '/logout',
            controller: 'LogoutCtrl'
        });

        $httpProvider.interceptors.push('authInterceptor');
    })

    .constant('API_URL', 'http://localhost:3000/');
