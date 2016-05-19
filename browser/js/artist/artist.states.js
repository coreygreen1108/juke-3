juke.config(function($stateProvider){
	$stateProvider.state('allArtists', {
		url: '/artists',
		templateUrl: 'allArtists.html',
		resolve: {
			artists: function(ArtistFactory){
			return ArtistFactory.fetchAll();
			}
		},
		controller: 'ArtistsCtrl'
	})

	$stateProvider.state('anArtist', {
		url: '/artists/:id',
		templateUrl: 'anArtist.html',
		resolve: {
			artist: function(ArtistFactory, $stateParams){
				return ArtistFactory.fetchById($stateParams.id);
			}
		},
		controller: 'ArtistCtrl'
	})

	$stateProvider.state('anArtist.albums', {
		url: '/albums',
		templateUrl: 'artistAlbums.html',
		controller: 'ArtistCtrl'
	})

	$stateProvider.state('anArtist.songs', {
		url: '/songs',
		templateUrl: 'artistSongs.html',
		controller: 'ArtistCtrl'
	})

})