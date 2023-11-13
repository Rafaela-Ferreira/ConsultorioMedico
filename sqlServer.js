const sql = require('mssql');

// Configuração do banco de dados SQL Server
const config = {
    user: 'BD23538',
    password: 'BD23538',
    server: 'regulus.cotuca.unicamp.br',
    database: 'BD23538',
    
};

// Função para listar registros
async function listarRegistros() {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM consultorioMedico.consultas`;
        return result.recordset;
    } catch (error) {
        throw error;
    } finally {
        sql.close();
    }
}

// Função para incluir um registro
async function incluirRegistro(novoRegistro) {
    try {
        await sql.connect(config);
        await sql.query`INSERT INTO consultorioMedico.consultas (Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta) VALUES 
                        (${novoRegistro.data}, ${novoRegistro.hora}, ${novoRegistro.idMedico}, ${novoRegistro.idPaciente}, ${novoRegistro.idTipoConsulta}, ${novoRegistro.idStatusConsulta})`;
    } catch (error) {
        throw error;
    } finally {
        sql.close();
    }
}

// Função para editar múltiplos campos em um registro
async function editarConsulta(id, novoValor) {
    try {
        await sql.connect(config);
        await sql.query`UPDATE consultorioMedico.consultas SET NomePaciente = ${novoValor.nomePaciente}, NomeMedico = ${novoValor.nomeMedico}, Data = ${novoValor.data}, Hora = ${novoValor.hora} WHERE id = ${id}`;
    } catch (error) {
        throw error;
    } finally {
        sql.close();
    }
}
// Função para excluir uma consulta
async function excluirConsulta(id) {
    try {
        await sql.connect(config);
        await sql.query`DELETE FROM consultorioMedico.consultas WHERE id = ${id}`;
    } catch (error) {
        throw error;
    } finally {
        sql.close();
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

editarConsulta(1, { campo1: 'novo_valor1', campo2: 'novo_valor2' })
    .then(() => {
        console.log('Registro editado com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao editar registro:', error);
    });

excluirConsulta(1)
    .then(() => {
        console.log('Registro excluído com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao excluir registro:', error);
    });
    