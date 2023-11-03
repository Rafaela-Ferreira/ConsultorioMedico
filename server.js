const express = require('express');
const app = express();
const port = 3000;

// Configuração do banco de dados e importação do módulo de consultas
const db = require('./models/databaseSqlServer'); // Substitua isso pelo seu módulo de banco de dados

// Configuração do template engine
app.set('view engine', 'ejs'); // Certifique-se de ter o EJS instalado (npm install ejs)

// Middleware para permitir o uso de dados de formulário
app.use(express.urlencoded({ extended: true }));

// Rota principal para renderizar a página de cadastro
app.get('/', async (req, res) => {
    try {
        const especialidades = await db.getEspecialidades(); // Obtém especialidades do banco de dados
        const medicos = await db.getMedicos(); // Obtém médicos do banco de dados
        const pacientes = await db.getPacientes(); // Obtém pacientes do banco de dados
        const tiposConsulta = await db.getTiposConsulta(); // Obtém tipos de consulta do banco de dados
        const statusConsulta = await db.getStatusConsulta(); // Obtém status de consulta do banco de dados

        // Renderiza a página 'cadastros' e passa os dados para a página
        res.render('cadastros', { 
            especialidades, 
            medicos, 
            pacientes, 
            tiposConsulta, 
            statusConsulta 
        });
    } catch (error) {
        res.status(500).send('Erro ao buscar informações do banco de dados');
    }
});

// Rota para lidar com o envio do formulário de cadastro de especialidade médica
app.post('/cadastrarEspecialidade', async (req, res) => {
    try {
        const especialidade = req.body.especialidade;
        await db.inserirEspecialidade(especialidade); // Insere a nova especialidade no banco de dados
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao cadastrar especialidade médica');
    }
});

// Rotas para lidar com o envio de outros formulários de cadastro

// Rota para lidar com o envio do formulário de cadastro de médico
app.post('/cadastrarMedico', async (req, res) => {
    try {
        const nomeMedico = req.body.nomeMedico;
        const especialidadeMedica = req.body.especialidadeMedica;
        await db.inserirMedico(nomeMedico, especialidadeMedica); // Insere o novo médico no banco de dados
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao cadastrar médico');
    }
});

// Rota para lidar com o envio do formulário de cadastro de paciente
app.post('/cadastrarPaciente', async (req, res) => {
    try {
        const nomePaciente = req.body.nomePaciente;
        await db.inserirPaciente(nomePaciente); // Insere o novo paciente no banco de dados
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao cadastrar paciente');
    }
});

// Rota para lidar com o envio do formulário de cadastro de tipo de consulta
app.post('/cadastrarTipoConsulta', async (req, res) => {
    try {
        const tipoConsulta = req.body.tipoConsulta;
        await db.inserirTipoConsulta(tipoConsulta); // Insere o novo tipo de consulta no banco de dados
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao cadastrar tipo de consulta');
    }
});

// Rota para lidar com o envio do formulário de cadastro de status de consulta
app.post('/cadastrarStatusConsulta', async (req, res) => {
    try {
        const statusConsulta = req.body.statusConsulta;
        await db.inserirStatusConsulta(statusConsulta); // Insere o novo status de consulta no banco de dados
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao cadastrar status de consulta');
    }
});
// Rota para enviar e-mail para o paciente com os detalhes da consulta agendada
app.post('/enviarEmail', async (req, res) => {
    try {
        const { email, detalhesConsulta } = req.body;
        await db.enviarEmailPaciente(email, detalhesConsulta); // Envie e-mail para o paciente com os detalhes da consulta agendada
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao enviar e-mail para o paciente');
    }
});
app.listen(port, () => {
    console.log(`O aplicativo está rodando em http://localhost:${port}`);
});

module.exports = {
    executeStatement,
    criarContaUsuario,
    verificarCredenciais,
    getEspecialidades,
    getMedicos,
    getPacientes,
    getTiposConsulta,
    getStatusConsulta
  };