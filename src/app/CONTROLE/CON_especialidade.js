const especialidadeDAO = require("../BD/DAO_especialidade");
const bd = require("../../confg/database");

class CON_especialidade{

    //metodo - via rota
    exibeDadosEspecialidadeEJS(){
        return function(req, res){
            const espDAO = new especialidadeDAO(bd);//instancia da classe
            espDAO.dadosDaEspecialidadeEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/cadastro', {especialidade: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    IncluirDadosEspecialidadeEJS(){
        return function(req, res){
            const espDAO = new especialidadeDAO(bd);//instancia da classe
            espDAO.incluirEspecialidadeEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {especialidade: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    editarDadosEspecialidadeEJS(){
        return function(req, res){
            const espDAO = new especialidadeDAO(bd);//instancia da classe
            espDAO.editarEspecialidadeEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {especialidade: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
    excluirDadosEspecialidadeEJS(){
        return function(req, res){
            const espDAO = new especialidadeDAO(bd);//instancia da classe
            espDAO.excluirEspecialidadeEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {especialidade: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

}

module.exports = CON_especialidade;