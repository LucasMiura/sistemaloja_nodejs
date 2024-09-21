import express from "express"; // ES6 Modules
const router = express.Router();

// ROTA DE CLIENTES
router.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Ana Maria Silva",
      cpf: "123.456.789-00",
      endereco: "Rua das Flores, 123, Centro, São Paulo, SP",
    },

    {
      nome: "João Pedro Oliveira",
      cpf: "234.567.890-11",
      endereco: "Avenida Brasil, 456, Jardim América, Rio de Janeiro, RJ",
    },

    {
      nome: "Maria Clara Santos",
      cpf: "345.678.901-22",
      endereco: "Rua das Acácias, 789, Vila Nova, Belo Horizonte, MG",
    },

    {
      nome: "Lucas Fernando Almeida",
      cpf: "456.789.012-33",
      endereco: "Rua São Paulo, 321, Centro, Curitiba, PR",
    },

    {
      nome: "Juliana Costa Lima",
      cpf: "567.890.123-44",
      endereco: "Avenida das Palmeiras, 654, Vila Mariana, Salvador, BA",
    },

    {
      nome: "Carlos Eduardo Martins",
      cpf: "678.901.234-55",
      endereco: "Rua dos Lírios, 987, Parque das Nações, Recife, PE",
    },

    {
      nome: "Fernanda Ribeiro Alves",
      cpf: "789.012.345-66",
      endereco: "Avenida Sete de Setembro, 135, Centro, Porto Alegre, RS",
    },

    {
      nome: "Rafael Gomes da Silva",
      cpf: "890.123.456-77",
      endereco: "Rua do Comércio, 246, Bairro Novo, Fortaleza, CE",
    },

    {
      nome: "Camila Lopes Pereira",
      cpf: "901.234.567-88",
      endereco: "Avenida das Américas, 369, Barra, Rio de Janeiro, RJ",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});
export default router;
