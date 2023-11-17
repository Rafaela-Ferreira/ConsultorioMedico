class DAO_paciente{

    //construtor
    constructor(bd){
        this._bd = bd;
    }
    //metodo 
    
    listarPacienteEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT ID_Consulta, Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta FROM Consultas ORDER BY ID_Consulta';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Lista de Pacientes falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    incluirPacienteEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'INSERT INTO Consultas SET ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("tentativa de incluir Paciente falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    editarPacienteEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE Consultas SET ? WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de editar Paciente falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    excluirPacienteEJS(id){
        return new Promise((resolve, reject) => {
            var sql = 'DELETE FROM Consultas WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("falha ao tentar excluir um Paciente!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

}

module.exports = DAO_paciente;