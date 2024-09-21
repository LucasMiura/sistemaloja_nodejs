import express from "express"; // ES6 Modules
const router = express.Router();

// ROTA DE PEDIDOS
router.get("/pedidos", (req, res) => {
  const pedidos = [
    {
      numpedido: "A12345",
      valor: 299.9,
    },

    {
      numpedido: "B23456",
      valor: 159.9,
    },

    {
      numpedido: "C34567",
      valor: 89.9,
    },

    {
      numpedido: "D45678",
      valor: 199.9,
    },

    {
      numpedido: "E56789",
      valor: 79.9,
    },

    {
      numpedido: "F67890",
      valor: 249.9,
    },

    {
      numpedido: "G78901",
      valor: 119.9,
    },

    {
      numpedido: "H89012",
      valor: 99.9,
    },

    {
      numpedido: "I90123",
      valor: 49.9,
    },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});
export default router;
