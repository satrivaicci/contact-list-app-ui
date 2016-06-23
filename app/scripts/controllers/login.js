'use strict';

/**
 * @ngdoc function
 * @name contactListUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the contactListUiApp
 */
angular.module('contactListUiApp')
  .controller('LoginCtrl', function ($cookieStore, $rootScope, $scope, $location) {

    $scope.userName = "";

    $scope.loginUser = function(){

      $rootScope.globals = {
        currentUser: {
          userName: $scope.userName
        }
      };

      console.log($rootScope.globals.currentUser.userName);
      $cookieStore.put('globals', $rootScope.globals);

      $location.path('/contacts');
    }
  });
