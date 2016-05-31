myApp.controller('SearchController', ['$scope', '$http', 'SearchService', function($scope, $http) {

  console.log("Search Controller");
  $scope.urlRecherche = "https://www.reddit.com/r/pics/search.json?";
  $scope.showDetailPicture = false;

  $scope.preparerRecherche = function(){
      var query = 'q=' + ($scope.key_search).replace(/ /g, '+') + '&restrict_sr=on';
      $scope.preparerChargementImages($scope.urlRecherche + query);
  }

  $scope.preparerChargementImages = function(url) {
  	//fermerDetailImage();

  	$('.chargement').addClass('afficher');
  	//$('#les_images').html('');

  	$scope.chargerImages(url);

  	setTimeout(function() {
  		$('div.afficher').removeClass('afficher');
  	}, 1500);
  }

  $scope.getIdPicture = function(id) {
    $scope.idPicture = id;
    console.log($scope.idPicture);
  }

  $scope.chargerImages = function(url) {
    $http.get(url)
        .success(function(response) {
          $scope.images = response.data.children;
        });
  }

  $scope.afficherDetailImage = function(urlImage) {
    console.log("HEY");
    $scope.urlImage = urlImage;
    $scope.showDetailPicture = true;
  }

}]);
