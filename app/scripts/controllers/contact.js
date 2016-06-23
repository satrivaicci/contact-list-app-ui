'use strict';

/**
 * @ngdoc function
 * @name contactListUiApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the contactListUiApp
 */
angular.module('contactListUiApp')
  .controller('ContactCtrl', function ($rootScope, $scope, $location, contact) {

    $scope.showError = false;
    $scope.errorMessage = "This is an error message";
    $scope.currentUser = "aomar.espinoza";

    retrieveContacts();

    $scope.reloadContacts = function(){
      retrieveContacts();

    }

    $scope.deleteContact = function(contactId){

      var r = confirm("Delete confirmation?");

      if(r) {
        contact.deleteContact(contactId)
          .success(function (result) {
            retrieveContacts();
          })
          .error(function (error) {
          });
      }
    };

    $scope.newContact = function(){
      $location.path("/newContact");
    };

    function retrieveContacts(){
      contact.getContacts($scope.currentUser)
        .success(function (data) {
          if (!data.errorMessage) {
            $scope.contacts = data;
            //console.log($scope.contacts);
          } else {

          }
        })
        .error(function (data) {

        });
    }

  });
