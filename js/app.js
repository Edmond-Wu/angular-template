'use strict';

var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider

        .when("/main", {
            templateUrl: "views/main.html",
            controller: "mainCtrl"
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html',
            controller: 'projectsCtrl'
        })
        .when('/cs170', {
            templateUrl: 'views/cs170.html',
            controller: 'cs170Ctrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise('/main');
});

app.controller("mainCtrl", function($scope) {
    $scope.message = "main";
});

app.controller("aboutCtrl", function($scope) {
    $scope.message = "about";
});

app.controller("projectsCtrl", function($scope) {
    $scope.message = "projects";
});

app.controller("cs170Ctrl", function($scope) {
    $scope.message = "cs170";
});

app.controller("contactCtrl", function($scope) {
    $scope.message = "contact";
});

