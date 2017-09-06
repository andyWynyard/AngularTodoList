// myContent.component.js
angular.module('appModule')
.component('myContent', {
  templateUrl : './app/appModule/myContent.component.html',
  controller : function($uibModal) {
    var vm = this;

    // the data we are going to pass to the modal through 'resolve'
    vm.items = ['apple', 'banana', 'coconut'];

    vm.openModal = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        // which modal to launch
        component: 'notifyModal',
        // what data to send the modal through the resolve property
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });

      modalInstance
        .result // when the user dismisses the modal
        // if the 'close' was fired
        .then(function (selectedItem) {
          vm.selected = selectedItem;
        })
        // if the 'dismiss' was fired
        .catch(console.error);
    }
  },
  controllerAs : 'vm'
})