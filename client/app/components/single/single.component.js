import template from './single.html';
import controller from './single.controller';
import './single.scss';

let singleComponent = {
  bindings: {
    single: '<'
  },
  template,
  controller
};

export default singleComponent;
