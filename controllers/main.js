var app = angular.module('myapp', []);
angular.controller("HelloController", function ($scope) {
      $scope.helloTo = {};
      $scope.helloTo.title = "World, AngularJS";
});