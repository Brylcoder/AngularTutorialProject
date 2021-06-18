

var myapp = angular.module('myapp', []);

(function (app) {
    "use strict";
    app.controller("HelloController", ['$scope', function ($scope) {
        $scope.helloTo = {
            title: " World, AngularJS"
        };
    }]);
})(myapp);