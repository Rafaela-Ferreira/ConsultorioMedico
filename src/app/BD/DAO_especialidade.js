class DAO_especialidade{

    //construtor
    constructor(bd){
        this._bd = bd;
    }

    dadosDaEspecialidadeEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'SELECT ID_Especialidade, Nome_Especialidade FROM Especialidades ORDER BY ID_Especialidade';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Lista de Especialidade falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    incluirEspecialidadeEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'INSERT INTO Especialidade SET ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de incluir Especialidade falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    editarEspecialidadeEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'UPDATE Especialidade SET ? WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("Tentativa de editar Especialidade falhou!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }
    excluirEspecialidadeEJS(){
        return new Promise((resolve, reject) => {
            var sql = 'DELETE FROM Especialidade WHERE id = ?';
            this._bd.query(sql, function (erro, recordset){//conexão com o banco
                
                if(erro){
                    console.log(erro);
                    return reject("falha ao tentar excluir uma Especialidade!!");
                }
                resolve(recordset); // retorna os dados da tabela
            });
        });
    }

}

module.exports = DAO_especialidade;