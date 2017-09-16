import angular from 'angular';
import ngResource from '../../../../bower_components/angular-resource';
import uiRouter from '@uirouter/angularjs';
import albumComponent from './album.component';
import AlbumService from '../../services/album.service';

let albumModule = angular.module('album', [
  uiRouter, ngResource
])
    .service('AlbumService', AlbumService)

    .config(($stateProvider, $urlRouterProvider) => {
      "ngInject";
      $stateProvider
        .state('album', {
          url: '/album',
          component: 'album'
        });
        $urlRouterProvider.otherwise('/');
    })

    .component('album', albumComponent)

    .name;

export default albumModule;
