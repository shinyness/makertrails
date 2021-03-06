//ROOT APP
angular.module('app', [
  'ionic',
  'ngCordova',
  'app.routes',
  'app.CollisionFactory',
  'app.MakerMapController',
  'app.MakerMapFactory',
  'app.LoginController',
  'app.LoginFactory',
  'app.SignupController',
  'app.HomeController',
  'app.SelectMapController',
  'app.PhotoFactory',
  'app.ReviewFactory',
  'app.SelectMapFactory',
  'app.SelectMapController',
  'app.TestLocationController',
  'app.LocationInfoController',
  'app.LocationInfoFactory',
  'app.ReviewFactory'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatussBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.run(function($rootScope, $state, LoginFactory, $window){

  $rootScope.$on('$stateChangeStart' , function(event, toState) {
    if(!toState.authenticate || LoginFactory.isAuthenticated()){
      return;
    }
    event.preventDefault();
    if(toState.authenticate){
      $state.go('login')
      return
    }
  });
})
