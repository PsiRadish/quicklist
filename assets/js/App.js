var quicklistApp = angular.module('QuicklistApp', ['ui.bootstrap', 'ui.tree', 'ngRoute', 'sailsResource', 'ngMessages', 'ngAnimate']);

quicklistApp.run(function()
{
    console.log("Quicklisting like a boss");
});

quicklistApp.config(['$routeProvider', '$locationProvider', 'sailsResourceProvider', function($routeProvider, $locationProvider, sailsResourceProvider)
{
    sailsResourceProvider.configuration =
    {
        prefix: '/api',
        verbose: true
    };
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
    .when('/',
    {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
    })
    .when('/list/new',
    {
        templateUrl: 'views/list/new.html',
        controller: 'ListNewCtrl'
    })
    .when('/list/:path/:name',
    {
        templateUrl: 'views/list/show.html',
        controller: 'ListShowCtrl'
    })
    
    .otherwise(
    {
        templateUrl: 'views/404.html'
    });
}]);
