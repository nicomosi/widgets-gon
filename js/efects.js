//Numeros-------------------------------

$('.trafic').on('change', function(){
	$('.phones').slideToggle(300);
});

$('.aleatoria').on('change', function(){
	$('.phones').slideUp(300);
});

//--------------------------------------

//Days----------------------------------



$(document).ready(function(){

	verif();

	$('.definir').on('change', function(){
		// $('.fecha')
		var divdias = $(this).parents('div.dias');
		var divfecha = $(divdias).find('div.fecha');
		$(divfecha).slideToggle(300);
	});

	$('.todos').on('change', function(){
		var divdias = $(this).parents('div.dias');
		var divfecha = $(divdias).find('div.fecha');
		$(divfecha).slideUp(300);
	});

});


//----------------------------------------