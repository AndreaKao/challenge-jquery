/*PARTE1*/
$(document).ready( function(){

	/* Ocultando icono flecha */
	$(".js-back").hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();

});
/*PARTE2*/
/* Creando función para agregar texto al elemento p*/

function printNews() {

	$("#prueba").append("Nuevas recetas");
}

/*PARTE3*/
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

/*PARTE4*/
/**/

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

function renderRecipe(recipe) {
  /*$('.list-recipes').append('<a class="item-recipe" href="#">' +
  '<span class="attribution">' +
    '<span class="title-recipe"> TITULO DE LA RECETA (ATRIBUTO "title" )' + '</span>' +
    '<span class="metadata-recipe">' +
      '<span class="author-recipe"> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name")' + '</span>' +
      '<span class="bookmarks-recipe">' +
        '<span class="icon-bookmark"></span>' +
      '</span>' +
    '</span>' +
  '</span>' +
  '<img src="URL DE LA IMAGEN" />' +
  '</a>')*/

  $('.list-recipes').append('<a class="item-recipe" href="#">' + 
  	'<span class="attribution">' +
    '<span class="title-recipe"> TITULO DE LA RECETA (ATRIBUTO "title")</span>' +
    '<span class="metadata-recipe">' +
      '<span class="author-recipe"> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name")</span>' +
      '<span class="bookmarks-recipe">' + 
      '<span class="icon-bookmark"></span>' + 
      '</span>' +
    '</span>' +
  '</span>' +
  '<img src="URL DE LA IMAGEN" />' +
	'</a>')

  console.log('Voy a pintar la receta: ', recipe);
}




/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


