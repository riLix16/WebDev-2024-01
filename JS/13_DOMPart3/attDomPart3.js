document.getElementById('botao1').addEventListener('click', function() {
    let primeiroParagrafo = document.querySelector('#secao1 p');
    primeiroParagrafo.classList.toggle('highlight');
});

document.getElementById('botao2').addEventListener('click', function() {
    let paragrafos = document.querySelectorAll('#secao2 p');
    paragrafos.forEach(paragrafo => {
        paragrafo.classList.toggle('marked');
    });
});