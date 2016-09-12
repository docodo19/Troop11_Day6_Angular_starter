var App;
(function (App) {
    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: App.Controllers.HomeController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
    ;
})(App || (App = {}));
