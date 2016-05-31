var myApp = angular.module('search_pics',[]);

myApp.filter('nsfw', function() {
  return function(list) {
      if(!list){return};
      var result = [];
      for(i = 0; i < list.length; i++) {
          if(list[i].data.url.indexOf("i.imgur") > -1 && list[i].data.url.indexOf("gif") == -1  && list[i].data.thumbnail != 'nsfw'){
              result.push(list[i]);
          }
      }
      stack = result.length;
      return result;
    }
});

myApp.controller('SearchController', ['$scope', '$http', function($scope, $http) {

  console.log("Controler Search");

  $http.get("https://www.reddit.com/r/pics/new.json?sort=new&limit=100")
      .success(function(response) {
          $scope.images = response.data.children;
          console.log($scope.images);
      });


  $scope.urlRecherche = "https://www.reddit.com/r/pics/search.json?";
  $scope.showDetailPicture = false;

  $scope.preparerRecherche = function(){
      var query = 'q=' + ($scope.key_search).replace(/ /g, '+') + '&restrict_sr=on';
      $scope.preparerChargementImages($scope.urlRecherche + query);
  }

  $scope.preparerChargementImages = function(url) {
  	fermerDetailImage();

  	$('.chargement').addClass('afficher');
  	$('#les_images').html('');

  	chargerImages(url);

  	setTimeout(function() {
  		$('div.afficher').removeClass('afficher');
  	}, 1500);
  }

  $scope.getIdPicture = function(id) {
    $scope.idPicture = id;
    console.log($scope.idPicture);
  }

  $scope.chargerImages = function(url) {
  	$.getJSON(url, function(data) {
  		data.data.children.forEach((item) => {
  			isValidImageUrl(item.data.url, function(url, isValid) {
  				if(isValid) {
  					$('#les_images').append(getHtmlImage(item.data));
  				}
  			});
  		});
  	});
  }

}]);
