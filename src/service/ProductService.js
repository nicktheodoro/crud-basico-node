const Produto = require("../model/Produto");

let idAtual = 1;

let produtos = [];

function inserir(obj) {
  let produto = new Produto(obj);
  idAtual++;
  produto.id = idAtual;
  produtos.push(produto);

  return produto;
}

function atualizar(produto) {
  let index = produtos.findIndex((p) => p.id == produto.id);

  if (index < 0) {
    return;
  }

  produtos.splice(index, 1, produto);
}

function deletar(id) {
  let index = produtos.findIndex((p) => p.id == id);
  if (index < 0) {
    return;
  }

  produtos.splice(index, 1);
}

function obterTodos() {
  return produtos;
}

function obterPorId() {
  return produtos.findIndex((p) => p.id == id);
}

module.exports = {
  inserir,
  atualizar,
  deletar,
  obterTodos,
  obterPorId
};
