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

app.directive('sliderToggle', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            var target = element.parent()[0].querySelector('[slider]');
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});
app.directive('slider', function () {
    return {
        restrict:'A',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '.7s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
});

app.controller("mainCtrl", function($scope) {
    // $scope.message = "main";
});

app.controller("aboutCtrl", function($scope) {
    // $scope.message = "about";
});

app.controller("projectsCtrl", function($scope) {
    // $scope.message = "projects";
});

app.controller("cs170Ctrl", function($scope) {
    // $scope.message = "cs170";
});

app.controller("contactCtrl", function($scope) {
    // $scope.message = "contact";
});

