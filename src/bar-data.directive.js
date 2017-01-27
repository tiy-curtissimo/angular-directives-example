(function () {
  angular
    .module('app')
    .directive('barData', barDataFactory);

  function barDataFactory() {
    return {
      link: function ($scope, element, attr, barGraph) {
        barGraph.addData($scope);
      },
      require: '^barGraph',
      scope: {
        value: '<'
      },
      template: `
        <div ng-if="selected" class="bar-graph-data"
             title="{{value}}"
             ng-transclude>
        </div>
      `,
      transclude: true
    }
  }
}());
