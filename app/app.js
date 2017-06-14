import angular from 'angular'
import 'angular-ui-router'

import './config.js'
import './view-one/view-one.js'
import './view-two/view-two.js'

angular.module('app', [
  'ui.router',
  'app.config',
  'app.view-one',
  'app.view-two',
])
