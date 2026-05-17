const connection = require("../database/connection"); /* Feito a imporatação com o banco de dados. */


async function salvarProduto(produto,rl,menu,pause) {
    
    /* Cria a query no SQL, oque significa = Inserir os dados na tabela "produtos". */
    /* (nome, preco, quantidade) são os campos da tabela que vão receber os valores. */
    // (?,?,?) vão ser substituidos pelos valores reais.

    const sql = `  
     INSERT INTO produtos(nome, preco, quantidade)
     VALUES (?,?,?)
    `;
    
    /* Cria o um array com os valores que substituirão os "?" */
    const values = [
        produto.nome,
        produto.preco,
        produto.quantidade
    ];

    /* Executa a query. */
    const [resultado] = await connection.execute(sql, values); /* É enviado a query SQL e valores, await faz a função esperar o banco responder o resultado. */

    console.log("Produto cadastrado!");
    console.log("ID:", resultado.insertId);
    
    pause(rl,menu);
}

module.exports = {salvarProduto};

