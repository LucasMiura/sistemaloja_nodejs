// Importando o Express na nossa aplicação
// const express = require("express"); // CommonJS Modules
import express from "express"; //ES6 Modules
// Criando uma instância do Express
const app = express();

// Importando o Sequelize (com os dados da conexão)
import connection from "./config/sequelize-config.js";

// Importando os Controllers )onde estão rotas)
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";

// Permite capturar dados vindo de formulários
app.use(express.urlencoded({extended: false}));

// Realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
}).catch((error) =>{
    console.log(error)
});

// Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS miuraclothing;`).then(()=>{
    console.log("O banco de dados está criado.");
})
.catch((error)=>{
    console.log(error)
})

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos Controllers
app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);

// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
