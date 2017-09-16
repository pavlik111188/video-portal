import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import albumComponent from './album.component';

let albumModule = angular.module('album', [
  uiRouter
])

.component('album', albumComponent)
  
.name;

export default albumModule;
