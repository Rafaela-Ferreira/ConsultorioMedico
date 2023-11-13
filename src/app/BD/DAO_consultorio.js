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
    dadosDaConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT ID_Consulta, Data, Hora, ID_Medico, ID_Paciente, ID_TipoConsulta, ID_StatusConsulta FROM Consultas ORDER BY ID_Consulta';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Lista de consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
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