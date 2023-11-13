const tipoConsultaDAO = require("../BD/DAO_tipoConsulta");
const bd = require("../../confg/database");

class CON_tipoConsulta{

    //metodo - via rota
    exibeDadosTipoConsultaEJS(){
        return function(req, res){
            const tipoDAO = new tipoConsultaDAO(bd);//instancia da classe
            tipoDAO.dadosDoTipoConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/cadastro', {TipoConsulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    incluiTipoDeConsultaEJS(){
        return function(req, res){
            const conDAO = new tipoConsultaDAO(bd);//instancia da classe
            conDAO.incluirTipoConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {TipoCosulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    editarTipoDeConsultaEJS(){
        return function(req, res){
            const conDAO = new tipoConsultaDAO(bd);//instancia da classe
            conDAO.editarTipoConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {TipoCosulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
    excluirTipoDeConsultaEJS(){
        return function(req, res){
            const conDAO = new tipoConsultaDAO(bd);//instancia da classe
            conDAO.excluirTipoConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {TipoCosulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = CON_tipoConsulta;