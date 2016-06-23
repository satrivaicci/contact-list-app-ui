'use strict';

/**
 * @ngdoc overview
 * @name contactListUiApp
 * @description
 * # contactListUiApp
 *
 * Main module of the application.
 */
angular
  .module('contactListUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/newContact', {
        templateUrl: 'views/newcontact.html',
        controller: 'NewcontactCtrl',
        controllerAs: 'newcontact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
