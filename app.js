const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const servicoProduto = require("./src/service/ProdutoService");

app.get("/", (req, res) => {
  res.send("<h1>API em funcionamento!</h1>");
});

app.get("/produtos", (req, res) => {
  let listaDeProdutos = servicoProduto.obterTodos();
  res.json(listaDeProdutos);
});

app.get("/produtos/:id", (req, res) => {
  let listaDeProdutos = servicoProduto.obterPorId(req.params.id);
  res.json(listaDeProdutos);
});

app.post("/produtos", (req, res) => {
  let produto = servicoProduto.cadastrar(req.body);
  res.json(produto);
});

app.put("/produtos/:id", (req, res) => {
  let id = req.params.id;
  let produto = req.body;

  produto.id = id;

  servicoProduto.atualizar(produto);

  res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
  let id = req.params.id;
  servicoProduto.deletar(id);
  res.json({ mensagem: `Produto com id ${id} foi deletado com sucesso!` });
});

app.listen(3000);
