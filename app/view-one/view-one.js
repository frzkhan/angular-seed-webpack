const template = require('./view-one.html')

angular.module('app.view-one', ['ui.router'])

.config($stateProvider => {
  $stateProvider
    .state('view-one', {
      controller: 'ViewOneController',
      controllerAs: 'ViewOneController',
      template,
      url: '/view-one',
    })
})
.controller('ViewOneController', function ViewOneController() {
  const vm = this

  vm.test = 'This is view 1'
})
