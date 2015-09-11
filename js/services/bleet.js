(function(){
  var bleetServices = angular.module("bleetServices", ['ngResource']);

  bleetServices.factory('Bleet', ['$resource', function($resource) {
    return $resource('http://blittertime.herokuapp.com/bleets/:id.json', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
