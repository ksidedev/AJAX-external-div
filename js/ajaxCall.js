function ajax() {
	$.ajax({
    	url: "load.html",
    	success: function(response){
           loadExternalFile();
    	},
	  	error: function(response) {
	   		alert('Not successful');
	  	}
	});
}

function loadExternalFile() {
	$("#div1").load('load.html #divcontent');
}

function addEventListeners() {
    $('button').on('click', ajax);
};

function initialise() {
	addEventListeners();
};

$(document).ready(initialise);