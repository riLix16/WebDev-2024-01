document.addEventListener('DOMContentLoaded', function() {
    const adicionarBtns = document.querySelectorAll('.adicionar-btn');
    const carrinhoLista = document.getElementById('carrinho-lista');
    const totalValor = document.getElementById('total-valor');
    const limparCarrinhoBtn = document.getElementById('limpar-carrinho');
    const carrinhoBtn = document.getElementById('carrinho-btn');

    adicionarBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const nome = btn.getAttribute('data-nome');
            const preco = parseFloat(btn.getAttribute('data-preco'));

            adicionarProdutoAoCarrinho(nome, preco);
        });
    });

    limparCarrinhoBtn.addEventListener('click', function() {
        limparCarrinho();
    });

    carrinhoBtn.addEventListener('click', function() {
        document.getElementById('carrinho').classList.toggle('mostrar');
    });

    function adicionarProdutoAoCarrinho(nome, preco) {
        const itemCarrinho = document.createElement('li');
        itemCarrinho.classList.add('item-carrinho');
        itemCarrinho.innerHTML = `
            ${nome} - R$ ${preco.toFixed(2)}
            <button class="remover-item-btn">Remover</button>
        `;
        carrinhoLista.appendChild(itemCarrinho);

        const removerBtn = itemCarrinho.querySelector('.remover-item-btn');
        removerBtn.addEventListener('click', function() {
            itemCarrinho.remove();
            calcularTotal();
        });

        calcularTotal();
    }

    function limparCarrinho() {
        carrinhoLista.innerHTML = '';
        totalValor.textContent = '0.00';
    }

    function calcularTotal() {
        let total = 0;
        const itensCarrinho = document.querySelectorAll('.item-carrinho');

        itensCarrinho.forEach(item => {
            const preco = parseFloat(item.textContent.split('R$')[1]);
            total += preco;
        });

        totalValor.textContent = total.toFixed(2);
    }
});
