const statusDAO = require("../BD/DAO_statusConsulta");
const bd = require("../../confg/database");

class CON_statusConsulta{

    //metodo - via rota
    dadosStatusConsultaEJS(){
        return function(req, res){
            const staDAO = new statusDAO(bd);//instancia da classe
            staDAO.dadosDoStatusConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/cadastro', {status: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    incluirStatusNaConsultaEJS(){
        return function(req, res){
            const staDAO = new statusDAO(bd);//instancia da classe
            staDAO.incluirStatusConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {status: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    editarStatusDaConsultaEJS(){
        return function(req, res){
            const staDAO = new statusDAO(bd);//instancia da classe
            staDAO.editarStatusConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {status: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
    excluirStatusDaConsultaEJS(){
        return function(req, res){
            const staDAO = new statusDAO(bd);//instancia da classe
            staDAO.excluirStatusConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {status: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
}
module.exports = CON_statusConsulta;