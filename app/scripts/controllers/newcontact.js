'use strict';

/**
 * @ngdoc function
 * @name contactListUiApp.controller:NewcontactCtrl
 * @description
 * # NewcontactCtrl
 * Controller of the contactListUiApp
 */
angular.module('contactListUiApp')
  .controller('NewcontactCtrl', function ($scope, $location, contact) {

    $scope.createUser = function(){

      var contactToSave = {"name":$scope.fields.name,
                            "useruserId":1,
                            "email": $scope.fields.email,
                            "phone":$scope.fields.phone,
                            "address":$scope.fields.address,
                            "birthday":$scope.fields.birthday};
      contact.createContact(contactToSave).success(function(){}).error(function(){});
      $location.path("/contacts");

    }

    $scope.cancelCreate = function(){
      $location.path("/contacts");
    }

  });
