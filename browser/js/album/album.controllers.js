'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, $log, PlayerFactory, AlbumFactory, $stateParams, $window, album) {
  // console.log($stateParams);
  // var id = $stateParams.id; 
  // console.log(id);
  
  $scope.album = album;
  console.log(album);

  // main toggle
  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.sendMail = function(){
    $window.open("mailto:" + "" + '?subject=Awesome Album!&body=Hi! I just wanted to tell you how much I think you would enjoy this album:  ' + window.location, "_self");
  };
});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, $log, $rootScope, PlayerFactory, AlbumFactory, albums) {

  $scope.albums = albums;
  console.log(albums);
  // $scope.showMe = true;

  // $scope.$on('viewSwap', function (event, data) {
  //   $scope.showMe = (data.name === 'allAlbums');
  // });

  // // $scope.viewOneAlbum = function (album) {
  // //   $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album.id });
  // // };

  // AlbumFactory.fetchAll()
  // .then(function (albums) {
  //   $scope.albums = albums;
  // })
  // .catch($log.error); // $log service can be turned on and off; also, pre-bound

});
