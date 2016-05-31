var urlRecherche = 'https://www.reddit.com/r/pics/search.json?';

function preparerChargementImages(url) {
	fermerDetailImage();
	$('.chargement').addClass('afficher');
	$('#les_images').html('');
	chargerImages(url);
	setTimeout(function() {
		$('div.afficher').removeClass('afficher');
	}, 1500);
}

function preparerRecherche() {
	var query = 'q=' + $('#search_bar').val().replace(/ /g, '+') + '&restrict_sr=on';
	preparerChargementImages(urlRecherche + query);
}

function chargerImages(url) {
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

function isValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function () {
        callback(url, false);
    };
    img.onload = function () {
        callback(url, true);
    };
    img.src = url;
}

function afficherLegende(idImage) {
	$('#legende_' + idImage).show();
}

function cacherLegende(idImage) {
	$('#legende_' + idImage).hide();
}

function afficherDetailImage(urlImage) {
	$('#detail_image').html('<img src="' + urlImage + '" alt=""/>');
	$('#panel_detail_image').show();
}

function fermerDetailImage() {
	$('#detail_image').html('');
	$('#panel_detail_image').hide();
}
