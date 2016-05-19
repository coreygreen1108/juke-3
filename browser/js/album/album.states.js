juke.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.when('/', '/albums');

	$stateProvider.state('allAlbums', {
		url: '/albums',
		templateUrl: 'allAlbums.html',
		resolve: {
			albums: function(AlbumFactory){
				return AlbumFactory.fetchAll()
				.then(function(allAlbums){
					return Promise.all(allAlbums.map(function(album){
						return AlbumFactory.fetchById(album.id);
					}))
				});
			}
		},
		controller: 'AlbumsCtrl'
	})

	$stateProvider.state('anAlbum', {
		url: '/albums/:id',
		templateUrl: 'anAlbum.html',
		resolve: {
			album: function(AlbumFactory, $stateParams){
				return AlbumFactory.fetchById($stateParams.id)
			}
		},
		controller: 'AlbumCtrl'
	})


})

// juke.config(function($stateProvider){

// })

