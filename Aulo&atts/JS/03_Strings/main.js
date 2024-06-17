// Substring e spit
console.clear();
const str = 'Mozilla';
console.log(str.substring(1, 3));
console.log(str.substring(2));
const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"
const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]

// Substituir string
console.clear();
let mensagem = 'Venha para a Microsoft!';
console.log(mensagem);
let novaMensagem = mensagem.replace('Microsoft', 'IOS');
console.log(novaMensagem);

//Remover Espaços
console.clear();
let text = ' Olá Alunos do IOS! ';
console.log(text.trim());

// Métodos de busca en strings
console.clear();
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS')); // Returns 16
console.log(frase.lastIndexOf('IOS')); // Returns 24
console.log(frase.search('IOS')); // Returns 16

console.log(frase.startsWith('S')); // Verdadeiro - retorna true
console.log(frase.startsWith('Sou')); // Verdadeiro - retorna true
console.log(frase.startsWith('a')); // Falso - retorna false
console.log(frase.endsWith('!')); // Verdadeiro - retorna true
console.log(frase.endsWith('bom!')); // Verdadeiro - retorna true
console.log(frase.endsWith('x')); // Falso - retorna false