(function(){
  var router = angular.module('bleetRouter', []);

  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/bleets", {
        templateUrl: 'views/bleets/index.html',
        controller: 'bleetsController',
        controllerAs: 'bleetsCtrl'
      }).
      when("/bleets/:id", {
        templateUrl: 'views/bleets/show.html',
        controller: 'bleetController',
        controllerAs: 'bleetCtrl'
      });
    }
  ]);
})();
