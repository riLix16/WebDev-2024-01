let form = document.getElementById("Produtos")

form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById("nomeProduto").value;
    let li = document.createElement("li")
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem))
}













// Definindo uma variável para armazenar os itens
let itens = [];

// Função para adicionar um item
function adicionarItem(nome, quantidade, preco) {
    itens.push({ nome: nome, quantidade: quantidade, preco: preco });
}

// Função para calcular o total dos itens
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i].quantidade * itens[i].preco;
    }
    return total;
}

