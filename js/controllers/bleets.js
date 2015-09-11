(function(){
  var bleetControllers = angular.module("bleetControllers", ['ngRoute']);

  // index controller
  bleetControllers.controller('bleetsController', ['Bleet','$routeParams', function(Bleet, $routeParams) {
    // this.bleets = Bleet.query({id: $routeParams.id}); // What should be passed into query?
  }]);

  // show controller
  bleetControllers.controller('bleetController', ['Bleet','$routeParams', function(Bleet, $routeParams) {
    this.bleet = Bleet.get({id: $routeParams.id});
  }]);


})();
