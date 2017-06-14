angular.module('app.config', [])

.config(($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false })
  $urlRouterProvider.otherwise('/')
})
