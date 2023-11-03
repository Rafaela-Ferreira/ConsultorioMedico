const express = require('express');
const rota = express.Router();

// Rota para a página de login
rota.get('/', (req, res) => {
    res.render('login'); // Renderiza a página 'login'
});

module.exports = rota;