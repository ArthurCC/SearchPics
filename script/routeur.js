myApp.config(function ($stateProvider, $urlRouterprovider) {

	$urlRouterprovider.otherwise('/new');

	$stateProvider
		.state('new', {
			url : '/new',
			template : getTemplate(),
			controller : function($scope, image) {
				$scope.image = image;
			},
		})
});