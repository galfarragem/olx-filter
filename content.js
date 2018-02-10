// jquery selector hiding table rows containing provided words

var stringsToHide = ["Carros", "Bebé", "Moda", "Roupa", "Filmes", "Calçado", "Animais", "Desportos de Combate", 
"Camiões", "Aves", "Brinquedos", "CDS", "Huawei", "Android", "Guitarra", "Nokia", "Prato", "Copo", "Reparações e Mudanças",
"relógio", "Relógio", "Fotocopiadoras", "Loiça", "loiça", "Jarro", "cristal", "Consolas", "Saúde - Beleza"];

var preparedString = stringsToHide.map(word => "tr:contains(" + word + ")").join();

$(preparedString).toggle();