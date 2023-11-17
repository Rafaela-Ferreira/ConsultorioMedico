const consultorioDAO = require("../BD/DAO_consultorio");
const bd = require("../../confg/database");

class CON_consultorio{

    //metodo - via rota
    exibeDadosConsultaEJS() {
        return function (req, res) {
            const conDAO = new consultorioDAO(bd); // instância da classe
            conDAO.dadosDaConsultaEJS()
                .then((resultados) => {
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', { consultas: resultados });
                })
                .catch(erro => console.log(erro));
        }
    }
    listarDadosConsulta() {
        return function (req, res) {
            const conDAO = new consultorioDAO(bd); // instância da classe
            conDAO.listarConsulta()
                .then((resultados) => {
                    console.log(resultados);
                    res.render('../views/ejs/listaConsultas', { consultas: resultados });
                })
                .catch(erro => console.log(erro));
        }
    }

    incluirConsulta() {
        return function (req, res) {
            const novaConsulta = req.body; // Supondo que os dados da nova consulta estão no corpo da requisição
            const conDAO = new consultorioDAO(bd);
    
            conDAO.inserirConsulta(novaConsulta)
                .then((idInserido) => {
                    console.log(`Nova consulta inserida com ID: ${idInserido}`);
                    res.redirect('/listarConsultas'); // Redireciona para a lista de consultas ou a rota desejada
                })
                .catch((erro) => {
                    console.error(erro);
                    res.status(500).send("Erro ao inserir consulta");
                });
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