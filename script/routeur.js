	angular.module('routeur', ['ui.router', 'restangular'])
		.config(function ($stateProvider, $urlRouterprovider) {

	$urlRouterprovider.otherwise('/new');
	$stateProvider
		.state('new', {
			url : '/new',
			controller : function($scope, getImages) {
				$scopes.images = getImages;
			},
			resolve: {
         getImages : function(Restangular){
           Restangular.setBaseUrl('http://www.reddit.com/r/pics/.json?jsonp=?&show=all&limit=300');
           return Restangular.one('awesome', 'moi').get();
         }
      }
		})
});
