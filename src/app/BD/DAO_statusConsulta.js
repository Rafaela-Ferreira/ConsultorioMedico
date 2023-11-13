class DAO_statusConsulta{

    //construtor
    constructor(bd){
        this._bd = bd;
    }

    dadosDoStatusConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT ID_StatusConsulta, Nome_StatusConsulta FROM StatusConsulta ORDER BY ID_StatusConsulta';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Lista status de consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    incluirStatusConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'INSERT INTO StatusConsulta SET ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de incluir um novo status de consulta falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    editarStatusConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE StatusConsulta SET ? WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de editar status de consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    
    excluirStatusConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'DELETE FROM StatusConsulta WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("falha ao tentar excluir um status de consultas!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

}






module.exports = DAO_statusConsulta;