// jquery selector hiding table rows containing provided words

var stringsToHideArray = ["Carros", "Bebé", "Moda", "Roupa", "Filmes", "Calçado", "Animais", "Desportos de Combate", "Camiões"];

var preparedString = stringsToHideArray.map(word => "tr:contains(" + word + ")").join();

$(preparedString).toggle();