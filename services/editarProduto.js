const connection = require("../database/connection");

async function editarProduto(rl,menu,pause) {
    
    console.clear();
    console.log("========================================================\n");
    console.log("PRODUTOS CADASTRADOS 📋\n");

    const sqlProdutos = 
    `SELECT 
     id AS "ID",
     nome AS "NOME",
     preco AS "PREÇO",
     quantidade AS "QUANTIDADE"
    FROM produtos`;

    const [produtos] = await connection.execute(sqlProdutos);

    if (produtos.length === 0 ) {
      console.log("\nNenhum produto cadastrado! ❌");
      pause(rl,menu);
      return;
    }
    
    console.table(produtos);

    rl.question(`\nSelecione o ID do produto que deseja editar 🆔 : `, (idProduto) => {

        console.log("Selecione a opção que deseja:\n");
        console.log("1. Nome ✏️");
        console.log("2. Preço 💲");
        console.log("3. Quantidade 🔢");
        console.log("0. Sair ❌\n");
        
        rl.question(`Qual opção deseja? `, (opcao) => {
    
            opcao = Number(opcao);
    
            switch (opcao) {
    
                case 1:

                    console.clear();
                    rl.question(`Novo nome: `, async (novoNome) => {

                        if (!novoNome) {
                            console.log("Nome inválido! ❌");
                            pause(rl,menu);
                            return;
                        }

                        const sqlNome = 
                        `UPDATE produtos
                        SET nome = ?
                        WHERE id = ?`;

                        const values = [
                            novoNome,
                            idProduto
                        ]

                        await connection.execute(sqlNome,values);

                        console.log("Nome alterado! ✔️");
                        pause(rl,menu);
                    });

                break;

                case 2:

                    rl.question(`Novo preço: `, async (novoPreco) => {

                        const preco = Number(novoPreco);

                        if (isNaN(preco) || preco <= 0) {
                            console.log("Preço inválido! ❌");
                            pause(rl,menu);
                            return;
                        }

                        const sqlPreco = 
                        `UPDATE produtos
                        SET preco = ?
                        WHERE id = ?`;

                        const values = [
                            novoPreco,
                            idProduto
                        ]

                        await connection.execute(sqlPreco,values);

                        console.log("Preço alterado! ✔️");
                        pause(rl,menu);
                    });

                break;

                case 3:
                    
                    rl.question(`Nova quantidade: `, async (novaQuantidade) => {

                        const quantidade = Number(novaQuantidade);

                        if (isNaN(quantidade) || quantidade <= 0) {
                            console.log("Quantidade inválida! ❌");
                            pause(rl,menu);
                            return;
                        }

                        const sqlQuantidade = 
                        `UPDATE produtos
                        SET quantidade = ?
                        WHERE id = ?`;

                        const values = [
                            novaQuantidade,
                            idProduto
                        ]

                        await connection.execute(sqlQuantidade,values);

                        console.log("Quantidade alterada! ✔️");
                        pause(rl,menu);
                    });                

                break;

                case 0:
                    console.log("Voltando ao menu.. ↩️");
                    pause(rl,menu);    

                break;

                default:
                    console.log("Opção inválida! ❌");
                    pause(rl,menu);
                
                break;
            }
        });
    });
}

module.exports = editarProduto;