(function () {
  angular
    .module('app')
    .directive('autofocus', function () {
      return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          elem[0].focus();
        }
      };
    });
})();
