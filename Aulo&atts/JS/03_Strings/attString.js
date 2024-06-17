let Frutas = " Maça e Uva-e-Banana-e-Morango-e-Manga ";

console.log(Frutas.length);

console.log(Frutas.substring(0,3))

console.log(Frutas.trim())

let OutrasFrutas = Frutas.replace ('Maça e Uva-e-Banana-e-Morango-e-Manga', 'Kaki, Melancia, Laranja, Tangerina e Limão.');

console.log(OutrasFrutas.trim())

console.log(OutrasFrutas.toLowerCase())

let frase = 'O meu nome é Rian e eu gosto bastante de' + Frutas +'mas também como' + OutrasFrutas;

console.log(frase)