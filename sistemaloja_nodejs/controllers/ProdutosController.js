import express, { Router } from "express";
const router = express.Router();
// Importando o model de Produto
import Produto from "../models/Produto.js";
import { where } from "sequelize";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

// ROTA DE CADASTRO DE PRODUTOS
router.post("/produtos/new", (req, res) => {
  // RECEBENDO OS DADOS DO FORMULÁRIO E GRAVANDO NAS VARIÁVEIS
  const produto = req.body.produto;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    produto: produto,
    preco: preco,
    categoria: categoria,
  }).then(() => {
    res.redirect("/produtos");
  });
});

// ROTA DE EXCLUSÃO DE PRODUTO
// ESSA ROTA POSSUI UM PARÂMETRO ID
router.get("/produtos/delete/:id", (req, res) => {
  // COLETAR O ID QUE VEIO NA URL
  const id = req.params.id;
  // MÉTODO PARA EXCLUIR
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE PRODUTO
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produto) => {
      res.render("produtoEdit", {
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE ALTERAÇÃO DE PRODUTO
router.post("/produtos/update", (req, res) => {
  const id = req.body.id;
  const produto = req.body.produto;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.update({
    produto: produto,
    preco: preco,
    categoria: categoria,
  },
  {where: {id: id}}
).then(() => {
  res.redirect("/produtos")
}).catch((error) => {
  console.log(error)
})
});

export default router;