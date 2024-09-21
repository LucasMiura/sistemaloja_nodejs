import express from "express"; // ES6 Modules
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
  const produtos = [
    {
      produto: "Moletom Oversized",
      preco: 199.9,
      categoria: "Casacos",
    },

    {
      produto: "Camiseta Gráfica",
      preco: 89.9,
      categoria: "Camisetas",
    },

    {
      produto: "Calça Cargo",
      preco: 159.9,
      categoria: "Calças",
    },

    {
      produto: "Jaqueta Bomber",
      preco: 249.9,
      categoria: "Casacos",
    },

    {
      produto: "Tênis Chunky",
      preco: 299.9,
      categoria: "Calçados",
    },

    {
      produto: "Bermuda de Moletom",
      preco: 79.9,
      categoria: "Shorts",
    },

    {
      produto: "Chapéu Bucket",
      preco: 49.9,
      categoria: "Acessórios",
    },

    {
      produto: "Calça Jogger",
      preco: 119.9,
      categoria: "Calças",
    },

    {
      produto: "Camisa de Flanela",
      preco: 99.9,
      categoria: "Camisas",
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});
export default router;
