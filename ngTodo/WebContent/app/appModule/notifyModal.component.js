// notifyModal.component.js
angular.module('appModule')
.component('notifyModal', {
  templateUrl : './app/appModule/notifyModal.component.html',
  controller: function () {
    var vm = this;

    vm.$onInit = function () {
      vm.items = vm.resolve.items;
      vm.selected = {
        item: vm.items[0]
      };
    };

    vm.ok = function () {
      // pass this method the an object with a $value property you want
      // to pass back to the launcher
      vm.close(
        {$value: vm.selected.item}
      );
    };

    vm.cancel = function () {
      // pass this method the an object with a $value property you want
      // to pass back to the launcher
      vm.dismiss(
        {$value: 'dismissed'}
      );
    };
  },
  controllerAs : 'vm',
  bindings: {
    resolve: '<',
    // these methods close the modal and can pass some data back to
    // whoever launched it
    close: '&', // a success, fires 'then'
    dismiss: '&' // a failure, fires 'catch'
  }
});