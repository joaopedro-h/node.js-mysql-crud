# 📦 Sistema de Estoque (Terminal)

Um sistema de gerenciamento de estoque desenvolvido em Node.js com integração ao MySQL, executado diretamente pelo terminal.

---

# 🎮 Sobre o Projeto

O projeto consiste em um CRUD completo de produtos integrado a um banco de dados MySQL, permitindo:

- Cadastrar produtos 📦
- Remover produtos 🗑️
- Editar produtos ✏️
- Listar produtos 📋
- Calcular o valor total do estoque 💰

O sistema foi desenvolvido com foco em:

- Prática de backend com Node.js
- Integração com banco de dados
- Modularização de código
- Manipulação de queries SQL
- Arquitetura organizada
- Validação de dados

---

# 🚀 Funcionalidades

- 📦 Cadastro de produtos
- 🗑️ Remoção de produtos por ID
- 📋 Listagem de produtos
- ✏️ Edição de:
  - nome
  - preço
  - quantidade
- 💰 Cálculo automático do valor total do estoque
- ✅ Validação de entradas do usuário
- 🔄 Atualização dinâmica da tabela após operações
- 🎨 Interface organizada no terminal
- ⏸️ Sistema de pause e fluxo controlado
- 🛠️ Integração real com MySQL

---

# 🎮 Menu do Sistema

## Menu Principal

```txt
============================

MENU PRINCIPAL 🛍️

============================

1. Cadastrar produto ➕
2. Remover produto 🗑️
3. Listar produtos 📋
4. Editar produto ✏️
5. Valor do estoque 💰
0. Sair ❌

============================
```

---

# 📋 Exemplo de Tabela

```txt
┌─────────┬────┬────────────┬──────────┬────────────┐
│ (index) │ ID │ NOME       │ PREÇO    │ QUANTIDADE │
├─────────┼────┼────────────┼──────────┼────────────┤
│ 0       │ 26 │ Celular    │ 1000.00  │ 1          │
│ 1       │ 27 │ Teclado    │ 500.00   │ 3          │
│ 2       │ 28 │ MacBook    │ 10000.00 │ 3          │
│ 3       │ 29 │ Teclado    │ 1000.00  │ 1          │
└─────────┴────┴────────────┴──────────┴────────────┘
```

---

# ✏️ Sistema de Edição

O usuário pode editar qualquer informação do produto diretamente pelo terminal:

```txt
1. Nome ✏️
2. Preço 💲
3. Quantidade 🔢
0. Sair ❌
```

---

# 📂 Estrutura do Projeto

```txt
project/
├── database/
│   └── connection.js
│
├── models/
│   └── Produto.js
│
├── services/
│   ├── cadastrarProduto.js
│   ├── editarProduto.js
│   ├── listarProdutos.js
│   ├── pause.js
│   ├── removerProduto.js
│   ├── salvarProduto.js
│   └── valorEstoque.js
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

# 🧠 Conceitos Aplicados

- Integração com MySQL
- CRUD completo
- Programação assíncrona (`async/await`)
- Queries SQL parametrizadas
- Modularização de código
- Separação de responsabilidades
- Manipulação de arrays e objetos
- Validação de entradas
- Entrada de dados com `readline`
- Fluxo controlado com callbacks
- Pool de conexões MySQL
- Arquitetura em camadas

---

# 🛠️ Tecnologias Utilizadas

- Node.js
- MySQL
- mysql2
- readline

---

# 🗄️ Operações SQL Utilizadas

O projeto utiliza comandos SQL reais, como:

```sql
SELECT
INSERT
UPDATE
DELETE
SUM
WHERE
AS
```

---

# 🔒 Segurança

O sistema utiliza queries parametrizadas com `?`, evitando SQL Injection.

Exemplo:

```js
const sql = `
UPDATE produtos
SET preco = ?
WHERE id = ?
`;

await connection.execute(sql, [preco, id]);
```

---

# 💰 Sistema de Estoque

O valor total do estoque é calculado automaticamente utilizando agregação SQL:

```sql
SELECT SUM(preco * quantidade)
FROM produtos
```

---

# ⚙️ Como Executar

## Clone o repositório

```bash
git clone https://github.com/joaopedro-h/node.js-mysql-crud

---

## Entre na pasta do projeto

```bash
cd nome-do-projeto
```

---

## Instale as dependências

```bash
npm install
```

---

## Configure o banco de dados MySQL

Crie o banco:

```sql
CREATE DATABASE estoque;
```

---

## Crie a tabela

```sql
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    preco DECIMAL(10,2),
    quantidade INT
);
```

---

## Configure sua conexão

No arquivo:

```txt
database/connection.js
```

configure:

```js
host
user
password
database
```

---

## Execute o projeto

```bash
node index.js
```

---

# 📚 Objetivo do Projeto

Este projeto foi desenvolvido como prática de:

- backend com Node.js
- SQL e MySQL
- arquitetura modular
- lógica de programação
- manipulação de banco de dados
- desenvolvimento CLI

---