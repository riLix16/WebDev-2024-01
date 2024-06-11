const filmes = [
    { titulo: "O Poderoso Chefão", rating: 9 },
    { titulo: "O Senhor dos Anéis: O Retorno do Rei", rating: 8 },
    { titulo: "Pulp Fiction", rating: 9 },
    { titulo: "A Origem", rating: 8 },
    { titulo: "Matrix", rating: 8 },
    { titulo: "Forrest Gump: O Contador de Histórias", rating: 8 },
    { titulo: "Sonic 2: O Filme", rating: 9 },
    { titulo: "Clube da Luta", rating: 8 },
    { titulo: "Os Bons Companheiros", rating: 9 },
    { titulo: "Sonic: O Filme", rating: 8 }
];

function gerarEstrelas(filme, indiceFilme) {
    let estrelasHtml = '';
    for (let i = 1; i <= 10; i++) {
        if (i <= filme.rating) {
            estrelasHtml += `<span class="estrela" data-indice-filme="${indiceFilme}" data-rating="${i}"><i class="fas fa-star"></i></span>`;
        } else {
            estrelasHtml += `<span class="estrela vazia" data-indice-filme="${indiceFilme}" data-rating="${i}"><i class="far fa-star"></i></span>`;
        }
    }
    return estrelasHtml;
}

function atualizarRating(event) {
    const indiceFilme = event.target.closest('.estrela').getAttribute('data-indice-filme');
    const novoRating = event.target.closest('.estrela').getAttribute('data-rating');
    filmes[indiceFilme].rating = parseInt(novoRating);
    renderCatalogo();
}

function renderCatalogo() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = '';
    filmes.forEach((filme, indice) => {
        const filmeDiv = document.createElement('div');
        filmeDiv.classList.add('col-12', 'filme');
        filmeDiv.innerHTML = `
            <div class="titulo">${filme.titulo}</div>
            <div class="estrelas">${gerarEstrelas(filme, indice)}</div>
        `;
        catalogo.appendChild(filmeDiv);
    });
    const estrelas = document.querySelectorAll('.estrela');
    estrelas.forEach(estrela => {
        estrela.addEventListener('click', atualizarRating);
    });
}

renderCatalogo();