myApp.config(function ($stateProvider, $urlRouterprovider) {

	$urlRouterprovider.otherwise('/new');

	$stateProvider
		.state('new', {
			url : '/new',
			template : getTemplate(),
			controller : function($scope, image) {
				$scope.image = image;
			},
			resolve : {
				image : function(Restangular) {
					Restangular.setBaseUrl('http://www.reddit.com/r/pics/');
					Restangular.setRequestSuffix('.json?jsonp=?&show=all&limit=300');
					return Restangular.one('new/').get();
				}
			}
		});

	function getTemplate() {
		return '<div ng-repeat="image in images | nsfw:this " class="infos-image" onmouseout="cacherLegende(\'{{image.data.id}}\');" onmouseover="afficherLegende(\'' + image.id + '\');" onclick="afficherDetailImage(\'' + image.url + '\')">
          			<div class="photo" id="photo_{{image.data.id}}">
          				<img src="{{image.data.url}}" alt=""/>
          			</div>
          			<div class="legende" id="legende_{{image.data.id}}">
          				<p>{{image.data.title}}</p>
          			</div>
            	</div>';
	}
});