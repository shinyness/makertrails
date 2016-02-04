angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
      authenticate: false
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupController',
      authenticate: false

    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      authenticate: true
    })
    .state('makerMap', {
      url: '/makerMap',
      templateUrl: 'templates/makerMap.html',
      controller: 'MakerMapController',
      authenticate: true
    })
    .state('selectMap', {
      url: '/selectMap',
      templateUrl: 'templates/selectMap.html',
      controller: 'SelectMapController',
      authenticate: true

    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
