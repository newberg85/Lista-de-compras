let listaItens = [];

function adicionar_item() {
    let inputProduto = document.getElementById('inputProduto').value;
    let inputQuantidade = document.getElementById('inputQuantidade').value;
  
    if (inputProduto.trim() === '' || inputQuantidade.trim() === '') {
      alert('Informe o produto e a quantidade de produtos');
      return;
    }
  
    let item = {
      produto: inputProduto,
      quantidade: inputQuantidade
    };
  
    listaItens.push(item);
    Listar_itens();
    limparInputs();
  }

function remover_item(index) {
  listaItens.splice(index, 1);
  Listar_itens();
}

function Listar_itens() {
  let listaItensUl = document.getElementById('listaItens');
  listaItensUl.innerHTML = '';

  for (let i = 0; i < listaItens.length; i++) {
    let item = listaItens[i];

    let liProduto = document.createElement('li');
    liProduto.textContent = item.produto;
    liProduto.id = 'produto';

    let liQuantidade = document.createElement('li');
    liQuantidade.textContent = item.quantidade;
    liQuantidade.id = 'quantidade';

    let excluirButton = document.createElement('button');
    excluirButton.textContent = 'Excluir';
    excluirButton.id ="btn-delete";
    excluirButton.onclick = function() {
      remover_item(i);
    };

    let itemDiv = document.createElement('div');
    itemDiv.id = "lis";
    itemDiv.appendChild(liProduto);
    itemDiv.appendChild(liQuantidade);
    itemDiv.appendChild(excluirButton);

    listaItensUl.appendChild(itemDiv);
  }
}

function limparInputs() {
  document.getElementById('inputProduto').value = '';
  document.getElementById('inputQuantidade').value = '';
}
