var app = angular.module('MyApp',['ngResource', 'ui.router','ngResource','ngRoute'])
.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
                 templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            })
      .when('/shows/:id',{
          templateUrl:'views/details.html',
          controller:'DetailCtrl'
      })


}])
;
