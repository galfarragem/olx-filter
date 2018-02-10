// jquery selector hiding table rows containing provided words

var stringsToHideArray = ["Carros", "Bebé", "Moda", "Roupa", "Filmes", "Calçado » Mulher"];

var preparedStrings = stringsToHideArray.map(function(word){
	return "tr:contains(" + word + ")"
});

var gluedStrings = preparedStrings.join();

$(gluedStrings).css( "background-color", "green");