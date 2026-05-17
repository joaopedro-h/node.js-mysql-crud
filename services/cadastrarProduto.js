const Produto = require("../models/Produto");
const {salvarProduto} = require("./salvarProduto");

async function cadastrarProduto(rl,menu,pause) {
    
    console.clear();
    rl.question(`Insira o nome do produto: `, (nome) => {

        rl.question(`Insira o preço do produto: `, async (preco) => {

            if (preco <= 0) {
                console.log("Preço inválido! ❌");
                pause(rl,menu);
                return;
            }

            rl.question(`Insira a quantidade: `, async (quantidade) => {
                
                if (quantidade <= 0) {
                    console.log("Quantidade inválida! ❌");
                    pause(rl,menu);
                    return;
                }

                const produto = new Produto (
                    nome,
                    Number(preco),
                    quantidade
                );

                await salvarProduto(produto,rl,menu,pause);

                rl.close;
                
            });
        });
    });
}

module.exports = cadastrarProduto;