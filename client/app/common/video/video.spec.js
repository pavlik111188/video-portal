import VideoModule from './video'
import VideoController from './video.controller';
import VideoComponent from './video.component';
import VideoTemplate from './video.html';

describe('Video', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideoController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(VideoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VideoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(VideoTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VideoController);
      });
  });
});
