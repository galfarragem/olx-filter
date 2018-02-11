/* 
jquery selector hiding table rows containing provided words

Relevant help:
https://stackoverflow.com/questions/19405077/hide-tr-if-its-td-dont-contains-text
https://stackoverflow.com/questions/2416803/jquery-contains-selector-to-search-for-multiple-strings/2417076#2417076
https://stackoverflow.com/questions/5207823/select-any-tr-where-a-tds-text-contains-foo
*/

var stringsToHide = ["Carros", "Bebé", "Moda", "Roupa", "Filmes", "Calçado", "Animais", "Desportos de Combate", 
"Camiões", "Aves", "Brinquedos", "CDS", "Huawei", "Android", "Guitarra", "Nokia", "Prato", "prato", "Copo", "Reparações e Mudanças",
"relógio", "Relógio", "Fotocopiadoras", "Loiça", "loiça", "Jarro", "cristal", "Consolas", "Saúde e Beleza",
"Equipamentos e Ferramentas » Equipamento Industrial", "DVD", "Eventos", "boneca", "bonecas", "Boneca", "Escolares",
"Livros", "barbear", "limpeza", "Xiaomi", "unhas", "Frigorifico", "Frigorífico","chavena", "Wiko", "Telemóveis e Tablets » Acessórios",
"Alcatel", "Motorola", "TV, Som e Fotografia » Fotografia", "Domésticos » Acompanhamento de Idosos", "Computadores - Informática » Componentes",
"Futsal e Futebol", "Educação", "Emprego", "GPS", "Sapatilhas", "Motociclos", "Aquecedor", "Alfaias", "Golfe", "TV, Som e Fotografia » Som", "Bilhar",
"Perfumes", "Cromos", "Saúde - Beleza", "Baterias", "Lenovo", "Consumíveis Impressora", "Atletismo", "Isqueiro", "Balança", "» Redes", "Tractores",
"Calculadora", "Cães", "criança", "Vaso", "Termoacumulador", "Informática » Acessórios", "Calendário", "Aspirador", "Peixes", "» Periféricos",
"Discos Rígidos", "» Portáteis", "Patins, Skates e Trotinetes", "Bricolage", "Ski e Snowboard", "grelhador", "Surf e Bodyboard", "Aulas", "Quadro", "TV"];

var preparedString = stringsToHide.map(word => "tr:contains(" + word + ")").join();

// .toggle() or .css("background","#003333") would be also possible.

$(preparedString).hide();