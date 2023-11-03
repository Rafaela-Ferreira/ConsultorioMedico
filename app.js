const express = require('express');
const cadastroRouter = require('./rotas/cadastroRotas');
const loginRouter = require('./rotas/loginRotas');
const db = require('./models/databaseSqlServer');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/cadastros', cadastroRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log(`O aplicativo está rodando em http://localhost:${port}`);
});