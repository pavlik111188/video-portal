import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Album from './album/album';
import Video from './video/video';

let commonModule = angular.module('app.common', [
    Navbar,
    Hero,
    User,
    Album,
    Video
])
  
.name;

export default commonModule;
