$(document).ready(function() {
	// console.log('main.js loaded');
	if (!Modernizr.input.placeholder) {
		$('input, textarea').placeholder();
	};

	var bPopup;

	$(".button-send").on("click", function(event) {
		event.preventDefault();

		bPopup = $(".element-to-popup").bPopup();
	});

	$(".popup-close-button").on("click", function (event) {
		bPopup.close();
	});
});