'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise('/main');
});

app.controller('mainCtrl', function($scope) {});

app.controller('aboutCtrl', function($scope) {});

app.controller('contactCtrl', function($scope) {});
