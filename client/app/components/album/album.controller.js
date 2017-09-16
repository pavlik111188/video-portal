class AlbumController {
    constructor ($scope, AlbumService, localStorageService) {
        'ngInject';
        this.albumService = AlbumService;
        this.localStorageService = localStorageService;
        this.albumsS = this.localStorageService.get('albums') || [];
    }

    $onInit () {
        let self = this;
        self.videos = [];
        self.name = 'Albums';
        self.albums = self.albumService.getAlbums();
        //this.changeName();
    }

}

export default AlbumController;
