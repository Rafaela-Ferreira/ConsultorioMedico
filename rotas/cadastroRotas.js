const express = require('express');
const rota = express.Router();
const db = require('../models/databaseSqlServer');

// Rota para a página de cadastros
rota.get('/', async (req, res) => {
    try {
        const especialidades = await db.getEspecialidades(); // Obtém especialidades do banco de dados
        res.render('cadastros', { especialidades }); // Renderiza a página 'cadastros' com as especialidades
    } catch (error) {
        res.status(500).send('Erro ao buscar informações do banco de dados');
    }
});

module.exports = rota;