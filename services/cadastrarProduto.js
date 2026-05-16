const Produto = require("../models/Produto");
const {salvarProduto} = require("./salvarProduto");

async function cadastrarProduto(rl, menu) {
    
    console.clear();
    rl.question(`Insira o nome do produto: `, (nome) => {

        rl.question(`Insira o preço do produto: `, async (preco) => {

            rl.question(`Insira a quantidade: `, async (quantidade) => {

                const produto = new Produto (
                    nome,
                    Number(preco),
                    quantidade
                );

                await salvarProduto(produto);

                rl.close;

                menu();
            });
        });
    });
}

module.exports = cadastrarProduto;