'use strict';

/**
 * @ngdoc service
 * @name contactListUiApp.user
 * @description
 * # user
 * Service in the contactListUiApp.
 */
angular.module('contactListUiApp')
  .service('user', function ($http) {

    var serviceUrl = "http://localhost:8080/contactList/rest/";

    //return{
    //  getUserContacts: function(userName){
    //    return $http({
    //      url: serviceUrl + "user/" + userName + "/contactsByUserName/",
    //      method: "GET"
    //    });
    //  }
    //
    //};

  });
