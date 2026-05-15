const Produto = require("./models/Produto");
const {cadastrarProduto} = require("./services/cadastrarProduto");

async function main() {
    
    const produto = new Produto();
    produto.nome = "Ceular";
    produto.preco = 1800.00;
    produto.quantidade = 2;

    try {
        await cadastrarProduto(produto);
        console.log("Produto cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
    }
}

main();