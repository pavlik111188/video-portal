import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import videoComponent from './video.component';

let videoModule = angular.module('video', [
  uiRouter
])

.component('video', videoComponent)
  
.name;

export default videoModule;
