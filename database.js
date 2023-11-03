const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD23538',
    password: 'BD23538',
    database: 'BD23538'
});

// Função para adicionar um novo usuário ao banco de dados
function adicionarUsuario(login, senha) {
    const query = 'INSERT INTO Login (Username, Password) VALUES (?, ?)';
    connection.query(query, [login, senha], (error, results, fields) => {
        if (error) {
            return console.error('Erro ao adicionar usuário: ' + error.message);
        }
        console.log('Novo usuário adicionado com sucesso.');
    });
}

// Exemplo de como usar a função adicionarUsuario
const novoLogin = 'novo_usuario';
const novaSenha = 'nova_senha';
adicionarUsuario(novoLogin, novaSenha);

// Encerra a conexão com o banco de dados
connection.end();