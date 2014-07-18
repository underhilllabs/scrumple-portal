(function() {
  var app = angular.module('scrumple', []);

  app.directive('scrumpleWidget', function() {
    return {
      restrict: 'E',
      templateUrl: 'scrumple-widget.html',
    };
  });

})();
