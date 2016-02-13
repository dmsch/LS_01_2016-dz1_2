$(document).ready(function() {
	// console.log('main.js loaded');
	if (!Modernizr.input.placeholder) {
		$('input, textarea').placeholder();
	};

	var bPopup, bPopupOk;

	$(".add-new-project-link").on("click", function (event) {
		event.preventDefault();

		bPopup = $(".add-project-popup").bPopup();
	});

	$(".popup-close-button").on("click", function (event) {
		bPopup.close();
	});

	$(".button-send").on("click", function (event) {
		event.preventDefault();
		bPopupOk = $(".popup-ok").bPopup({
			onClose: function () {bPopup.close();}
		});
	})

	$(".popup-close-button.popupOk").on("click", function (event) {
		bPopupOk.close();
		bPopup.close();
	});


	$("#upload").on("change", function () {
		var myStr = $("#upload").val();

		if (myStr.lastIndexOf('\\')){
	        var i = myStr.lastIndexOf('\\')+1;
	    }
	    else{
	        var i = myStr.lastIndexOf('/')+1;
	    };						

		$("#fileformlabel").val(myStr.slice(i));
	});

});