const consultorioDAO = require("../BD/DAO_consultorio");
const bd = require("../../confg/database");

class CON_consultorio{

    //metodo - via rota
    exibeDadosConsultaEJS(){
        return function(req, res){
            const conDAO = new consultorioDAO(bd);//instancia da classe
            conDAO.dadosDaConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {consulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    IncluirDadosConsultaEJS(){
        return function(req, res){
            const conDAO = new consultorioDAO(bd);//instancia da classe
            conDAO.incluirConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {consulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    editarDadosConsultaEJS(){
        return function(req, res){
            const conDAO = new consultorioDAO(bd);//instancia da classe
            conDAO.editarConsultaEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {cosulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
    excluirDadosConsultaEJS(idConsulta){
        return function(req, res){
            const conDAO = new consultorioDAO(bd); // instancia da classe
            conDAO.excluirConsultaEJS(idConsulta)
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {consulta: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    


}

module.exports = CON_consultorio;