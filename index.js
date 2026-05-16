const readline = require('readline');

const rl = readline.createInterface({  /* Rl utilizado para receber input do usuário nas funções. */
  input: process.stdin,
  output: process.stdout
});

const cadastrarProduto = require("./services/cadastrarProduto");
const {salvarProduto} = require("./services/salvarProduto");

async function menu() {
    
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
                cadastrarProduto(rl, menu);
                break;
            
            case 2:
                removerProduto();
                break;
                
            case 3:
                listarProdutos();
                break;

            case 0:
                sair();
                break;

            default:
                console.log("Opção inválida..");
                menu();
                break;
        }
    });
}

menu();