const mysql = require('mysql2');

// Configuração do banco de dados
const pool = mysql.createPool({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD23538',
    password: 'BD23538',
    database: 'BD23538',
});

// Função para listar registros
async function listarRegistros() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM consultorioMedico.consultas');
        return rows;
    } finally {
        connection.release();
    }
}

// Função para incluir um registro
async function incluirRegistro(novoRegistro) {
    const connection = await pool.getConnection();
    try {
        await connection.query('INSERT INTO consultorioMedico.consultas SET ?', [novoRegistro]);
    } finally {
        connection.release();
    }
}

// Função para editar um registro
async function editarRegistro(id, novoValor) {
    const connection = await pool.getConnection();
    try {
        await connection.query('UPDATE consultorioMedico.consultas SET ? WHERE id = ?', [novoValor, id]);
    } finally {
        connection.release();
    }
}

// Função para excluir um registro
async function excluirRegistro(id) {
    const connection = await pool.getConnection();
    try {
        await connection.query('DELETE FROM consultorioMedico.consultas WHERE id = ?', [id]);
    } finally {
        connection.release();
    }
}

// Exemplo de uso
listarRegistros()
    .then((registros) => {
        console.log('Registros:', registros);
    })
    .catch((error) => {
        console.error('Erro ao listar registros:', error);
    });

incluirRegistro({ campo1: 'valor1', campo2: 'valor2' })
    .then(() => {
        console.log('Registro incluído com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao incluir registro:', error);
    });

editarRegistro(1, { campo1: 'novo_valor1', campo2: 'novo_valor2' })
    .then(() => {
        console.log('Registro editado com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao editar registro:', error);
    });

excluirRegistro(1)
    .then(() => {
        console.log('Registro excluído com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao excluir registro:', error);
    });

    