class DAO_consultorio{

    //construtor
    constructor(bd){
        this._bd = bd;
    }
    //metodo - select na tabela clientes
    /*
    dadosDaConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT idClie, cpfClie, emailClie, nomeClie, DATE_FORMAT(dataNiverClie,"%d/%m/%Y") as dataNiverClie FROM CLIENTES ORDER BY idClie';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Lista de consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }*/

    //teste - tentativa de conectar outra tabela
    dadosDaConsultaEJS1() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT ID_Consulta, Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta FROM Consultas ORDER BY ID_Consulta';
            this._bd.query(sql, (erro, recordset) => {
                // conexão com o banco
                if (erro) {
                    console.error(erro);
                    reject("Lista de consultas falhou!!");
                } else {
                    resolve(recordset); // retorna os dados da tabela
                }
            });
        });
    }

    listarConsulta() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT
                    c.ID_Consulta,
                    c.Data,
                    c.Hora,
                    m.Nome_Medico as NomeMedico,
                    p.Nome_Paciente as NomePaciente,
                    tc.Nome_TipoConsulta as NomeTipoConsulta,
                    sc.Nome_StatusConsulta as NomeStatusConsulta
                FROM
                    Consultas c
                    INNER JOIN Medicos m ON c.ID_Medico = m.ID_Medico
                    INNER JOIN Pacientes p ON c.ID_Paciente = p.ID_Paciente
                    INNER JOIN TiposConsulta tc ON c.ID_TipoConsulta = tc.ID_TipoConsulta
                    INNER JOIN StatusConsulta sc ON c.ID_StatusConsulta = sc.ID_StatusConsulta
                ORDER BY
                    c.ID_Consulta;
            `;
    
            this._bd.query(sql, (erro, recordset) => {
                // conexão com o banco
                if (erro) {
                    console.error(erro);
                    reject("Lista de consultas falhou!!");
                } else {
                    resolve(recordset); // retorna os dados da tabela
                }
            });
        });
    }

    incluirConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'INSERT INTO Consultas SET ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("tentativa de incluir consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    incluirConsultaEJS(novaConsulta){
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO Consultas (Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta) VALUES (?, ?, ?, ?, ?, ?)';
            
            const { Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta } = novaConsulta;
            
            this._bd.query(sql, [Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta], (erro, recordset) => {
                // conexão com o banco
    
                if (erro) {
                    console.log(erro);
                    return reject("Tentativa de incluir consulta falhou!!");
                }
                
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    inserirConsultaEJS(novaConsulta) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO Consultas (Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta) VALUES (?, ?, ?, ?, ?, ?)';
            
            this._bd.query(sql, [
                novaConsulta.Data,
                novaConsulta.Hora,
                novaConsulta.ID_Medico,
                novaConsulta.ID_Paciente,
                novaConsulta.ID_TipoConsulta,
                novaConsulta.ID_StatusConsulta
            ], (erro, resultado) => {
                if (erro) {
                    console.error(erro);
                    reject("Inserção de consulta falhou!!");
                } else {
                    resolve(resultado.insertId); // Retorna o ID do novo registro inserido
                }
            });
        });
    }

    editarConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE Consultas SET ? WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de editar consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    excluirConsultaEJS(id){
        return new Promise((resolve, reject) => {
            var sql = 'DELETE FROM Consultas WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("falha ao tentar excluir uma consultas!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

}

module.exports = DAO_consultorio;