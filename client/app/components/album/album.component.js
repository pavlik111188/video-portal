import template from './album.html';
import controller from './album.controller';
import './album.scss';

let albumComponent = {
  bindings: {
      album: '<'
  },
  template,
  controller
};

export default albumComponent;
