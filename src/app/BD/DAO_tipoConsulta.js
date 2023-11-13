class DAO_tipoConsulta{

    //construtor
    constructor(bd){
        this._bd = bd;
    }

    dadosDoTipoConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT ID_TipoConsulta, Nome_TipoConsulta FROM TiposConsulta ORDER BY ID_TipoConsulta';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Lista de tipo de Consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    incluirTipoConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'INSERT INTO TiposConsulta SET ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("tentativa de incluir um tipo de consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

    editarTipoConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE TiposConsulta SET ? WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de editar um tipo de consultas falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    
    excluirTipoConsultaEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'DELETE FROM TiposConsulta WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Falha ao tentar excluir um tipo de consulta consultas!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
}






module.exports = DAO_tipoConsulta;