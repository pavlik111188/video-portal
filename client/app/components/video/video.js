import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import videoComponent from './video.component';

let videoModule = angular.module('video', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('video', {
      url: '/video',
      component: 'video'
    });
})

.component('video', videoComponent)
  
.name;

export default videoModule;
