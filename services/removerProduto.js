const connection = require("../database/connection");
const listarProdutos = require("./listarProdutos");

async function removerProduto(rl,menu,pause) {
    
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
      pause(rl,menu);
      return;
    }

    console.table(produtos); /* Exibe a tabela de produtos. */

    rl.question(`Selecione o ID que deseja remover: `, async (id) => {

        const sqlRemover = /* Query SQL responsável por remover um produto no banco de dados pelo ID. */
        `DELETE FROM produtos
         WHERE id = ?;
        `
        await connection.execute(sqlRemover, [id]); /* Executa a query removendo o produto pelo ID fornecido pelo o usuário. */

        console.log("Produto removido com sucesso!");
        console.log("Lista atualizada ⬇️\n");

        const [produtos] = await connection.execute(sqlProdutos);
        console.table(produtos); /* Exibe a tabela de produtos atualizada. */

        pause(rl,menu);

    });
}

module.exports = removerProduto;