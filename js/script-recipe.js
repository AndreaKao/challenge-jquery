/*PARTE1*/
$(document).ready(function(){
		/* Ocultando icono menú */
	$(".js-menu").hide();
/*PARTE 7*/
/* Mensaje desde la consola */
	console.log('Bienvenidas');

	$(".js-show-make").click(function(){
	$(".btns-group").addClass(".make");
	});

	$(".js-show-recipe").click(function(){
	$(".btns-group").removeClass(".make");
	});
});

	/*PARTE 8*/
/*
	$(".js-show-make").click(function(){
		$(".btns-group").addClass(".make");
	});

	$(".js-show-recipe").click(function(){
		$(".btns-group").removeClass(".make");
	});

*/

