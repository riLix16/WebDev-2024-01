// Funções para abrir e fechar a barra lateral
function openNav() {
    document.getElementById("sideBar").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideBar").style.width = "0";
}

// Dados dos produtos com imagens correspondentes
const products = [
    { name: "Processador Intel Core i9", category: "Intel", image: "https://via.placeholder.com/100", price: "R$ 3.000,00" },
    { name: "Placa de vídeo NVIDIA GeForce RTX 3080", category: "NVIDIA", image: "https://via.placeholder.com/100", price: "R$ 6.500,00" },
    { name: "Memória RAM Corsair Vengeance RGB Pro", category: "Corsair", image: "https://via.placeholder.com/100", price: "R$ 800,00" },
    { name: "Placa-mãe ASUS ROG Strix Z590-E", category: "ASUS", image: "https://via.placeholder.com/100", price: "R$ 2.500,00" },
    { name: "SSD Samsung 970 EVO Plus", category: "Samsung", image: "https://via.placeholder.com/100", price: "R$ 700,00" },
    { name: "AMD Ryzen 9 5900X", category: "AMD", image: "https://via.placeholder.com/100", price: "R$ 2.900,00" },
    { name: "Placa de vídeo AMD Radeon RX 6900 XT", category: "AMD", image: "https://via.placeholder.com/100", price: "R$ 7.200,00" },
    { name: "Memória RAM Kingston HyperX Fury", category: "Kingston", image: "https://via.placeholder.com/100", price: "R$ 750,00" },
    { name: "Placa-mãe MSI MPG B550 Gaming Plus", category: "MSI", image: "https://via.placeholder.com/100", price: "R$ 1.000,00" },
    { name: "SSD WD Blue SN550", category: "Western Digital", image: "https://via.placeholder.com/100", price: "R$ 400,00" },
    { name: "Intel Core i7-11700K", category: "Intel", image: "https://via.placeholder.com/100", price: "R$ 2.500,00" },
    { name: "Placa de vídeo NVIDIA GeForce RTX 3090", category: "NVIDIA", image: "https://via.placeholder.com/100", price: "R$ 10.000,00" },
    { name: "Memória RAM G.Skill Trident Z RGB", category: "G.Skill", image: "https://via.placeholder.com/100", price: "R$ 850,00" },
    { name: "Placa-mãe Gigabyte Aorus Elite AX", category: "Gigabyte", image: "https://via.placeholder.com/100", price: "R$ 1.200,00" },
    { name: "SSD Crucial MX500", category: "Crucial", image: "https://via.placeholder.com/100", price: "R$ 500,00" }
];

// Função para gerar o filtro de marcas
function generateFilter() {
    const filterElement = document.getElementById("filter");
    const uniqueCategories = [...new Set(products.map(product => product.category))];

    uniqueCategories.forEach(category => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "category";
        checkbox.value = category;
        checkbox.checked = true; // Por padrão, todas as marcas estarão habilitadas
        checkbox.addEventListener("change", updateProductsList);

        const label = document.createElement("label");
        label.textContent = category;

        filterElement.appendChild(checkbox);
        filterElement.appendChild(label);
        filterElement.appendChild(document.createElement("br"));
    });
}

// Função para atualizar a lista de produtos com base nos filtros
function updateProductsList() {
    const checkedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);

    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; // Limpar a lista atual

    let visibleProductsCount = 0;

    products.forEach(product => {
        if (checkedCategories.includes(product.category)) {
            visibleProductsCount++;
            
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            
            // Adicionando a imagem do produto
            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productElement.appendChild(productImage);
            
            // Adicionando o nome do produto
            const productName = document.createElement("div");
            productName.textContent = product.name;
            productElement.appendChild(productName);

            // Adicionando o preço do produto
            const productPrice = document.createElement("div");
            productPrice.classList.add("product-price");
            productPrice.textContent = product.price;
            productElement.appendChild(productPrice);

            productsList.appendChild(productElement);
        }
    });

    // Atualizando a contagem de produtos visíveis
    const productCount = document.getElementById("productCount");
    productCount.textContent = `Produtos disponíveis: ${visibleProductsCount}`;
}

// Função para mostrar ou esconder o filtro
function toggleFilter() {
    const filterElement = document.getElementById("filter");
    if (filterElement.style.display === "none") {
        filterElement.style.display = "block";
    } else {
        filterElement.style.display = "none";
    }
}

// Função para ordenar os produtos de A-Z
function sortProductsAZ() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    updateProductsList();
}

// Função para ordenar os produtos de Z-A
function sortProductsZA() {
    products.sort((a, b) => b.name.localeCompare(a.name));
    updateProductsList();
}

// Chamar a função para gerar o filtro e a lista quando a página carregar
window.onload = function() {
    generateFilter();
    updateProductsList();
};