document.addEventListener("DOMContentLoaded", function() {
    // Função para buscar as imagens
    function fetchCatImages() {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(response => response.json())
        .then(data => {
            // Exibir as imagens na página
            const catImagesDiv = document.getElementById("catImages");
            data.forEach(cat => {
                const img = document.createElement("img");
                img.src = cat.url;
                img.style.maxWidth = "300px"; // ajuste opcional de largura máxima
                img.style.margin = "10px"; // ajuste opcional de margem
                catImagesDiv.appendChild(img);
            });
        })
        .catch(error => console.error("Erro ao buscar gatos:", error));
    }

    // Chamada da função para buscar as imagens ao carregar a página
    fetchCatImages();
});