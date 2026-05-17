const connection = require("../database/connection");

async function listarProdutos(rl,menu,pause) {
    
    console.clear();
    console.log("============================\n");
    console.log("PRODUTOS CADASTRADOS 📋\n");
    console.log("============================");

    const sqlProdutos = /* Query SQL responsável por buscar os produtos no banco de dados. */
    `SELECT 
     id AS "ID",
     nome AS "NOME", 
     preco "PREÇO", 
     quantidade AS "QUANTIDADE"
    FROM produtos`;

    const [produtos] = await connection.execute(sqlProdutos); /* Executa a query e armazena os produtos (na variável produtos) retornados pelo banco de dados. */

    if (produtos.length === 0 ) {
      console.log("\nNenhum produto cadastrado! ❌");
    }

    console.table(produtos); /* Exibe a tabela de produtos. */
    pause(rl, menu);

}

module.exports = listarProdutos;