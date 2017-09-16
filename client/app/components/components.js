import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Album from './album/album';
import Video from './video/video';
import Single from './single/single';

let componentModule = angular.module('app.components', [
    Home,
    About,
    Album,
    Video,
    Single
])

.name;

export default componentModule;
