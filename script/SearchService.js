myApp.service('SearchService', function() {

	var images = [];
  var urlRecherche = "https://www.reddit.com/r/pics/search.json?";

	this.getImages = function() {
    $http.get(url)
        .success(function(response) {
          images = response.data.children;
          return images;
        });
	}

});
