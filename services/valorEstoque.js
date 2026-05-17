const connection = require("../database/connection");

async function valorEstoque(rl,menu,pause) {
    
    console.clear();
    console.log("============================\n");
    console.log("VALOR DO ESTOQUE 💰\n");
    console.log("============================");

    const sqlEstoque = 
    `SELECT SUM(preco * quantidade) AS "VALOR TOTAL"
    FROM produtos`;

    const [produtos] = await connection.execute(sqlEstoque);

    if (produtos[0]["VALOR TOTAL"] === null) {
      console.log("\nNenhum produto cadastrado! ❌");
      pause(rl,menu);
      return;
    }
    
    console.table(produtos);

    pause(rl,menu);

}

module.exports = valorEstoque;