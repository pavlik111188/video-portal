import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import singleComponent from './single.component';
import AlbumService from '../../services/album.service';
import videoYoutube from '../../../../bower_components/angular-youtube-mb';

let singleModule = angular.module('single', [
    uiRouter,
    videoYoutube
])

.service('AlbumService', AlbumService)


.config(($stateProvider, $urlRouterProvider) => {


    "ngInject";

    $stateProvider
        .state('single', {
          url: '/single/:id',
          component: 'single',
          resolve: {
              single: (AlbumService, $stateParams) => AlbumService.getAlbums()
          }
        });

    $urlRouterProvider.otherwise('/');

})

.component('single', singleComponent)
  
.name;

export default singleModule;
