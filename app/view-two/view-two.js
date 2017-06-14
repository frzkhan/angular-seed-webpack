const template = require('./view-two.html')

angular.module('app.view-two', ['ui.router'])

.config($stateProvider => {
  $stateProvider
    .state('view-two', {
      controller: 'ViewTwoController',
      controllerAs: 'ViewTwoController',
      template,
      url: '/view-two',
    })
})
.controller('ViewTwoController', function ViewTwoController() {
  const vm = this

  vm.test = 'This is view 2'
})
