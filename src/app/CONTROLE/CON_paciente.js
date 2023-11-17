const pacienteDAO = require("../BD/DAO_medico");
const bd = require("../../confg/database");

class CON_paciente{

    //metodo - via rota
    exibeDadosMedicoEJS(){
        return function(req, res){
            const pacieDAO = new pacienteDAO(bd);//instancia da classe
            pacieDAO.listarMedicoEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    IncluirDadosMedicoEJS(){
        return function(req, res){
            const pacieDAO = new pacienteDAO(bd);//instancia da classe
            pacieDAO.incluirMedicoEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    editarDadosMedicoEJS(){
        return function(req, res){
            const pacieDAO = new pacienteDAO(bd);//instancia da classe
            pacieDAO.editarMedicoEJS()
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }
    excluirDadosMedicoEJS(idConsulta){
        return function(req, res){
            const pacieDAO = new pacienteDAO(bd); // instancia da classe
            pacieDAO.excluirMedicoEJS(idConsulta)
                .then((resultados) =>{
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', {medico: resultados});
                })
                .catch(erro => console.log(erro));
        }
    }

    


}

module.exports = CON_paciente;