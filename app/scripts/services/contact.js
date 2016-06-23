'use strict';

/**
 * @ngdoc service
 * @name contactListUiApp.contact
 * @description
 * # contact
 * Service in the contactListUiApp.
 */
angular.module('contactListUiApp')
  .service('contact', function ($http) {

    var serviceUrl = "http://localhost:8080/contactList/rest/";

    return{
      deleteContact: function(contactId){
        return $http({
          url: serviceUrl + "contacts/" + contactId,
          method: "DELETE"
        });
      },
      getContacts: function(userName){
        return $http({
          url: serviceUrl + "contacts?userName=" + userName,
          method: "GET"
        });
      },
      createContact: function(contact){

        console.log(contact);
        return $http({
          url: serviceUrl + "contacts/",
          method: "POST",
          data: JSON.stringify(contact)
        });
      }

    };

  });
