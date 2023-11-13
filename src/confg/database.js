const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'server',
    user: 'usuario',
    password: 'senha',
    database: 'BD',
});

connection.connect(function (erro) {
    if(erro)
        console.log("Erro na conexão com o Banco NODEJS");
    else
        console.log("Conxão com bando nodejs realizada com sucesso");
});

module.exports = connection;