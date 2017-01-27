(function () {
  angular
    .module('app')
    .directive('barGraph', barGraphFactory);

  function barGraphFactory() {
    return {
      controller: function ($scope) {
        let values = $scope.values = [];

        $scope.select = function (value) {
          values.forEach(v => v.childData.selected = false);
          value.childData.selected = true;
        };

        this.addData = function (dataScope) {
          values.push({
            childData: dataScope,
            height: dataScope.value + 'px'
          });
        }
      },
      scope: {
        title: '@'
      },
      template: `
        <div class="bar-graph">
          <h1 class="bar-graph-title" ng-if="title">{{title}}</h1>
          <div class="bar-graph-bars">
            <div class="bar-graph-bar"
                 ng-mouseover="select(value)"
                 ng-repeat="value in values"
                 ng-style="{ height: value.height }">
                 {{value.childData.value}}
            </div>
          </div>
          <div class="bar-graph-descriptions"
               ng-transclude>
          </div>
        </div>
      `,
      transclude: true
    }
  }
}());
