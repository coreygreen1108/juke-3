juke.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when('', '/albums');

	$stateProvider.state('allAlbums', {
		url: '/albums',
		templateUrl: 'allAlbums.html',
		controller: 'AlbumsCtrl'
	})

	$stateProvider.state('anAlbum', {
		url: '/albums/:id',
		templateUrl: 'anAlbum.html',
		controller: 'AlbumCtrl'
	})
})

// juke.config(function($stateProvider){

// })

