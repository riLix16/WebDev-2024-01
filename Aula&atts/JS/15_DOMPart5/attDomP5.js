let items = [];

// Função para atualizar as listas
function updateLists() {
    const itemList = document.getElementById('itemList');
    const totalList = document.getElementById('totalList');

    itemList.innerHTML = '';
    totalList.innerHTML = '';

    let totalGeral = 0;

    items.forEach((item, index) => {
        const totalItem = item.qty * item.value;
        totalGeral += totalItem;

        // Atualizar a primeira lista
        const itemListElement = document.createElement('li');
        itemListElement.className = 'list-group-item d-flex justify-content-between align-items-center';
        itemListElement.innerHTML = `
            ${item.name} - ${item.value.toFixed(2)}
            <div>
                <button class="btn btn-success btn-sm mr-2" onclick="increaseQty(${index})">+</button>
                <button class="btn btn-warning btn-sm mr-2" onclick="decreaseQty(${index})">-</button>
                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">X</button>
            </div>
        `;
        itemList.appendChild(itemListElement);

        // Atualizar a segunda lista
        const totalListElement = document.createElement('li');
        totalListElement.className = 'list-group-item d-flex justify-content-between align-items-center';
        totalListElement.innerHTML = `${item.qty} ${item.name} - ${(item.qty * item.value).toFixed(2)}`;
        totalList.appendChild(totalListElement);
    });

    // Adicionar o total geral à segunda lista
    const totalGeralElement = document.createElement('li');
    totalGeralElement.className = 'list-group-item d-flex justify-content-between align-items-center font-weight-bold';
    totalGeralElement.innerHTML = `Total Geral - ${totalGeral.toFixed(2)}`;
    totalList.appendChild(totalGeralElement);
}

// Função para adicionar um item
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('itemName').value;
    const qty = parseInt(document.getElementById('itemQty').value);
    const value = parseFloat(document.getElementById('itemValue').value);

    items.push({ name, qty, value });

    document.getElementById('itemName').value = '';
    document.getElementById('itemQty').value = '';
    document.getElementById('itemValue').value = '';

    updateLists();
});

// Função para aumentar a quantidade de um item
function increaseQty(index) {
    items[index].qty += 1;
    updateLists();
}

// Função para diminuir a quantidade de um item
function decreaseQty(index) {
    if (items[index].qty > 1) {
        items[index].qty -= 1;
        updateLists();
    }
}

// Função para remover um item
function removeItem(index) {
    items.splice(index, 1);
    updateLists();
}