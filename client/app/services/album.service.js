export default class AlbumService {
    constructor ($resource) {
        'ngInject';
        var albumService = $resource(
            'app/components/albums.json',
            {},
            {
                'getAlbums': {
                    method: 'GET',
                    isArray: true
                }
            }
        );
        return albumService;
    }
}