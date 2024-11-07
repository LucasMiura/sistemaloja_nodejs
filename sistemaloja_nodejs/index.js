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
import UsersController from "./controllers/UsersController.js";

// Importado o gerador de sessões do express
import session from "express-session";

// Importando o middleware Auth
import Auth from "./middleware/Auth.js";

// Importando o express flash
import flash from "express-flash";

//Configurar as flash messages
app.use(flash())

// Configurando o express-session
app.use(session({
  secret: "lojasecret",
  cookie: {maxAge: 3600000},
  saveUninitialized: false,
  resave: false
}))

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
app.use("/", UsersController);

// CRIANDO A ROTA PRINCIPAL
app.get("/", Auth, (req, res) => {
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
