/*PARTE 1*/
$(document).ready( function(){

	/* Ocultando icono flecha */
	$(".js-back").hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
  renderActivities(activities);
});
/*PARTE 2*/
/* Creando función para agregar texto al elemento p*/

function printNews() {

	$("#prueba").append("Nuevas recetas");
}


/*PARTE 3*/
/*recorriendo data por medio del for y el if y completar la función ​ renderHighlightedRecipes*/

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

function renderHighlightedRecipes(recipesArray) {
	for (var i=0; i<recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true){
				renderRecipe(recipesArray[i])
		}
	}

	console.log('Recipes: ', recipesArray);
}

/*PARTE 4*/
/*Agregando lista de imágenes y su descripción 
desde otro archivo de HTML con append desde jquery*/

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

function renderRecipe(recipe) {
var title = recipe.title;
var name = recipe.source.name;
var image = recipe.name;
  $('.list-recipes').append('<a class="item-recipe" href="#">' + 
  	'<span class="attribution">' +
    '<span class="title-recipe">' + recipe.title + ' </span>' +
    '<span class="metadata-recipe">' +
    '<span class="author-recipe">' + recipe.source.name + ' </span>' +
    '<span class="bookmarks-recipe">' + 
    '<span class="icon-bookmark">' +
    '</span>' + 
    '</span>' +
    '</span>' +
    '</span>' +
    '<img src="img/recipes/640x480/'+ recipe.name +'.jpg"/>' + '</a>');
  console.log('Voy a pintar la receta: ', recipe);
}

/*PARTE 5*/
/*Función que recorre un arreglo en el cual si tiene 
mas de 0 objetos dentro de la carpeta activities.js 
se ocultará un div de html*/

/* Función que se encarga de pintar todas las actividades
*/

function renderActivities(activities) {
  for(var i = 0; i < activities.length; i++) {
     renderActivity(activities[i]);
   }
    if (activities.length > 0) {
      $('.wrapper-message').hide();
      }
	console.log('Activities: ', activities);
}





/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

	
}

