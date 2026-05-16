const readline = require('readline');

const rl = readline.createInterface({  /* Rl utilizado para receber input do usuário nas funções. */
  input: process.stdin,
  output: process.stdout
});

const cadastrarProduto = require("./services/cadastrarProduto");
const removerProduto = require("./services/removerProduto");
const listarProdutos = require("./services/listarProdutos");
const pause = require("./services/pause");

async function menu() {
    
    console.clear();
    console.log("============================");
    console.log("MENU PRINCIPAL 📊\n");
    console.log("1. Cadastrar produto ➕");
    console.log("2. Remover produto ➖");
    console.log("3. Listar produtos 📝");
    console.log("0. Sair ❌");
    console.log("============================\n");
    
    rl.question(`Qual opção deseja? `, (opcao) => {

        opcao = Number(opcao);

        switch (opcao) {

            case 1:
                cadastrarProduto(rl,menu);
                break;
            
            case 2:
                removerProduto(rl,menu,pause);
                break;
                
            case 3:
                listarProdutos(rl,menu,pause);
                break;

            case 0:
                sair();
                break;

            default:
                console.table("Opção inválida..");
                menu();
                break;
        }
    });
}

menu();