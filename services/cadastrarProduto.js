const connection = require("../database/connection");

async function cadastrarProduto(produto) {
    
    const sql = `
     INSERT INTO produtos(nome, preco, quantidade)
     VALUES (?,?,?)
    `;
    
    const values = [
        produto.nome,
        produto.preco,
        produto.quantidade
    ];

    const [resultado] = await connection.execute(sql, values);

    console.log("Produto cadastrado!");
    console.log("ID:", resultado.insertID);
    
}

module.exports = {cadastrarProduto};