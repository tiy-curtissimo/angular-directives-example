(function () {
  angular
    .module('app')
    .component('singleInputForm', {
      template: `
        <form class="pure-form">
          <input type="number"
                 autofocus
                 class="pure-form-input"
                 style="display: inline-block">
        </form>
      `
    });
})();
