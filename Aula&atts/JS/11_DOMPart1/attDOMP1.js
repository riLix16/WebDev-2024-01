document.title = 'AttDom';


window.alert("Bem vindo a pagina")
console.log(window)

let section = document.createElement('section');
let article = document.createElement('article');
let h1 = document.createElement('h1')
h1.textContent = 'Título'
let p = document.createElement('p')
p.textContent = 'Parágrafo'

let h12 = document.createElement('h1')
h12.textContent = 'Título'
let p2 = document.createElement('p')
p2.textContent = 'Parágrafo'

section.appendChild(h1);
section.appendChild(p);

document.body.appendChild(section);

article.appendChild(h12);
article.appendChild(p2);

document.body.appendChild(article);

