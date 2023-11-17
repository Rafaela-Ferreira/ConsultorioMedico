const medicoDAO = require("../BD/DAO_medico");
const bd = require("../../confg/database");

class CON_medico{

    //metodo - via rota
    exibeDadosMedicoEJS(){
        return function(req, res){
            const medDAO = new medicoDAO(bd);//instancia da classe
            medDAO.listarMedicoEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    IncluirDadosMedicoEJS(){
        return function(req, res){
            const medDAO = new medicoDAO(bd);//instancia da classe
            medDAO.incluirMedicoEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    editarDadosMedicoEJS(){
        return function(req, res){
            const medDAO = new medicoDAO(bd);//instancia da classe
            medDAO.editarMedicoEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
    excluirDadosMedicoEJS(idConsulta){
        return function(req, res){
            const medDAO = new medicoDAO(bd); // instancia da classe
            medDAO.excluirMedicoEJS(idConsulta)
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    


}

module.exports = CON_medico;