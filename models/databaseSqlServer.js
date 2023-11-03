const sql = require('mssql');

const config = {
    user: 'BD23538',
    password: 'BD23538',
    server: 'regulus.cotuca.unicamp.br',
    database: 'BD23538',
    options: {
        encrypt: true, 
        trustServerCertificate: true,
    },
};

// Função para adicionar um novo usuário ao banco de dados
async function adicionarUsuario(login, senha) {
    try {
        let pool = await sql.connect(config);
        const result = await pool.request()
            .input('login', sql.VarChar, login)
            .input('senha', sql.VarChar, senha)
            .query('INSERT INTO Login (Username, Password) VALUES (@login, @senha)');
        console.log('Novo usuário adicionado com sucesso.');
    } catch (error) {
        console.error('Erro ao adicionar usuário: ' + error.message);
    }
}

// Exemplo de como usar a função adicionarUsuario
const novoLogin = 'novo_usuario';
const novaSenha = 'nova_senha';
adicionarUsuario(novoLogin, novaSenha);

// Função para executar uma consulta no banco de dados
function executeStatement(query) {
    const connection = new Connection(config);
  
    return new Promise((resolve, reject) => {
      connection.on("connect", (err) => {
        if (err) {
          reject(err);
        } else {
          const request = new Request(query, (err, rowCount) => {
            if (err) {
              reject(err);
            } else {
              resolve(rowCount);
            }
            connection.close();
          });
  
          connection.execSql(request);
        }
      });
  
      connection.connect();
    });
}
// Funções para manipular contas de usuário
async function criarContaUsuario(username, password) {
    const query = `INSERT INTO Usuarios (Nome_Usuario, Senha) VALUES ('${username}', '${password}')`;
    await executeStatement(query);
}
  
async function verificarCredenciais(username, password) {
    const query = `SELECT * FROM Usuarios WHERE Nome_Usuario = '${username}' AND Senha = '${password}'`;
    const result = await executeStatement(query);
    return result.length > 0;
}
  
// Função para inserir uma nova especialidade médica no banco de dados
async function inserirEspecialidade(especialidade) {
    const query = `INSERT INTO consultorioMedico.Especialidades (Nome_Especialidade) VALUES ('${especialidade}')`;
    await executeStatement(query);
}
// Funções para obter dados das tabelas do banco de dados
async function getEspecialidades() {
  const query = 'SELECT * FROM Especialidades';
  return await executeStatement(query);
}

async function getMedicos() {
  const query = 'SELECT * FROM Medicos';
  return await executeStatement(query);
}

async function getPacientes() {
  const query = 'SELECT * FROM Pacientes';
  return await executeStatement(query);
}

async function getTiposConsulta() {
  const query = 'SELECT * FROM TiposConsulta';
  return await executeStatement(query);
}

async function getStatusConsulta() {
  const query = 'SELECT * FROM StatusConsulta';
  return await executeStatement(query);
}

module.exports = {
  executeStatement,
  criarContaUsuario,
  verificarCredenciais,
  getEspecialidades,
  getMedicos,
  getPacientes,
  getTiposConsulta,
  getStatusConsulta
};
