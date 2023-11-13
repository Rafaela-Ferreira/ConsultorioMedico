const app = require("../../confg/express");

module.exports = (app) => {
    //evitar problemas com os CORS
    app.use((req, res, next) => {
        res.header("Access-Control-Allw-Origen", "*");
        next();
    });


    const consultaController = require("../CONTROLE/CON_consultorio");
    const conController = new consultaController();

    

    const especiController = require("../CONTROLE/CON_especialidade");
    const especialiController = new especiController();

    const statusController = require("../CONTROLE/CON_statusConsulta");
    const staController = new statusController();

    const tipoConsuController = require("../CONTROLE/CON_tipoConsulta");
    const tipoController = new tipoConsuController();

    
    //criando minhas rotas
    app.get("/home", (req, res) => {
        console.log("Utilizando rota /home");
        res.send("Olá a console");
    });

    app.get("/listaConsultasEJS", conController.exibeDadosConsultaEJS());

    //app.get("/ExcluirConsultasEJS", ExclconController.excluirDadosConsultaEJS(idConsulta));


    app.get("/especialidade", especialiController.exibeDadosEspecialidadeEJS());

    app.get("/status", staController.dadosStatusConsultaEJS());

    app.get("/tipoConsulta", tipoController.exibeDadosTipoConsultaEJS());


}