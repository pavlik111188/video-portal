
class SingleController {
    constructor ($scope, AlbumService, $stateParams, localStorageService) {
        'ngInject';
        let self = this;
        self.albumService = AlbumService;
        self.stateParams = $stateParams;
        self.localStorageService = localStorageService;
        self.albumsS = JSON.parse(self.localStorageService.get('albumsS_' + self.stateParams.id)) || [];
        console.log("1", self.albumsS);
        if(self.albumsS.length < 1) {
            self.localStorageService.set('albumsS_' + self.stateParams.id, JSON.stringify([]));
            self.albumsS = JSON.parse(self.localStorageService.get('albumsS_' + self.stateParams.id)) || [];
        }
        $scope.classPopup = 'modal fade';
        $scope.title = '';
        $scope.url = '';
        $scope.showPopup = function () {
            $scope.classPopup = 'modal fade in';
        };
        $scope.closePopup = function () {
            $scope.classPopup = 'modal fade';
        };
        $scope.saveVideo = function () {
            console.log("2", self.albumsS);
            if (($scope.title != '') && ($scope.url != '')) {
                self.albumsS.push({'name' : $scope.title, 'url' : $scope.url});
                self.localStorageService.set('albumsS_' + self.stateParams.id, JSON.stringify(self.albumsS));
                $scope.classPopup = 'modal fade';
                $scope.title = '';
                $scope.url = '';
                alert("success");
            }
            else {
                alert("Title or Embed is empty");
            }

        };

    }

    $onInit () {
        let self = this;
        self.videos = [];
        self.name = 'Single';
        self.albums = self.albumService.getAlbums();
        //self.localStorageService.set('albumsS_' + self.stateParams.id, JSON.stringify([{"name" : "Football 35", "url" : "bIMNDeW34KE"}]));
        self.albumsS = JSON.parse(self.localStorageService.get('albumsS_' + self.stateParams.id));
        self.albums.$promise.then(function (response) {
            for (var i = 0; i < response.length; i ++) {
              if (response[i].id == self.stateParams.id) {
                  self.videos.push(response[i].videos);
              }
            }
        });
    }

}

export default SingleController;
