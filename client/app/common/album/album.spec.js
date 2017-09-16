import AlbumModule from './album'
import AlbumController from './album.controller';
import AlbumComponent from './album.component';
import AlbumTemplate from './album.html';

describe('Album', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AlbumModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AlbumController();
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
      expect(AlbumTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AlbumComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AlbumTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AlbumController);
      });
  });
});
